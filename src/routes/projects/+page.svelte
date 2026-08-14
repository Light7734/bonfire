<script lang="ts">
	import '../../app.css';

	function json_to_project(json: any) {
		return {
			title: json.title,
			icon: json.icon,
			headline: json.headline,
			description: json.description,
			forge: json.forge,
			codeberg: json.codeberg,
			github: json.github,
			gitlab: json.gitlab,
			docs: json.docs,
			gallery: json.gallery
		};
	}

	import Project from './project.svelte';

	import * as light from '$lib/data/projects/light.json';
	import * as dazzle from '$lib/data/projects/dazzle.json';
	import * as bonfire from '$lib/data/projects/bonfire.json';
	import * as hikari from '$lib/data/projects/hikari.json';

	const light_data = json_to_project(light);
	const dazzle_data = json_to_project(dazzle);
	const bonfire_data = json_to_project(bonfire);
	const hikari_data = json_to_project(hikari);
</script>


		<div class="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 items-center">
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
			<h1
				class="rounded-lg px-4 align-middle font-mono text-4xl transition-all duration-300 ease-out"
			>
				PROJECTS
			</h1>
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
		</div>

		<br />

		<Project data={light_data} />
		<br />

		<Project data={dazzle_data} />
		<br />

		<Project data={hikari_data} />
		<br />

		<Project data={bonfire_data} />
		<br />

<style>
	/* Additional custom styles if needed */
</style>
