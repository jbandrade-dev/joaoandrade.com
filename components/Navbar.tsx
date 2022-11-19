import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { MenuExpanded } from "./MenuExpanded";
import { SocialNetworks } from "./SocialNetworks";


export function Navbar() {
  return (
    <nav className="fixed w-screen px-6 flex justify-between items-center h-20 z-50">
      <div className="pc:hidden">
      <MenuExpanded />
      </div>
      <Menu/>
      <SocialNetworks tailwind="flex gap-2 text-purple-500 items-center mr-3" size={32} />
    </nav>
  );
}
