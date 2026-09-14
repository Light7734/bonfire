<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen w-screen bg-dark-bg">
	<div class="relative">
		<div class="absolute inset-0 border-b-2 border-b-[#fabd2f]">
			<nav class="flex flex-wrap items-center justify-between gap-8 px-6 py-4">
				<a href="/" class=" hover:scale-105">
					<div class="flex items-center gap-2">
						<div class="flex flex-col">
							<span class="w-full text-justify text-2xl font-bold text-[#282828]">Light Wiens</span>
							<span class="text-muted-foreground text-sm text-[#282828]"
								>C++ Specialist · Bibliophile</span
							>
						</div>
						<img src={'/light.svg'} alt={''} class="h-12 w-12 rounded-full object-cover" />
					</div>
				</a>

				<div class="flex flex-wrap items-center gap-6 font-mono text-sm text-[#282828]">
					<a href="/projects" class="hover:scale-105">PROJECTS</a>
					<a href="/articles" class="hover:scale-105">ARTICLES</a>
					<a href="/blogs" class="hover:scale-105">BLOGS</a>
					<a href="/bookmarks" class="hover:scale-105">BOOKMARKS</a>
				</div>
			</nav>
		</div>

		<!-- Hero -->
		<img src={'/pfp.png'} alt="author" class="class=w-screen h-auto min-w-[100%]" />
	</div>

	<div class="p-4">
		<h1 class="font-mono text-2xl">Hai! Ich bin Light Wiens (˶ᵔ ᵕ ᵔ˶)</h1>
		<p class="text-muted-foreground w-[92ch] text-wrap pt-4 leading-relaxed">
			A <strong class="text-[#fb4934]">C++ specialist</strong> and bibliophile with ardent interest
			for <strong class="font-bold">large-scale</strong> projects. <br />
			Accumulating 5+ years of experience through countless failures, many sleepless nights and enough
			caffeine, I've turned myself into a pickle. Are you still reading this? Wow, check out my...
			<a href="/projects" class="hover:scale-105">Projects</a>,
			<a href="/articles" class="hover:scale-105">Articles</a>,
			<a href="/blogs" class="hover:scale-105">Blogs</a> or
			<a href="/bookmarks" class="hover:scale-105">Bookmarks</a> ₍^. .^₎⟆
		</p>
	</div>
</div>
