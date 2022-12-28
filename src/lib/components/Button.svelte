<script lang="ts">

    export let path : string = "/";
    export let type : string;
    export let form : boolean = false;

</script>

<button class="{type == 'secondary' ? 'secondary' : type == 'primary' ? 'primary' : '' }" class:form><a href={path}><slot/></a></button>

<style>

    button {
        border-radius: .25rem;
        font-size: 1rem;
        padding-inline: .75rem;
        padding-top: .375rem;
        padding-bottom: .375rem;
        border-width: 3px;
    }

    .primary {
        background-color: var(--neutral-900);
        color: var(--neutral-50);
        border-color: var(--neutral-900);
    }
    .secondary {
        background-color: var(--neutral-50);
        color: var(--neutral-900);
        border-color: var(--neutral-900);
    }
    .primary:hover, 
    .secondary:hover,
    .primary:focus, 
    .secondary:focus {
        background-color: var(--accent-500);
        border-color: var(--accent-500);
    }

    .primary:active, .secondary:active {
        border-color: var(--neutral-900);  
    }

    

    .form {
        height: 3rem;
    }


</style>