<script lang="ts">
</script>

<div>
	<form class="mx-auto flex flex-col gap-4 py-4 px-2" action="">
		<button class="flex justify-center items-center h-12 rounded border-3 border-neutral-900 text-base font-bold ">
			<img class="h-6 w-6" src="/socials/google.svg" alt="" /> Sign in with google
		</button>

		<span class="mx-auto"> or </span>
		<input
			class="h-12 rounded border-3 border-neutral-900 text-base"
			type="email"
			placeholder="Email"
		/>
		<input
			class="h-12  rounded border-3 border-neutral-900 text-base"
			type="password"
			placeholder="Password"
		/>
		<button
			class="h-12  rounded border-3 border-neutral-900 bg-neutral-900 text-base text-neutral-50 hover:border-accent-500 hover:bg-accent-500"
            >Create Account
        </button>
		<span>Already have an account <a class="text-accent-300" href="/login">Log in</a></span>
	</form>
</div>
