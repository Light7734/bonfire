<script lang="ts">
	export let repositoryUrl: string;

	interface LanguageData {
		[key: string]: number;
	}

	interface ParsedRepo {
		platform: 'github' | 'gitlab' | 'codeberg' | 'forgejo';
		owner: string;
		repo: string;
	}

	let languages: LanguageData = {};
	let loading = true;
	let error = '';

	// Parse repository URL to determine platform and extract owner/repo
	function parseRepoUrl(url: string): ParsedRepo | null {
		try {
			const urlObj = new URL(url);
			const hostname = urlObj.hostname;
			const pathParts = urlObj.pathname.split('/').filter((p) => p);

			if (pathParts.length < 2) return null;

			let platform: ParsedRepo['platform'];
			if (hostname.includes('github.com')) {
				platform = 'github';
			} else if (hostname.includes('gitlab.com')) {
				platform = 'gitlab';
			} else if (hostname.includes('codeberg.org')) {
				platform = 'codeberg';
			} else {
				platform = 'forgejo'; // Assume forgejo for custom instances
			}

			return {
				platform,
				owner: pathParts[0],
				repo: pathParts[1].replace('.git', '')
			};
		} catch {
			return null;
		}
	}

	// Fetch language data from GitHub API
	async function fetchGitHub(owner: string, repo: string) {
		const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
		if (!response.ok) throw new Error('Failed to fetch from GitHub');
		return await response.json();
	}

	// Fetch language data from GitLab API
	async function fetchGitLab(owner: string, repo: string) {
		const projectPath = encodeURIComponent(`${owner}/${repo}`);
		const response = await fetch(`https://gitlab.com/api/v4/projects/${projectPath}/languages`);
		if (!response.ok) throw new Error('Failed to fetch from GitLab');
		return await response.json();
	}

	// Fetch language data from Codeberg API (Gitea-based)
	async function fetchCodeberg(owner: string, repo: string) {
		// Codeberg uses Gitea API which doesn't have direct language stats
		// We'll use GitHub's linguist approach or fallback
		const response = await fetch(`https://codeberg.org/api/v1/repos/${owner}/${repo}/languages`);
		if (!response.ok) throw new Error('Failed to fetch from Codeberg');
		return await response.json();
	}

	// Calculate percentages
	function calculatePercentages(data: LanguageData) {
		const total = Object.values(data).reduce((sum, val) => sum + val, 0);
		return Object.entries(data)
			.map(([name, bytes]) => ({
				name,
				bytes,
				percentage: ((bytes / total) * 100).toFixed(1)
			}))
			.sort((a, b) => b.bytes - a.bytes);
	}

	// Color mapping for common languages
	const languageColors: { [key: string]: string } = {
		'C++': '#f34b7d',
		CMake: '#da3434',
		Shell: '#89e051',
		JavaScript: '#f1e05a',
		TypeScript: '#3178c6',
		Python: '#3572A5',
		Java: '#b07219',
		Go: '#00ADD8',
		Rust: '#dea584',
		HTML: '#e34c26',
		CSS: '#563d7c',
		Other: '#858585'
	};

	// Fetch languages on mount or when URL changes
	$: if (repositoryUrl) {
		fetchLanguages();
	}

	async function fetchLanguages() {
		loading = true;
		error = '';

		try {
			const parsed = parseRepoUrl(repositoryUrl);
			if (!parsed) {
				throw new Error('Invalid repository URL');
			}

			let data: LanguageData;
			switch (parsed.platform) {
				case 'github':
					data = await fetchGitHub(parsed.owner, parsed.repo);
					break;
				case 'gitlab':
					data = await fetchGitLab(parsed.owner, parsed.repo);
					break;
				case 'codeberg':
					data = await fetchCodeberg(parsed.owner, parsed.repo);
					break;
				default:
					throw new Error('Unsupported platform');
			}

			languages = data;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to fetch language data';
			languages = {};
		} finally {
			loading = false;
		}
	}

	$: languageStats = calculatePercentages(languages);
	$: otherLanguages = languageStats.slice(3);
	$: otherPercentage = otherLanguages
		.reduce((sum, lang) => sum + parseFloat(lang.percentage), 0)
		.toFixed(1);
	$: displayedLanguages = (() => {
		const topThree = languageStats.slice(0, 3);
		if (otherLanguages.length > 0) {
			return [
				...topThree,
				{
					name: 'Other',
					bytes: otherLanguages.reduce((sum, lang) => sum + lang.bytes, 0),
					percentage: otherPercentage
				}
			];
		}
		return topThree;
	})();
</script>

<div class="language-stats block">
	{#if loading}
		<div class="loading">Loading...</div>
	{:else if error}
		<div class="error">{error}</div>
	{:else if languageStats.length > 0}
		<div class="progress-bar">
			{#each displayedLanguages as lang}
				<div
					class="progress-segment"
					style="width: {lang.percentage}%; background-color: {languageColors[lang.name] ||
						'#858585'}"
					title="{lang.name}: {lang.percentage}%"
				></div>
			{/each}
		</div>

		<ul class="language-list">
			{#each displayedLanguages as lang}
				<li>
					<span
						class="language-dot"
						style="background-color: {languageColors[lang.name] || '#858585'}"
					></span>
					<span class="language-name">{lang.name}</span>
					<span class="language-percentage">{lang.percentage}%</span>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="no-data">No language data available</div>
	{/if}
</div>

<style>
	.language-stats {
		background-color: #282828;
		color: #c9d1d9;
		padding: 16px;
		border-radius: 6px;
		border: 1px solid #30363d;
	}

	h2 {
		font-size: 16px;
		font-weight: 600;
		margin: 0 0 12px 0;
		color: #c9d1d9;
	}

	.progress-bar {
		display: flex;
		height: 8px;
		background-color: #21262d;
		border-radius: 6px;
		overflow: hidden;
		margin-bottom: 12px;
	}

	.progress-segment {
		height: 100%;
		transition: width 0.3s ease;
	}

	.language-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
	}

	.language-list li {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
	}

	.language-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.language-name {
		color: #c9d1d9;
	}

	.language-percentage {
		color: #8b949e;
	}

	.loading,
	.error,
	.no-data {
		padding: 16px;
		text-align: center;
		color: #8b949e;
	}

	.error {
		color: #f85149;
	}
</style>
