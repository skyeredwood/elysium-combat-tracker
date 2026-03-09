<script lang="ts">
    import type Weapon from "../data/weapon";

    let { weapon }: { weapon: Weapon } = $props();
</script>

<div class="bg-neutral-950/30 rounded-md p-2 px-4 text-center">
    <h1 class="text-md font-display font-bold uppercase text-white">{weapon.name}</h1>
    <h3 class="text-xs font-mono uppercase text-neutral-400">{weapon.actionPointCost} AP • {weapon.dmg} DMG</h3>
    {#if weapon.requirements != "none"}
        <h3 class="text-xs font-mono uppercase text-neutral-500 mt-0.5">Requires {weapon.requirements}</h3>
    {/if}
    {#if weapon.notes.length > 0}
        <h3 class="text-sm/5 font-body text-neutral-300 mt-2">{weapon.notes}</h3>
    {/if}
</div>