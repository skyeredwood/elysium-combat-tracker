<script lang="ts">
    import ActorDisplay from '../components/ActorDisplay.svelte';
    import EmptyDisplay from '../components/EmptyDisplay.svelte';
    import { localData } from '$lib/localstorage';
    import type { CombatActor, Condition, Weapon } from '../data/lib.js';
    import type DataFile from '../data/lib.js';
    import ToolsMenu from '../components/menu/ToolsMenu.svelte';
    import SequenceMenu from '../components/menu/QuickMenu.svelte';

    const { form } = $props();
    
    // svelte-ignore state_referenced_locally
    if (form?.success) {
        switch (form?.type) {
            case "actor":
                localData.current.actors.push(form.data!! as CombatActor)
                break;
            case "weapon":
                let filtered = localData.current.weapons.filter(it => it.id == (form?.data as Weapon).id)
                if (filtered.length > 0) {
                    let objIdx = localData.current.weapons.indexOf(filtered[0])
                    localData.current.weapons.splice(objIdx, 1) // I hate this
                } 
                localData.current.weapons.push(form.data!! as Weapon)
                break;
            case "condition":
                let filteredC = localData.current.conditions.filter(it => it.id == (form?.data as Condition).id)
                if (filteredC.length > 0) {
                    let objIdx = localData.current.conditions.indexOf(filteredC[0])
                    localData.current.conditions.splice(objIdx, 1) // I hate this
                } 
                localData.current.conditions.push(form.data!! as Condition)
                break;
            case "upload":
                localData.current = form.data!! as DataFile;
                break;
        }    
    }
</script>

<main class="min-h-screen bg-art p-10 pt-5">
    <div class="grid grid-cols-5 gap-2">
        {#each localData.current.actors as actor}
            <ActorDisplay actor={actor} 
                weapons={localData.current.weapons}
                conditions={localData.current.conditions} />
        {/each} 
        <EmptyDisplay />
    </div>
    <SequenceMenu sequence={localData.current.sequence} />
    <ToolsMenu />
</main>