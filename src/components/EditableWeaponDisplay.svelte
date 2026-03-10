<script lang="ts">
    import type Weapon from "../data/weapon";

    import IconPencil from "virtual:icons/tabler/pencil"

    let { weapon }: { weapon: Weapon } = $props();
</script>

<div class="group relative bg-neutral-800 border border-neutral-600 rounded-md h-min p-2 px-4 text-center">
    <a href={"/weapons/edit/" + weapon.id}  class="cursor-pointer absolute -top-2 -right-2 text-white hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all p-1 text-lg bg-neutral-700 border border-neutral-500 rounded-full shadow-md">
        <IconPencil />
    </a>
    <h1 class="text-md font-display font-bold uppercase text-white">{weapon.name}</h1>
    <h3 class="text-xs font-mono uppercase text-neutral-400 mb-0.5">{weapon.actionPointCost} AP • {weapon.dmg} DMG</h3>
    {#if weapon.requirements != "none"}
        <h3 class="text-xs font-mono uppercase text-neutral-500">Requires {weapon.requirements}</h3>
    {/if}
    {#if weapon.notes.length > 0}
        <h3 class="text-sm/5 font-body text-neutral-300 mt-2">{weapon.notes}</h3>
    {/if}
</div>