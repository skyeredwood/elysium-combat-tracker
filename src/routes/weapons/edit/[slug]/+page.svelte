<script lang="ts">
    import { localData } from "$lib/localstorage";
    import IconBack from "virtual:icons/tabler/arrow-back-up";

    import { page } from '$app/state';
    import { WeaponType } from "../../../../data/weapon";

    let slug = page.params.slug
    let weapon = localData.current.weapons.find(it => it.id == slug)
</script>  

<main class="min-h-screen bg-art p-10 pt-5">
    <a href="/" class="fixed top-5 left-5 text-neutral-400 hover:text-neutral-300 transition-all"><IconBack /></a>
    {#if weapon != undefined}
        <h1 class="text-3xl text-white font-display font-bold text-center mb-4">EDIT WEAPON</h1>
        <form method="POST" action="/?/weapon">
            <div class="p-4">
                <div class="grid grid-cols-1 gap-2">
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center opacity-60 select-none">
                        ID:
                        <input required readonly name="id" type="text" value={weapon.id} class="px-2 border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        Name:
                        <input required name="name" type="text" value={weapon.name} class="px-2 border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        Type:
                        <select required name="type" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block">
                            {#each Object.entries(WeaponType).filter(it => typeof it[1] !== "number") as type}
                                <option selected={weapon.type == type[1]} value={type[0]}>{type[1]}</option>
                            {/each}
                        </select>
                    </label>

                    <label class="font-mono text-neutral-400 text-sm mt-6 grid grid-cols-2 items-center">
                        AP Cost:
                        <input required name="ap" type="number" value={weapon.actionPointCost} class="px-2 border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        DMG:
                        <input required name="dmg" type="text" value={weapon.dmg} class="px-2 border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        Requirements:
                        <input required name="req" type="text" value={weapon.requirements} class="px-2 border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        Notes:
                        <input name="notes" type="text" value={weapon.notes} class="px-2 border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                </div>
            </div>
            <div class="bg-neutral-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center">
                <button type="submit" class="font-display font-bold bg-neutral-700 text-neutral-400 hover:border-neutral-500 border-3 border-neutral-700 px-1 rounded-md">
                    Update
                </button>
            </div>
        </form>
    {:else}
        <h1 class="text-3xl text-white font-display font-bold text-center mt-4">Well this is awkward...</h1>
        <h1 class="text-xl text-neutral-300 font-body text-center">The weapon you're trying to edit doesn't seem to exist.</h1>
    {/if}
</main>