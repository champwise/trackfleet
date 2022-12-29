<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let path: string = '/';

	let element: HTMLElement;

	function setWidth() {
		let elementWidth: number = element.offsetWidth;
		let trackWidth = parseFloat(getComputedStyle(element).fontSize) * 0.625;
		let newWidth = elementWidth + (trackWidth - (elementWidth % trackWidth));
		element.style.width = newWidth + 'px';
	}
	afterUpdate(() => {
		setWidth();
	});
</script>

<li class="mx-6" bind:this={element}>
	<a href={path}><slot /></a>
</li>

<style>
	li {
		font-size: inherit;
		position: relative;
		display: block;
		overflow-x: clip;
		text-align: center;
		width: max-content;
		height: 1.5em;
		padding-inline: 0.125em;
	}

	a {
		white-space: nowrap;
	}

	li a::after {
		content: '';
		position: absolute;
		bottom: -0.1em;
		left: -100%;
		width: 100%;
		height: 100%;
		transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
		background-image: url(/svg/track.svg);
		background-size: 0.625em;
		background-position: left bottom;
		background-repeat: repeat no-repeat;
	}

	li a:hover::after,
	li a:active::after,
	li a:focus::after {
		content: '';
		transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
		transform: translateX(100%);
		transform-origin: left;
	}
</style>
