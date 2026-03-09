<script>
    import CreateActorModal from "./flow/CreateActorModal.svelte";
</script>

<button 
    command="show-modal"
    commandfor="create-actor"
    class="border border-neutral-700 min-w-full h-80vh rounded-md p-3 col-span-1 text-center group flex items-center justify-center cursor-pointer hover:bg-neutral-800/30 hover:border-neutral-500 transition-colors"
    >
    <h1 class="text-neutral-700 font-display text-[4em] group-hover:text-neutral-500 select-none">
        +
    </h1>
</button>