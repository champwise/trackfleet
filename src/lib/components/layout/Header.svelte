<script>
    import Link from "$components/Link.svelte";
    import Button from "$components/Button.svelte";

    import { page } from '$app/stores';

    const links = [
		['/features', 'Features'],
		['/pricing', 'Pricing'],
		['/company', 'Company'],
		['/for-mechanics', 'For Mechanics'],
		['/for-operators', 'For Operators'],
	];


</script>

<header class="py-6 px-12 ">
    <nav>
        <ul class="flex items-center text-base">
            <li class="mr-auto">
                <a href="/"><img class="h-12" src="/logo/logo-black.svg" alt=""></a>
            </li>
            {#each links as [path, name]}
                <Link
                    {path}
                    active={path === '/' ? $page.url.pathname === '/' : $page.url.pathname.includes(path)}
                >
                    {name}
                </Link>
			{/each}
            <li class="ml-6 text-lg">
                <Button type={'primary'}  path={'/signup'}>Try it for free</Button>
            </li>
        </ul>
    </nav>
</header>

<style>
    
</style>