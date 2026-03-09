<script>
    import { WeaponType } from "../../data/weapon";

</script>
<el-dialog>
    <dialog id="create-weapon" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
        <el-dialog-backdrop class="fixed inset-0 bg-neutral-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

        <div tabindex="-1" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
        <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <form method="POST" action="?/weapon">
                <div class="p-4">
                    <h1 class="font-display font-bold text-neutral-200 text-3xl">Create Weapon</h1>
                    <div class="grid grid-cols-1 gap-2">
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            ID:
                            <input name="id" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            Name:
                            <input name="name" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            Type:
                            <select name="type" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block">
                                {#each Object.entries(WeaponType).filter(it => typeof it[1] !== "number") as type}
                                    <option value={type[0]}>{type[1]}</option>
                                {/each}
                            </select>
                        </label>

                        <label class="font-mono text-neutral-400 text-sm mt-6 grid grid-cols-2 items-center">
                            AP Cost:
                            <input name="ap" type="number" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            DMG:
                            <input name="dmg" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            Requirements:
                            <input name="req" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            Notes:
                            <input name="notes" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                    </div>
                </div>
                <div class="bg-neutral-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center">
                    <button type="submit" command="close" commandfor="create-actor" class="font-display font-bold bg-neutral-700 text-neutral-400 hover:border-neutral-500 border-3 border-neutral-700 px-1 rounded-md">
                        Create
                    </button>
                    <span class="w-full text-left font-mono text-neutral-500 text-xs">
                        Press <kbd class="font-mono text-xs bg-neutral-500 border-neutral-300 border rounded-md p-1 text-neutral-300">Esc</kbd> to cancel
                    </span>
                    <!-- <button type="button" command="close" commandfor="create-actor" class="font-display font-bold bg-neutral-700 text-neutral-400 hover:border-neutral-500 border-3 border-neutral-700 px-1 rounded-md">
                        Create
                    </button> -->
                </div>
            </form>
        </el-dialog-panel>
        </div>
    </dialog>
</el-dialog>