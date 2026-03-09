<script lang="ts">
    let { value, fade }: { value: number, fade: boolean } = $props();
</script>

<img src={"d6/" + value + ".svg"} class={"w-16 opacity-" + (fade ? "25" : "75")} alt={`${value}`} />