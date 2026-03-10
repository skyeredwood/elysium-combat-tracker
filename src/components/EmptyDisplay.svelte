<script>
    import CreateActorModal from "./flow/CreateActorModal.svelte";
</script>

<button 
    command="show-modal"
    commandfor="create-actor"
    class="border border-neutral-700 w-full h-[60vh] rounded-md p-3 col-span-1 text-center group flex items-center justify-center cursor-pointer hover:bg-neutral-800/30 hover:border-neutral-500 transition-colors"
    >
    <div class="flex flex-col">
        <h1 class="text-neutral-700 font-display text-[4em] group-hover:text-neutral-500 transition-all select-none">
            +
        </h1>
        <h2 class="text-neutral-500/0 group-hover:text-neutral-500 font-display text-lg font-bold transition-all group-hover:-mt-4">Create Actor</h2>
    </div>
</button>