
<script>
	import '../app.css';
	import Bio from './bio.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-dark-bg">

<nav class="flex flex-wrap items-center justify-between gap-8 px-6 py-4 border-b-4 border-b-[#e21a41]">

<a href="/" class=" hover:scale-105">
  <div class="flex items-center gap-2">
    <div class="flex flex-col">
        <span class="text-2xl font-bold w-full text-justify" >Light Wiens</span>
        <span class="text-sm text-muted-foreground">Software Engineer</span>
    </div>
        <img src={"/light.svg"} alt={""} class="h-12 w-12 rounded-full object-cover" />
  </div>
            </a>

<div class="flex flex-wrap items-center gap-6 font-mono text-sm">
        <a href="/projects" class="hover:scale-105">PROJECTS</a>
        <a href="/articles" class="hover:scale-105">ARTICLES</a>
        <a href="/blogs" class="hover:scale-105">BLOGS</a>
        <a href="/bookmarks" class="hover:scale-105">BOOKMARKS</a>
</div>
</nav>

<div class="flex min-h-screen bg-dark-bg">
	<!-- Left Section - Hidden on mobile, visible on lg screens -->
	<div class="relative hidden border-r border-dark-neutral lg:flex lg:w-1/4">
		<!-- Diagonal line pattern -->
		<div class="absolute inset-0">
			<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern id="diagonal-left" patternUnits="userSpaceOnUse" width="40" height="40">
						<line x1="0" y1="40" x2="40" y2="0" stroke="#928374" stroke-width="1" />
					</pattern>
					<linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style="stop-color:white;stop-opacity:0.3" />
						<stop offset="100%" style="stop-color:white;stop-opacity:0.1" />
					</linearGradient>
					<mask id="fade-mask-left">
						<rect width="100%" height="100%" fill="url(#fade-left)" />
					</mask>
				</defs>
				<rect width="100%" height="100%" fill="url(#diagonal-left)" mask="url(#fade-mask-left)" />
			</svg>
		</div>
	</div>

	<!-- Main Content Section -->
	<div class="relative flex-1 lg:w-3/5">

    <!-- Main content area -->
    <div class="min-h-screen p-4">
        <div class="min-h-screen bg-dark-bg text-dark-fg transition-colors duration-300">
            <main class="bg-card transition-all duration-300 ease-out">
                {@render children()}
            </main>
        </div>
    </div>

	</div>

	<!-- Right Section - Hidden on mobile, visible on lg screens -->
	<div class="relative hidden border-l border-dark-neutral lg:flex lg:w-1/4">
		<!-- Diagonal line pattern -->
		<div class="absolute inset-0">
			<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern id="diagonal-right" patternUnits="userSpaceOnUse" width="40" height="40">
						<line x1="0" y1="40" x2="40" y2="0" stroke="#928374" stroke-width="1" />
					</pattern>
					<linearGradient id="fade-right" x1="100%" y1="0%" x2="0%" y2="0%">
						<stop offset="0%" style="stop-color:white;stop-opacity:0.3" />
						<stop offset="100%" style="stop-color:white;stop-opacity:0.2" />
					</linearGradient>
					<mask id="fade-mask-right">
						<rect width="100%" height="100%" fill="url(#fade-right)" />
					</mask>
				</defs>
				<rect width="100%" height="100%" fill="url(#diagonal-right)" mask="url(#fade-mask-right)" />
			</svg>
		</div>
	</div>
</div>

</div>
