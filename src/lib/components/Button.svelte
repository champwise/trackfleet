<script lang="ts">

    export let path : string = "/";
    export let type : string;
    export let form : boolean = false;

</script>

<a class="{type == 'secondary' ? 'secondary' : type == 'primary' ? 'primary' : '' }" class:form href={path}><slot/></a>

<style>

    a {
        border-radius: .25rem;
        font-size: inherit;
        padding-inline: .75rem;
        padding-top: .375rem;
        padding-bottom: .375rem;        
        border-width: 3px;
        transition: all .3s cubic-bezier(0.19, 1, 0.22, 1);
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
        transition: all .3s ease-in-out;
        background-color: var(--accent-500);
        border-color: var(--accent-500);
    }

    .primary:active, .secondary:active {
        border-color: var(--neutral-900);  
    }


</style>