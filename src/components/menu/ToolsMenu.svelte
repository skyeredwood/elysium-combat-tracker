<script lang="ts">
    import IconTools from "virtual:icons/carbon/tools";

    import * as Popover from "$lib/components/ui/popover/index";
    import { localData } from "$lib/localstorage";
    import ConfirmModal from "../flow/ConfirmModal.svelte";
    import CreateActorModal from "../flow/CreateActorModal.svelte";
    import CreateConditionModal from "../flow/CreateConditionModal.svelte";
    import CreateWeaponModal from "../flow/CreateWeaponModal.svelte";
    import UploadModal from "../flow/UploadModal.svelte";
    import { defaultData } from "../../data/lib";

    let saveData = () => {
        var a = document.createElement("a")
        document.body.append(a);
        a.download = Date.now() + ".elysium-combat.json";
        a.href = URL.createObjectURL(new Blob([JSON.stringify(localData.current)]));
        a.click();
        a.remove();
    }
</script>

<Popover.Root>
    <Popover.Trigger class="group fixed hover:mb-0.5 transition-all right-5 bottom-5 rounded-full bg-amber-500 hover:bg-amber-400 border border-amber-400 hover:border-amber-200 shadow-md p-3">
        <IconTools class="text-amber-200 group-hover:text-amber-700/50 transition-all text-2xl" />
    </Popover.Trigger>
    <Popover.Content class="bg-amber-700 border-amber-500 shadow-md mr-6 mb-2">
        <h1 class="font-display font-bold text-xl text-white">ELYSIUM COMBAT TRACKER</h1>
        <div class="grid grid-cols-1 gap-0.5 text-amber-100 font-body">
            <button type="button" command="show-modal" commandfor="create-actor" class="bg-amber-800 border-l border-amber-500  text-sm text-left px-2 cursor-pointer hover:bg-amber-700 hover:text-white">
                Create actor
            </button>
            <button type="button" command="show-modal" commandfor="create-weapon" class="bg-amber-800 border-l border-amber-500  text-sm text-left px-2 cursor-pointer hover:bg-amber-700 hover:text-white">
                Create weapon
            </button>
            <button type="button" command="show-modal" commandfor="create-condition" class="bg-amber-800 border-l border-amber-500  text-sm text-left px-2 cursor-pointer hover:bg-amber-700 hover:text-white">
                Create condition
            </button>
            <button onclick={saveData} class="bg-amber-800 border-l border-amber-500 text-sm text-left px-2 cursor-pointer hover:bg-amber-700 hover:text-white">
                Save JSON file
            </button>
            <button type="button" command="show-modal" commandfor="upload" class="bg-amber-800 border-l border-amber-500  text-sm text-left px-2 cursor-pointer hover:bg-amber-700 hover:text-white">
                Load JSON file
            </button>
            <button type="button" command="show-modal" commandfor="clear-data" class="bg-amber-800 border-l border-amber-500  text-sm text-left px-2 cursor-pointer hover:bg-amber-700 hover:text-white">
                Clear data
            </button>
        </div>
        <span class="font-mono text-xs/3 text-amber-200">v0.2</span>
        <span class="font-mono text-xs/3 text-amber-200/50">- a SvelteKit app by <a href="https://twitter.com/skylarexe" target="_blank" class="text-amber-100 underline">skye_exe</a></span>
    </Popover.Content>
</Popover.Root>

<CreateActorModal />
<CreateWeaponModal />
<CreateConditionModal />
<UploadModal />
<ConfirmModal id="clear-data" func={() => { 
    localData.current = defaultData;
}} />