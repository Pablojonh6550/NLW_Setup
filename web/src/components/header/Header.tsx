import logo from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";

export function Header() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={logo} alt="Habits" />
        <Dialog.Root>
          <Dialog.Trigger
            type="button"
            className="border border-violet-500 flex items-center font-semibold rounded-lg px-6 py-4 gap-3 hover:border-violet-300">
            <Plus size={20} className="text-violet-500" />
            Novo hábito
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className=" w-screen h-screen bg-black/80 fixed inset-0" />

            <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Dialog.Close className="absolute right-6 top-6 p-1 bg-violet-500 rounded-md text-zinc-800 hover:text-zinc-200">
                <X size={24} arial-label="Fechar" />
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
}
