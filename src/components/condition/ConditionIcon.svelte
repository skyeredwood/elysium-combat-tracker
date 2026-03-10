<script lang="ts">
    import IconRainDrop from "virtual:icons/tabler/drop-circle-filled";
    import IconNorthStar from "virtual:icons/tabler/north-star";
    import IconMoon from "virtual:icons/tabler/moon-stars";
    import IconTarget from "virtual:icons/tabler/target-arrow";
    import IconEye from "virtual:icons/tabler/eye-dotted";

    import IconUnknown from "virtual:icons/tabler/heart-question";    

    let { icon, ...rest }: { icon: string, [key: string]: string } = $props();
</script>

<div {...rest}>
    {#if icon == "droplet"}
        <IconRainDrop />
    {:else if icon == "northstar"}
        <IconNorthStar />
    {:else if icon == "moon"}
        <IconMoon />
    {:else if icon == "target"}
        <IconTarget />
    {:else if icon == "eye"}
        <IconEye />
    {:else}
        <IconUnknown />
    {/if}
</div>