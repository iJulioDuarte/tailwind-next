import { Cog, LifeBuoy, Search } from 'lucide-react';
import { InputControl, InputPrefix, InputRoot } from '../input';

import { Logo } from './logo';
import { MainNavigation } from './main-navigation';
import { NavItem } from './main-navigation/nav-item';
import { Profile } from './profile';
import { UsedSpaceWidget } from './used-space';

export const Sidebar = () => (
  <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
    <Logo />

    <InputRoot>
      <InputPrefix>
        <Search className="w-5 h-5 text-zinc-500" />
      </InputPrefix>
      <InputControl placeholder="Search" />
    </InputRoot>

    <MainNavigation />

    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200 " />

      <Profile />
    </div>
  </aside>
);
