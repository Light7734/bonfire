<script lang="ts">
	export interface Bookmark {
		title: string;
		description: string | HTMLElement;
		link: string;
	}

	export interface Props {
		caption: string;
		bookmarks: Bookmark[];
	}

	let { caption, bookmarks }: Props = $props();
</script>

<div>
	<strong class="display: block">_.--————————--»»-{caption}-»»--————————--._</strong>
	{#each bookmarks as bookmark}
		<a href={bookmark.link}><p>{bookmark.title}</p></a>
		<p class="pb-4">{bookmark.description}</p>
	{/each}
</div>

<style>
	a:hover {
		text-decoration: underline;
	}

	a > p {
		color: #83a598;
	}
</style>
