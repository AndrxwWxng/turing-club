import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Home, Info, Users, Calendar } from "lucide-react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="bg-black py-2 px-4 z-50 shadow-lg fixed top-4 left-4 right-4 rounded-2xl">
      <div className="flex items-center justify-between max-w-full mx-auto">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <Avatar className="mr-4 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <AvatarImage
                src="/images/TuringClubLogoBetterOnlyHead.svg"
                alt="Turing Club Logo"
                width={40}
                height={40}
              />
            </Avatar>
            <span className="text-xl font-extrabold text-white">Turing Club</span>
          </a>
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList className="flex space-x-6 items-center">
            <NavItem href="/" icon={<Home size={18} />} label="Home" />
            <NavItem href="/about" icon={<Info size={18} />} label="About" />
            <NavItem href="/team" icon={<Users size={18} />} label="Team" />
            <NavItem href="/calendar" icon={<Calendar size={18} />} label="Calendar" />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};


export default Navbar;