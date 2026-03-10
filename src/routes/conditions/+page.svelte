<script lang="ts">
    import { localData } from "$lib/localstorage";
    import ConditionDisplay from "../../components/condition/ConditionDisplay.svelte";
    import EditableWeaponDisplay from "../../components/EditableWeaponDisplay.svelte";
    import ToolsMenu from "../../components/menu/ToolsMenu.svelte";
    import WeaponDisplay from "../../components/WeaponDisplay.svelte";
    import IconBack from "virtual:icons/tabler/arrow-back-up";
</script>  

<main class="min-h-screen bg-art p-10 pt-5">
    <a href="/" class="fixed top-5 left-5 text-neutral-400 hover:text-neutral-300 transition-all"><IconBack /></a>
    <h1 class="text-3xl text-white font-display font-bold text-center mb-4">CONDITIONS</h1>
    <div class="grid grid-cols-5 gap-2">
        {#each localData.current.conditions as condition}
            <ConditionDisplay {condition} />
        {/each}
        <button 
            command="show-modal"
            commandfor="create-condition"
            class="border border-neutral-700 w-full h-[20vh] rounded-md p-3 col-span-1 text-center group flex items-center justify-center cursor-pointer hover:bg-neutral-800/30 hover:border-neutral-500 transition-colors"
            >
            <div class="flex flex-col">
                <h1 class="-mt-5 text-neutral-700 font-display text-[4em] group-hover:text-neutral-500 transition-all select-none">
                    +
                </h1>
                <h2 class="text-neutral-500/0 group-hover:text-neutral-500 font-display text-lg font-bold transition-all group-hover:-mt-4">Create Condition</h2>
            </div>
        </button>
    </div>

    <ToolsMenu />
</main>