<script lang="ts">
    import type Condition from "../../data/condition";
    import * as Tooltip from "$lib/components/ui/tooltip/index";

    import type { CombatActor } from "../../data/lib";
    import ConditionIcon from "./ConditionIcon.svelte";

    let { actor, condition }: { actor: CombatActor, condition: Condition } = $props();

    let remove = () => actor.conditions.splice(actor.conditions.indexOf(condition.id), 1);
</script>

<Tooltip.Root>
    <Tooltip.Trigger onclick={remove} class={"text-" + condition.colour + "-500 hover:text-white transition-colors rounded-md flex justify-center items-center"}>
        <ConditionIcon icon={condition.icon} />
    </Tooltip.Trigger>
    <Tooltip.Content class="text-center w-50 text-wrap font-body text-neutral-400 bg-neutral-950">
        <h2 class="font-display font-bold text-sm text-white">{condition.name}</h2>
        <p class="mb-1">{condition.desc}</p>
    </Tooltip.Content>
</Tooltip.Root>