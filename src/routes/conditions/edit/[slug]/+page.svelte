<script lang="ts">
    import { localData } from "$lib/localstorage";
    import IconBack from "virtual:icons/tabler/arrow-back-up";

    import { page } from '$app/state';

    let slug = page.params.slug
    let condition = localData.current.conditions.find(it => it.id == slug)
</script>  

<main class="min-h-screen bg-art p-10 pt-5">
    <a href="/" class="fixed top-5 left-5 text-neutral-400 hover:text-neutral-300 transition-all"><IconBack /></a>
    {#if condition != undefined}
        <h1 class="text-3xl text-white font-display font-bold text-center mb-4">EDIT CONDITION</h1>
        <form method="POST" action="/?/condition">
            <div class="p-4">
                <div class="grid grid-cols-1 gap-2">
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center opacity-60 select-none">
                        ID:
                        <input required readonly name="id" type="text" value={condition.id} class="px-2 border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        Name:
                        <input required name="name" type="text" value={condition.name} class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        Description:
                        <input required name="desc" type="text" value={condition.desc} class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                    </label>

                    <label class="font-mono text-neutral-400 text-sm mt-6 grid grid-cols-2 items-center">
                        Colour:
                        <select required name="colour" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block">
                            <option selected={condition.name == "red"} value="red" class="text-red-500">Red</option>
                            <option selected={condition.name == "amber"} value="amber" class="text-amber-500">Amber</option>
                            <option selected={condition.name == "yellow"} value="yellow" class="text-yellow-500">Yellow</option>
                            <option selected={condition.name == "lime"} value="lime" class="text-lime-500">Lime</option>
                            <option selected={condition.name == "emerald"} value="emerald" class="text-emerald-500">Emerald</option>
                            <option selected={condition.name == "cyan"} value="cyan" class="text-cyan-500">Cyan</option>
                            <option selected={condition.name == "blue"} value="blue" class="text-blue-500">Blue</option>
                            <option selected={condition.name == "indigo"} value="indigo" class="text-indigo-500">Indigo</option>
                            <option selected={condition.name == "fuchsia"} value="fuchsia" class="text-fuchsia-500">Fuchsia</option>
                            <option selected={condition.name == "pink"} value="pink" class="text-pink-500">Pink</option>
                            <option selected={condition.name == "neutral"} value="neutral" class="text-neutral-500">Grey</option>
                        </select>
                    </label>
                    <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                        Icon:
                        <select required name="icon"class="border-none py-4 rounded-md text-sm bg-neutral-600 inline-block">
                            <option selected={condition.icon == "droplet"}  value="droplet">Droplet</option>
                            <option selected={condition.icon == "northstar"} value="northstar">North Star</option>
                            <option selected={condition.icon == "moon"} value="moon">Moon</option>
                            <option selected={condition.icon == "target"} value="target">Target</option>
                            <option selected={condition.icon == "eye"} value="eye">Eye</option>
                        </select>
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