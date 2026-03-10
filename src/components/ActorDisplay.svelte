<script lang="ts">
    import { type CombatActor, type Condition, type Weapon } from "../data/lib";
    import WeaponDisplay from "./WeaponDisplay.svelte";

    import * as Popover from "$lib/components/ui/popover/index";

    import IconLife from "virtual:icons/tabler/health-recognition";
    import IconDowned from "virtual:icons/tabler/skull";

    import IconReflex from "virtual:icons/tabler/arrow-big-right-lines-filled";
    import IconAP from "virtual:icons/tabler/brand-react";
    import ConditionDisplayTag from "./condition/ConditionDisplayTag.svelte";
    import ConditionTag from "./condition/ConditionTag.svelte";
    import { WeaponType } from "../data/weapon";

    let { actor, weapons, conditions }: { actor: CombatActor, weapons: Weapon[], conditions: Condition[] } = $props();

    type FunkyInputEvent = Event & {currentTarget: HTMLSelectElement}

    let onAddWeapon = (e: FunkyInputEvent) => {
        console.log(e.currentTarget.value)
        actor.weapons.push(e.currentTarget.value); // when new weapon is chosen, update list
    };

    function increment(thing: string, inc: number) {
        switch (thing) {
            case "health":
                return () => actor.currentHP += inc;
            case "morale":
                return () => actor.currentMorale += inc;
            case "int":
                return () => actor.stats.int += inc;
            case "psy":
                return () => actor.stats.psy += inc;
            case "fys":
                return () => actor.stats.fys += inc;
            case "mot":
                return () => actor.stats.mot += inc;
        }
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class={"h-min bg-neutral-700/50 rounded-md border border-neutral-500 shadow-md p-3 col-span-1" + (actor.downed && " opacity-50")}>
    <div class="flex justify-between">
        <h1 class="font-bold text-left font-display text-3xl text-white select-none">{actor.name}</h1>
        {#if actor.downed}
            <IconDowned class="text-3xl text-right text-neutral-500 hover:text-neutral-400 cursor-pointer" onclick={() => actor.downed = !actor.downed} />
        {:else}
            <IconLife class="text-3xl text-right text-neutral-500 hover:text-neutral-400 cursor-pointer" onclick={() => actor.downed = !actor.downed} />
        {/if}
    </div>
    <h3 class="-mt-1 uppercase font-bold font-mono text-xs text-neutral-400 mb-4 select-none">{actor.desc}</h3>

    <h3 class="uppercase font-mono font-bold text-neutral-400 text-xs mb-1 select-none">ATTRIBUTES</h3>
    <div class="grid grid-cols-3 gap-1 mb-4 min-h-[15vh]">
        <div class="bg-red-700 content-center rounded-md overflow-hidden relative">
            <div onclick={increment("health", +1)} class="absolute top-0 w-full bg-red-900 hover:bg-red-800 font-mono text-white overflow-hidden border-b border-red-600 text-center select-none">
                +
            </div>
            <input class="bg-transparent border-none font-display font-bold text-white text-3xl min-w-full text-center" 
                type="number" 
                min="0" 
                value={actor.currentHP} 
                max={actor.maxHP} 
                />
            <div onclick={increment("health", -1)} class="absolute bottom-0 w-full bg-red-900 hover:bg-red-800 font-mono text-white overflow-hidden border-t border-red-600 text-center select-none">
                -
            </div>
        </div>
        <div class="bg-indigo-700 content-center rounded-md overflow-hidden relative">
            <div onclick={increment("morale", +1)}  class="absolute top-0 w-full bg-indigo-900 hover:bg-indigo-800 font-mono text-white border-b border-indigo-500 text-center select-none">
                +
            </div>
            <input class="bg-transparent border-none font-display font-bold text-white text-3xl min-w-full text-center" 
                type="number" 
                min="0" 
                value={actor.currentMorale} 
                max={actor.maxMorale} 
                />
            <div onclick={increment("morale", -1)} class="absolute bottom-0 w-full bg-indigo-900 hover:bg-indigo-800 font-mono text-white overflow-hidden border-t border-indigo-500 text-center select-none">
                -
            </div>
        </div>
        <div class="grid grid-rows-4 gap-1 text-xs">
            <div class="bg-lime-600 content-center text-lime-100 font-mono text-left px-1 rounded-md shadow-md inline">
                <IconAP class="inline-block -mr-1 -mt-0.5" /> {actor.actionPoints} AP
            </div>
            <div class="bg-fuchsia-600 content-center text-fuchsia-100 font-mono text-left px-1 text-xs rounded-md shadow-md">
                <IconReflex class="inline-block -mr-1 -mt-0.5" /> {actor.reflex} RFLX
            </div>
            <div class="row-span-2 grid grid-rows-3 grid-cols-4 gap-0.5">
                {#each actor.conditions as condition}
                    <ConditionTag {actor} condition={conditions.filter(it => it.id == condition)[0]} />
                {/each}
                <Popover.Root>
                    <Popover.Trigger class="border border-neutral-400 text-neutral-400 rounded-sm flex justify-center items-center select-none hover:bg-neutral-200/20 transition-colors cursor-pointer">
                        +
                    </Popover.Trigger>
                    <Popover.Content class="bg-neutral-700 border-neutral-500 text-body grid grid-cols-8">
                        {#each conditions as condition}
                            <ConditionDisplayTag {condition} {actor} />
                        {/each}
                    </Popover.Content>
                </Popover.Root>
            </div>
        </div>
    </div>

    <h3 class="uppercase font-mono font-bold text-neutral-400 text-xs mb-1 select-none">STATS</h3>
    <div class="grid grid-cols-4 gap-1 mb-4">
        <div class="bg-sky-700 content-center rounded-md overflow-hidden">
            <div onclick={increment("int", +1)} class="w-full bg-sky-900 font-mono text-white border-b border-sky-600 text-center select-none">+</div>
            <input class="bg-transparent border-none font-display font-bold text-white text-3xl w-full text-center" 
                type="number" 
                min="0" 
                value={actor.stats.int}
                />
            <div onclick={increment("int", -1)} class="w-full bg-sky-900 font-mono text-white overflow-hidden border-t border-sky-600 text-center select-none">-</div>
        </div>
        <div class="bg-violet-700 content-center rounded-md overflow-hidden">
            <div onclick={increment("psy", +1)} class="w-full bg-violet-900 font-mono text-white border-b border-violet-600 text-center select-none">+</div>
            <input class="bg-transparent border-none font-display font-bold text-white text-3xl w-full text-center" 
                type="number" 
                min="0" 
                value={actor.stats.psy}
                />
            <div onclick={increment("psy", -1)} class="w-full bg-violet-900 font-mono text-white overflow-hidden border-t border-violet-600 text-center select-none">-</div>
        </div>
        <div class="bg-red-700 content-center rounded-md overflow-hidden">
            <div onclick={increment("fys", +1)} class="w-full bg-red-900 font-mono text-white border-b border-red-600 text-center select-none">+</div>
            <input class="bg-transparent border-none font-display font-bold text-white text-3xl w-full text-center" 
                type="number" 
                min="0" 
                value={actor.stats.fys}
                />
            <div onclick={increment("fys", -1)} class="w-full bg-red-900 font-mono text-white overflow-hidden border-t border-red-600 text-center select-none">-</div>
        </div>
        <div class="bg-amber-700 content-center rounded-md max-w-full overflow-hidden">
            <div onclick={increment("mot", +1)} class="w-full bg-amber-900 font-mono text-white border-b border-amber-600 text-center select-none">+</div>
            <input class="bg-transparent border-none font-display font-bold text-white text-3xl w-full text-center" 
                type="number" 
                min="0" 
                value={actor.stats.mot}
                />
            <div onclick={increment("mot", -1)} class="w-full bg-amber-900 font-mono text-white overflow-hidden border-t border-amber-600 text-center select-none">-</div>
        </div>
    </div>

    <div class="grid gap-1 mb-4">
        <h3 class="uppercase font-mono font-bold text-neutral-400 text-xs select-none">WEAPONS</h3>
        {#each actor.weapons as weapon}
            <WeaponDisplay weapon={weapons.filter(it => it.id == weapon)[0]} />
        {/each}
        <Popover.Root>
            <Popover.Trigger>
                <div class="border-[1.5px] hover:border-neutral-400 hover:text-neutral-400 transition-colors border-neutral-500 text-neutral-500 cursor-pointer select-none font-mono font-bold rounded-md">
                    +
                </div>
            </Popover.Trigger>
            <Popover.Content class="bg-neutral-800/90 border border-neutral-600">
                <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                    Choose weapon:
                    <select name="weapon" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" onchange={onAddWeapon}>
                        {#each Object.entries(WeaponType).filter(([key, value]) => isNaN(Number(key)) || typeof value === 'number') as type}
                            <optgroup label={type[0]}>
                                {#each weapons.filter(it => it.type == type[1]) as weapon}
                                    <option value={weapon.id}>{weapon.name}</option>
                                {/each}
                            </optgroup>
                        {/each}
                    </select>
                </label>
            </Popover.Content>
        </Popover.Root>
    </div>

    <div class="">
        <h3 class="uppercase font-mono font-bold text-neutral-400 text-sm">NOTES</h3>
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <textarea rows={5} 
                class="font-body text-sm/5 w-full border-none resize-none bg-transparent p-0 text-neutral-400" 
                value={actor.notes} 
                />
    </div>
</div>