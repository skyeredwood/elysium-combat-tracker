<script lang="ts">
    import { uuidv4 } from "$lib/utils";
    import IconTools from "virtual:icons/carbon/tools"

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
</script>

<div class="fixed top-0.5 right-0.5 w-[20vw] max-h-[60vh] overflow-scroll bg-neutral-950/80 border border-neutral-800 rounded-md p-2">
    <h3 class="font-display font-bold text-neutral-500 text-center">COMBAT SEQUENCE</h3>
    <div class="mt-1 grid grid-cols-2 text-sm font-mono">
        {#each sorted as entry}
            <input oninput={update("name", entry.id)} placeholder="<empty>" type="text" class="text-white border-neutral-500/50 border px-2 p-1" value={entry.name} />
            <input oninput={update("roll", entry.id)} type="number" class="text-white border-neutral-500/50 border text-right px-2 p-1" value={entry.roll} />
        {/each}
    </div>
    <h2 class="text-center text-neutral-500 w-full mt-2 border border-neutral-800 cursor-pointer select-none font-mono rounded-md" onclick={add}>+</h2>
</div>