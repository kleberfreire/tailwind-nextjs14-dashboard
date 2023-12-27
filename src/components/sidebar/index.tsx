import { Logo } from './logo'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { NavItem } from './navItem'

import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './profile'
import * as Input from '../input'

export function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 to-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UserSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
        {/* <div className="flex items-start gap-3">
          <Image
            src="https://github.com/kleberfreire.png"
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-700">
              Kleber Freire
            </span>
            <span className="text-sm text-zinc-500">
              kleber@kleberfreire.dev
            </span>
          </div>
          <button
            type="button"
            className="ml-auto p-1 hover:text-violet-600 hover:bg-violet-50 rounded-sm"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div> */}
      </div>
    </aside>
  )
}
