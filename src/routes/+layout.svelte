<script lang="ts">
	import "../app.css"

	import favicon from '$lib/assets/favicon.svg';
    import * as Tooltip from "$lib/components/ui/tooltip";

	let { children } = $props();
</script>

<svelte:head>
	<title>Elysium Combat Tracker</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Tooltip.Provider>
	{@render children()}
</Tooltip.Provider>