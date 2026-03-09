<script lang="ts">
    import { uuidv4 } from "$lib/utils";

    import * as Accordion from "$lib/components/ui/accordion/index";
    import { Checkbox } from "$lib/components/ui/checkbox/index";
    import D6 from "./D6.svelte";

    let { sequence }: { sequence: { id: string, name: string, roll: number }[] } = $props();

    let add = () => sequence.push({ id: uuidv4(), name: "", roll: 0 })

    let sorted = $derived(sequence.toSorted((a, b) => b.roll - a.roll))

    type FunkyInputEvent = Event & {currentTarget: HTMLInputElement}

    function update(field: string, id: string) {
        return (e: FunkyInputEvent) => {
            e.preventDefault();
            if (e instanceof InputEvent && e.target) {
                let content = (e.target as HTMLInputElement).value
                switch (field) {
                    case "roll":
                        sequence[sequence.indexOf(sequence.filter(it => it.id == id)[0])].roll = Number.parseInt(content)
                        break;
                    case "name":
                        sequence[sequence.indexOf(sequence.filter(it => it.id == id)[0])].name = content
                        break;
                }
            }
        }
    }

    let disadvantage = $state(false)
    let advantage = $state(false)

    let dice1Value = $state(1)
    let dice2Value = $state(2)
    let dice3Value = $state(3)
    let fadeDice = $state(0)

    let getD6Roll = () => Math.floor(Math.random() * 6) + 1
    let reroll = () => {
        dice1Value = getD6Roll();
        dice2Value = getD6Roll();
        dice3Value = getD6Roll();

        if (advantage) {
            let smallest = Math.min(dice1Value, dice2Value, dice3Value)

            if (smallest == dice1Value) fadeDice = 1
            else if (smallest == dice2Value) fadeDice = 2
            else fadeDice = 3
        } else if (disadvantage) {
            let largest = Math.max(dice1Value, dice2Value, dice3Value)

            if (largest == dice1Value) fadeDice = 1
            else if (largest == dice2Value) fadeDice = 2
            else fadeDice = 3
        }
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="fixed top-0.5 right-0.5 w-[20vw] max-h-[60vh] overflow-scroll bg-neutral-950/80 border border-neutral-800 rounded-md px-4">
    <Accordion.Root type="single">
        <Accordion.Item value="combat-sequence">
            <Accordion.Trigger>
                <h3 class="font-display font-bold text-neutral-500 text-center">COMBAT SEQUENCE</h3>
            </Accordion.Trigger>
            <Accordion.Content>
                <div class="mt-1 grid grid-cols-2 text-sm font-mono">
                    {#each sorted as entry}
                        <input oninput={update("name", entry.id)} placeholder="<empty>" type="text" class="text-white border-neutral-500/50 border px-2 p-1" value={entry.name} />
                        <input oninput={update("roll", entry.id)} type="number" class="text-white border-neutral-500/50 border text-right px-2 p-1" value={entry.roll} />
                    {/each}
                </div>
                <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                <h2 class="text-center text-neutral-500 w-full mt-2 border border-neutral-800 cursor-pointer select-none font-mono rounded-md" onclick={add}>+</h2>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
    <Accordion.Root type="single" class="-mt-4">
        <Accordion.Item value="dice-roller">
            <Accordion.Trigger>
                <h3 class="font-display font-bold text-neutral-500 text-center">DICE ROLLER</h3>
            </Accordion.Trigger>
            <Accordion.Content>
                <p class="font-mono text-neutral-400 mb-2 text-xs text-center">Click to roll</p>
                <div class="flex justify-center w-full select-none cursor-pointer" onclick={reroll}>
                    <D6 fade={(advantage || disadvantage) && fadeDice == 1 } value={dice1Value} />
                    <D6 fade={(advantage || disadvantage) && fadeDice == 2} value={dice2Value} />
                    {#if (advantage || disadvantage)}
                        <D6 fade={(advantage || disadvantage) && fadeDice == 3} value={dice3Value} />
                    {/if}
                </div>
                <span class="w-full flex items-center text-center font-mono text-neutral-400 mt-2 select-none">
                    <Checkbox onCheckedChange={() => {
                        advantage = !advantage
                        if (advantage) disadvantage = false
                        reroll()
                    }} checked={advantage} class="inline-block mr-2 border-neutral-400 border-2cursor-pointer"/> Advantage
                </span>
                <span class="w-full flex items-center text-center font-mono text-neutral-400 mt-2 select-none">
                    <Checkbox onCheckedChange={() => {
                        disadvantage = !disadvantage
                        if (disadvantage) advantage = false
                        reroll()
                    }} checked={disadvantage} class="inline-block mr-2 border-neutral-400 border-2 cursor-pointer"/> Disadvantage
                </span>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</div>

