<script>
	import Project from './project.svelte';
	import ThemeToggle from './theme.svelte';
	import TiltCard from './tiltcard.svelte';

	// Assuming icons for Github, Gitlab, Codeberg (Code), Forgejo (GitBranch)
	import { Github, Gitlab, Code, GitBranch } from 'lucide-svelte';

	const repository = {
		label: 'Forge',
		url: 'https://git.light7734.com/light7734/light',
		iconComponent: GitBranch
	};

	const mirrors = [
		{ label: 'Github', url: 'https://github.com/light7734/light', iconComponent: Github },
		{ label: 'Gitlab', url: 'https://gitlab.com/light7734/light', iconComponent: Gitlab },
		{ label: 'Codeberg', url: 'https://codeberg.org/light7734/light', iconComponent: Code }
	];

	const gallery = [
		'https://placekittens.com/720/480',
		'https://placekittens.com/720/481',
		'https://placekittens.com/720/482',
		'https://placekittens.com/720/483',
		'https://placekittens.com/720/484',
		'https://placekittens.com/720/484'
	];

	const features = ['MSAA', 'SSAO', 'PBR Lighting'];

	const languages = [{ name: 'C++23', icon: 'cplusplus.svg' }, { name: 'CMake' }];

	const graphicsApis = ['Vulkan', 'Metal', 'DirectX12'];

	const cicd = ['Drone', 'Docker'];
</script>

<div
	class="flex min-h-screen bg-gruvboxLight-bg text-gruvboxLight-fg transition-colors duration-300 dark:bg-gruvboxDark-bg dark:text-gruvboxDark-fg"
>
	<div class="flex-1 bg-[#1d2021]"></div>
	<main class="bg-card relative flex-[10] p-8 transition-all duration-300 ease-out">
		<div class="absolute right-0 top-0">
			<ThemeToggle />
		</div>

		<h1>Bio</h1>

		<br />

		<Project
			title="LIGHT"
			description_preview="Dependency free, cross-platform, cross-graphics-api, bleeding-edge game engine."
			description="Dependency free, cross-platform, cross-graphics-api, bleeding-edge game engine."
			icon="/light.svg"
			{repository}
			{mirrors}
			{gallery}
			{features}
			{languages}
			{graphicsApis}
			{cicd}
		/>

		<br />
		<Project
			title="LIGHT"
			description_preview="Dependency free, cross-platform, cross-graphics-api, bleeding-edge game engine."
			description="Detailed description here."
			icon="/light.svg"
			{repository}
			{mirrors}
			{gallery}
			{features}
			{languages}
			{graphicsApis}
			{cicd}
		/>
	</main>
	<div class="flex-1 bg-[#1d2021]"></div>
</div>
<!-- Brief Bio
-->

<!--OPEN SOURCE PROJECTS -->
<!-- Description
I love teaching! I've learned that it's the most effective way to solidify your knowledge and leave
little to no gaps. Dazzle is the collection of my articles teaching a subject in depth. It delves
into topics such as rendering, mathematics, guidelines and more. It's just my way of giving back to
the community!
-->
<!-- Gallery 
<...images...>
-->
<!-- Technical Details 
Technology behind Dazzle:
-->
<!-- Source Code 
Check out the source code on any of the official mirrors or on the main self-hosted repo.
    Self-hosted with <3 using Forgejo (a fork of Gittea)
    CodeBerg mirror
    GitLab mirror
    GitHub mirror
    <Commit_Tiles/>
-->

<!-- Brief Light
Light is an awesome bleeding-edge, *all the buzzwords* game-engine...
-->
<!-- Gallery 
    * Insert awesome renders here *
-->
<!-- Technical Details 
Features:
    MSAA
    SSAO
    PBR Lighting

Technology behind Light:
    Languages:
        C++23, CMake, Shell-script, Lua, Python
    Graphics APIs:
        OpenGL, Vulkan, Metal, DirectX12
    CICD: 
        Drone, Docker, 

Check out the source code on any of the official mirrors or on the main self-hosted repo.
    Self-hosted with <3 using Forgejo (a fork of Gittea)
    CodeBerg mirror
    GitLab mirror
    GitHub mirror

    <Commit_Tiles/>
-->

<!-- Brief Bonfire
You're enjoying its warmth on your eyes! It's my portfolio v2.0 rebuilt from scratch using the rightfully
loved Svelte framework. 0 uninterresting information. 0 tabs/navigaroins, just scroll down :)
-->
<!-- Gallery 
-->
<!-- Technical Details 
Bonfire is powered by:
    Svelte,
    Tailwindcss,
    Nginx
    Segs
-->
<!-- Source Code 
    Self-hosted with <3 using Forgejo (a fork of Gittea)
    CodeBerg mirror
    GitLab mirror
    GitHub mirror

    <Commit_Tiles/>
-->

<!-- Work Experience -->
<!-- Brief Bitwyrek -->
<!-- Details -->

<!-- Brief STG -->
<!-- Details -->

<!-- Call to action (Got a problem?)
Let me have a shot at it!
...
-->

<!-- Contact
Location: Iran - Tehran Province - Tehran

Call: +________________
Mail: job@light7734.com
Mail: light7734@tuta.io
Message:
    Telegram: @Light7734
    Matrix: matrix.org:@light7734

[Download] Resume (pdf)
[Download] Business Card (pdf)

PS: I may not respond till Saturday (unless you call my phone) since I'm **locked in** on other days.
-->
