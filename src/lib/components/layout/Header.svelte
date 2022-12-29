<script>
    import Link from "$components/Link.svelte";
    import Button from "$components/Button.svelte";
</script>

<header class="py-6 px-12 ">
    <nav>
        <ul class="flex items-center text-base">
            <li class="mr-auto">
                <a href="/"><img class="h-12" src="/logo/logo-black.svg" alt=""></a>
            </li>
            <Link  path={'/features'}>Features</Link>
            <Link path={'/pricing'}>Pricing</Link>
            <Link path={'/company'}>Company</Link>
            <Link path={'/for-mechanics'}>For Mechanics</Link>
            <Link path={'/for-operators'}>For Operators</Link>
            <li class="ml-6 text-lg">
                <Button type={'primary'}  path={'/signup'}>Try it for free</Button>
            </li>
        </ul>
    </nav>
</header>

<style>
    
</style>