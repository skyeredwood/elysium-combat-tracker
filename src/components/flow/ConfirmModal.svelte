<script lang="ts">
const { id, func }: { id: string, func: () => void } = $props();
</script>

<el-dialog>
    <dialog id={id} aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
        <el-dialog-backdrop class="fixed inset-0 bg-neutral-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

        <div tabindex="-1" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
        <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-neutral-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <div class="p-4 text-neutral-400 font-body">
                Are you sure you want to do this?
            </div>
            <div class="bg-neutral-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center">
                <button onclick={func} type="button" command="close" commandfor={id} class="font-body font-bold bg-neutral-700 text-neutral-400 hover:border-neutral-500 border-3 border-neutral-700 px-1 rounded-md">
                    Confirm
                </button>
                <span class="w-full text-left font-mono text-neutral-500 text-xs">
                    Press <kbd class="font-mono text-xs bg-neutral-500 border-neutral-300 border rounded-md p-1 text-neutral-300">Esc</kbd> to cancel
                </span>
            </div>
        </el-dialog-panel>
        </div>
    </dialog>
</el-dialog>