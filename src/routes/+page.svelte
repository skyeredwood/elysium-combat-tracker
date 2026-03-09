<script lang="ts">
    import ActorDisplay from '../components/ActorDisplay.svelte';
    import EmptyDisplay from '../components/EmptyDisplay.svelte';
    import NavMenu from '../components/menu/NavMenu.svelte';
    import { localData } from '$lib/localstorage';
    import CreateActorModal from '../components/flow/CreateActorModal.svelte';
    import CreateWeaponModal from '../components/flow/CreateWeaponModal.svelte';
    import type { CombatActor, Condition, Weapon } from '../data/lib.js';
    import ConfirmModal from '../components/flow/ConfirmModal.svelte';
    import UploadModal from '../components/flow/UploadModal.svelte';
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
                localData.current.weapons.push(form.data!! as Weapon)
                break;
            case "condition":
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
                weapons={localData.current.weapons.filter(it => actor.weapons.includes(it.id))}
                conditions={localData.current.conditions} />
        {/each} 
        <EmptyDisplay />
    </div>
    <SequenceMenu sequence={localData.current.sequence} />
    <ToolsMenu />
</main>