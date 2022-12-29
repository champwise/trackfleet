<script lang="ts">
	import { afterUpdate } from 'svelte';

	/* path for the link */
	export let path: string = '/';
	export let active:boolean;

	/* bound to list item */
	let element: HTMLElement;

	/* function changes element width to whole number of track svg's so the underline doesn't clip */
	function setWidth() {
		let elementWidth: number = element.offsetWidth;
		/* 0.625 is background-size set in css */
		let trackWidth = parseFloat(getComputedStyle(element).fontSize) * 0.625;
		let newWidth = Math.ceil(elementWidth/trackWidth)*trackWidth;
		element.style.width = newWidth + 'px';
	}
	afterUpdate(() => {
		setWidth();
	});
</script>

<li class="mx-6" bind:this={element} >
	<a href={path} class:active ><slot /></a>
</li>

<style>
	li {
		font-size: inherit;
		position: relative;
		display: block;
		overflow-x: clip;
		text-align: center;
		height: 1.5em;
	}

	 li a {
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
	li a:focus::after {
		content: '';
		transform: translateX(100%);
		transform-origin: left;
	}

	.active::after {
		content: '';
		left: 0;
		transition: none;
		
	
	}
	.active:hover::after {
		left: 0;
		transform: none;

	
	}
</style>
