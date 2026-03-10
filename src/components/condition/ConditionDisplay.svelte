<script lang="ts">
    import type Condition from "../../data/condition";
    import ConditionIcon from "./ConditionIcon.svelte";

    import IconPencil from "virtual:icons/tabler/pencil";

    let { condition }: { condition: Condition } = $props();
</script>

<div class="group w-50 text-wrap h-min min-w-full text-center bg-neutral-800 py-3 px-1 rounded-md border-neutral-600 shadow-md border relative">
    <a href={"/conditions/edit/" + condition.id}  class="cursor-pointer absolute -top-2 -right-2 text-white hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all p-1 text-lg bg-neutral-700 border border-neutral-500 rounded-full shadow-md">
        <IconPencil />
    </a>
    <span class={"text-" + condition.colour + "-500 w-full flex flex-row gap-1 justify-center"}>
        <ConditionIcon icon={condition.icon} class="inline-block mt-1" />
        <h2 class="font-display font-bold text-lg text-white">{condition.name}</h2>
    </span>
    <div class="text-center font-body text-neutral-400">        
        <p class="mb-1">{condition.desc}</p>
    </div>
</div>