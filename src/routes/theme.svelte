<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { Sun, Moon } from 'lucide-svelte';
	const theme = writable<'light' | 'dark'>('light');

	onMount(() => {
		// Load from localStorage if exists
		const stored = localStorage.getItem('theme');
		if (stored === 'dark') {
			document.documentElement.classList.add('dark');
			theme.set('dark');
		}
	});

	function toggleTheme() {
		theme.update((current) => {
			const next = current === 'light' ? 'dark' : 'light';
			if (next === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			localStorage.setItem('theme', next);
			return next;
		});
	}
</script>

<button
	on:click={toggleTheme}
	class="text-gruvboxLight-fg dark:text-gruvboxDark-fg rounded-md px-4 py-2 transition-all duration-300 ease-out hover:scale-[1.05] hover:drop-shadow-[2px_2px_1px_#000000]"
>
	{#if $theme === 'light'}
		<Moon class="size-8" />
	{/if}

	{#if $theme === 'dark'}
		<Sun class="size-8" />
	{/if}
</button>
