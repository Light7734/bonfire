<script lang="ts">
	import './article.css';
	import Note from '$lib/components/note.svelte';
</script>

<div class="container">
    <p>
        We retain 10% of what we <strong>read</strong>, 20% of what we <strong>hear</strong>, 30% of
        what we <strong>see</strong>... but 90% of what we <strong>teach</strong> ! <br />

        Dazzle is an effort to <strong>solidify</strong> my understading of the complex world of
        computers. and to give back to the <strong>community</strong> 💖.
    </p>

    <h2 style:padding="0">The Graphics Pipeline</h2>
    <Note type="none" flow="true">
        <p>
            Article series covering the <strong>hows</strong> and <strong>whys</strong> of the
            <strong>Graphics Pipeline</strong>.
        </p>
    </Note>
    <a href="/articles/geometry-processing" class="hover:underline">
    <Note type="resource" title="Geometry Processing" flow="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
            maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
            ligula sagittis, vitae rutrum felis facilisis.
        </p>
    </Note>
        </a>

    <a href="/articles/rasterization" class="hover:underline">
    <Note type="resource" title="Rasterization" flow="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
            maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
            ligula sagittis, vitae rutrum felis facilisis.
        </p>
    </Note>
        </a>

    <a href="/articles/pixel-processing" class="hover:underline">
    <Note type="resource" title="Pixel Processing" flow="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
            maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
            ligula sagittis, vitae rutrum felis facilisis.
        </p>
    </Note>
        </a>

    <a href="/articles/optimizations" class="hover:underline">
    <Note type="resource" title="Optimizations" flow="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue feugiat leo quis
            maximus. Sed id odio a velit hendrerit interdum efficitur quis enim. Morbi luctus lectus non
            ligula sagittis, vitae rutrum felis facilisis.
        </p>
    </Note>
        </a>

</div>
