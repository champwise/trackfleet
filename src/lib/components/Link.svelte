<script lang="ts">
	/* path for the link */
	export let path: string = '/';
	export let active: boolean;
	export let bold: string = '';
	export let fs: string = '';
	
</script>

<li class="xl:mx-6 mx-4">
	<a href={path} class:active class="{bold} {fs}"><slot /></a>
</li>

<style>
	li {
		font-size: inherit;
		position: relative;
		text-align: center;
	}

	a {
		white-space: nowrap;
	}

	a::after {
		content: '';
		position: absolute;
		bottom: -0.1em;
		left: 0;
		width: 100%;
		height: 0.2em;
		background: var(--accent-500);
		transform: scaleX(0);
		transform-origin: right center;
		transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
	}

	a:hover::after {
		transform: scaleX(1);
		transform-origin: left center;
	}

	li a.active::after {
		left: 0;
		transform: scaleX(1);
		transition: none;
	}
</style>
<!-- ideas to make track under line work
		- SASS with selectors within selectors
		- Emotion css or some css-in-js library -->