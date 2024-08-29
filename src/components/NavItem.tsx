import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface NavItemProps {
    href: string;
    icon: any;
    label: string;
}
const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => (
    <NavigationMenuItem>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink className="group flex items-center text-md font-semibold text-white hover:text-blue-200 transition-all duration-300">
          <span className="mr-2 transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
          <span className="relative overflow-hidden">
            {label}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );

export default NavItem;