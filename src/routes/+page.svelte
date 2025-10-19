<script lang="ts">
	function json_to_project(json: any) {
		return {
			title: json.title,
			icon: json.icon,
			headline: json.headline,
			forge: json.forge,
			codeberg: json.codeberg,
			github: json.github,
			gitlab: json.gitlab,
			docs: json.docs,
			gallery: json.gallery
		};
	}

	import Project from './project.svelte';
	import Bio from './bio.svelte';
	import ThemeToggle from './theme.svelte';

	import * as light from './projects/light.json';
	import * as dazzle from './projects/dazzle.json';
	import * as bonfire from './projects/bonfire.json';
	import * as hikari from './projects/hikari.json';

	const light_data = json_to_project(light);
	const dazzle_data = json_to_project(dazzle);
	const bonfire_data = json_to_project(bonfire);
	const hikari_data = json_to_project(hikari);

	const lorem_ipsum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
</script>

<div
	class="min-h-screen bg-light-bg text-light-fg transition-colors duration-300 dark:bg-dark-bg dark:text-dark-fg"
>
	<main class="bg-card p-8 transition-all duration-300 ease-out">
		<Bio />

		<br />

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

		<Project description={lorem_ipsum} data={light_data} />
		<br />

		<Project description={lorem_ipsum} data={dazzle_data} />
		<br />

		<Project description={lorem_ipsum} data={bonfire_data} />
		<br />

		<Project description={lorem_ipsum} data={hikari_data} />
		<br />

		<div class="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 items-center">
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
			<h1
				class="rounded-lg px-4 align-middle font-mono text-4xl transition-all duration-300 ease-out"
			>
				EXPERIENCE
			</h1>
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
		</div>
		<br />

		<!-- <Project headline="C++ Engineer" description={lorem_ipsum} /> -->
		<!-- <br /> -->
		<!---->
		<!-- <Project headline="C++ Engineer" description={lorem_ipsum} /> -->
		<!-- <br /> -->

		<div class="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 items-center">
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
			<h1
				class="rounded-lg px-4 align-middle font-mono text-4xl transition-all duration-300 ease-out"
			>
				CONTACT :D
			</h1>
			<div class="border-border flex-grow border-t border-t-dark-neutral"></div>
		</div>
		<br />
	</main>
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
<!-- Brief Bitwyre -->
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
