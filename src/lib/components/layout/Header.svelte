<script lang="ts">
	import Link from '$components/Link.svelte';
	import Button from '$components/Button.svelte';
	import { page } from '$app/stores';

	const links = [
		['/features', 'Features'],
		['/pricing', 'Pricing'],
		['/company', 'Company'],
		['/for-mechanics', 'For Mechanics'],
		['/for-operators', 'For Operators']
	];

	let screenWidth: number;

	let open = false;

	function openNav() {
		if (open === false) {
			open = true;
		} else {
			open = false;
		}
		console.log(open);
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 1024}
	<header class="border-b-2 border-neutral-900 py-6 px-12">
		<nav>
			<ul class="flex items-center text-base">
				<li class="mr-auto">
					<a href="/"><img class="h-12" src="/logo/logo-black.svg" alt="" /></a>
				</li>
				{#each links as [path, name]}
					<Link
						{path}
						active={path === '/' ? $page.url.pathname === '/' : $page.url.pathname.includes(path)}
					>
						{name}
					</Link>
				{/each}
				<li class="ml-6 text-base xl:text-lg">
					<Button type={'secondary'} path={'/login'}>Log in</Button>
				</li>
				<li class="ml-6 text-base xl:text-lg">
					<Button type={'primary'} path={'/signup'}>Try it for free</Button>
				</li>
			</ul>
		</nav>
	</header>
{:else}
	<header class="relative border-b-2 border-neutral-900 py-5  px-6 sm:px-9">
		<div class="flex items-center">
			<div class="mr-auto">
				<a href="/"><img class="h-12" src="/logo/logo-black.svg" alt="" /></a>
			</div>
			<li class="mr-6 hidden text-base sm:block">
				<Button type={'primary'} path={'/signup'}>Try it for free</Button>
			</li>
			<button id="nav-toggle" class="relative" on:click={openNav}>
				<div class:open id="bar1" />
				<div class:open id="bar2" />
				<div class:open id="bar3" />
			</button>
		</div>
	</header>
	<!-- #todo 
		-review when landing page has content
		-set max height
	-->
	<nav id="nav-menu" class="absolute left-full w-full bg-neutral-50" class:open>
		<ul class="my-4 flex flex-col items-center gap-4" on:click={openNav} on:keydown={openNav}>
			{#each links as [path, name]}
				<Link
					{path}
					active={path === '/' ? $page.url.pathname === '/' : $page.url.pathname.includes(path)}
				>
					{name}
				</Link>
			{/each}
			<li class="my-4 text-lg">
				<Button type={'secondary'} path={'/login'}>Log in</Button>
			</li>
			<li class="my-4 text-lg">
				<Button type={'primary'} path={'/signup'}>Try it for free</Button>
			</li>
		</ul>
	</nav>
{/if}

<style>
	#nav-toggle {
		width: 2rem;
		height: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	#nav-toggle div {
		height: 20%;
		background-color: var(--neutral-900);
		transition: all 0.3s ease-in-out;
	}
	.open#bar1 {
		transform: translate(0, 200%) rotate(-45deg);
	}
	.open#bar2 {
		opacity: 0;
	}
	.open#bar3 {
		transform: translate(0, -200%) rotate(45deg);
	}

	.open#nav-menu {
		left: 0;
	}
</style>
