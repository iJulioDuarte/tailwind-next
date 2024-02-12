/* eslint-disable @next/next/no-img-element */

import { LogOut } from 'lucide-react';

export const Profile = () => {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/iJulioDuarte.png"
        className="w-10 h-10 rounded-full"
        alt="User Profile"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Julio Duarte
        </span>
        <span className="text-xs text-zinc-500 truncate">
          juliocesarvduarte2003@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  );
};
