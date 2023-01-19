import logo from "../../assets/logo.svg";
import { Plus } from "phosphor-react";

export function Header() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={logo} alt={logo} />
        <button
          type="button"
          className="border border-violet-500 flex items-center font-semibold rounded-lg px-6 py-4 gap-3 hover:border-violet-300">
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </button>
      </div>
    </>
  );
}