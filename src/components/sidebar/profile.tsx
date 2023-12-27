import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <Image
        src="https://github.com/kleberfreire.png"
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 truncate">
          Kleber Freire
        </span>
        <span className="text-sm text-zinc-500 truncate">
          kleber@kleberfreire.dev
        </span>
      </div>
      <button
        type="button"
        className="group ml-auto p-2 hover:text-violet-600 hover:bg-violet-50 rounded-md"
      >
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-violet-600" />
      </button>
    </div>
  )
}
