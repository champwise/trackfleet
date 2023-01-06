<script lang="ts">
    import { page } from '$app/stores';

</script>

<form class="mx-auto flex flex-col gap-4 px-8 text-center max-w-md font-bold" action="">
    <div class=""></div><!-- Error div -->
    <button class="h-12 px-5 rounded border-3 border-neutral-900 transition-transform translate-x-0 hover:translate-y-[-2px]">
        <div class="flex items-center justify-center">
            <span class="mr-3">
                <svg class="svg" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill-rule="evenodd" fill-opacity="1" fill="#4285f4" stroke="none"></path><path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill-rule="evenodd" fill-opacity="1" fill="#34a853" stroke="none"></path><path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill-rule="evenodd" fill-opacity="1" fill="#fbbc05" stroke="none"></path><path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill-rule="evenodd" fill-opacity="1" fill="#ea4335" stroke="none"></path></svg>
            </span>
            <div class="text-ellipsis overflow-hidden whitespace-nowrap">Continue with Google</div>
        </div>
    </button>

    <span class="mx-auto"> or </span>
    <input
        class="h-12 pl-3 pr-1.5 rounded border-3 border-neutral-900 "
        type="email"
        placeholder="Email"
    />
    <input
        class="h-12 pl-3 pr-1.5 rounded border-3 border-neutral-900 "
        type="password"
        placeholder="Password"
    />
    <button
        class="h-12  rounded border-3 border-neutral-900 bg-neutral-900 text-neutral-50 hover:border-accent-500 hover:bg-accent-500 text-ellipsis overflow-hidden whitespace-nowrap transition-transform translate-x-0 hover:translate-y-[-2px]">
        {#if $page.url.pathname === '/signup'}
        Create Account
        {:else if $page.url.pathname === '/login'}  
        Log in
        {/if}
        
    </button>
    <div>
        <a class="hover:underline text-blue-600" href="/">Use single sign-on</a>
    </div>
    {#if $page.url.pathname === '/signup'}
    <div>
        Already have an account?
        <a class="hover:underline text-blue-600" href="/login"> Log in</a>
    </div>
    <div>
        <span class="text-sm">
            By clicking "Create account", I agree to Figma's 
            <a class="hover:underline text-blue-600" href="/">TOS</a>
            and
            <a class="hover:underline text-blue-600" href="/">Privacy Policy</a>
            .
        </span>
    </div>
    {:else if $page.url.pathname === '/login'}
    <div>
        <a class="hover:underline text-blue-600" href="/">Reset password</a>
    </div>
    <div>
        No account?
        <a class="hover:underline text-blue-600" href="/signup"> Create one</a>
    </div>

    {/if}
    
</form>