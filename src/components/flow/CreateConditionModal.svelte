<el-dialog>
    <dialog id="create-condition" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
        <el-dialog-backdrop class="fixed inset-0 bg-neutral-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

        <div tabindex="-1" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
        <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <form method="POST" action="?/condition">
                <div class="p-4">
                    <h1 class="font-display font-bold text-neutral-200 text-3xl">Create Condition</h1>
                    <div class="grid grid-cols-1 gap-2">
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            ID:
                            <input required name="id" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            Name:
                            <input required name="name" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            Description:
                            <input required name="desc" type="text" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block" />
                        </label>

                        <label class="font-mono text-neutral-400 text-sm mt-6 grid grid-cols-2 items-center">
                            Colour:
                            <select required name="colour" class="border-none py-1 rounded-md text-sm bg-neutral-600 inline-block">
                                <option value="red" class="text-red-500">Red</option>
                                <option value="amber" class="text-amber-500">Amber</option>
                                <option value="yellow" class="text-yellow-500">Yellow</option>
                                <option value="lime" class="text-lime-500">Lime</option>
                                <option value="emerald" class="text-emerald-500">Emerald</option>
                                <option value="cyan" class="text-cyan-500">Cyan</option>
                                <option value="blue" class="text-blue-500">Blue</option>
                                <option value="indigo" class="text-indigo-500">Indigo</option>
                                <option value="fuchsia" class="text-fuchsia-500">Fuchsia</option>
                                <option value="pink" class="text-pink-500">Pink</option>
                                <option value="neutral" class="text-neutral-500">Grey</option>
                            </select>
                        </label>
                        <label class="font-mono text-neutral-400 text-sm grid grid-cols-2 items-center">
                            Icon:
                            <select required name="icon"class="border-none py-4 rounded-md text-sm bg-neutral-600 inline-block">
                                <option value="droplet">Droplet</option>
                                <option value="northstar">North Star</option>
                                <option value="moon">Moon</option>
                                <option value="target">Target</option>
                                <option value="eye">Eye</option>
                            </select>
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