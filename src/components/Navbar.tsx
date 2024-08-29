import React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  return (
    <NavigationMenu className="bg-indigo-900 text-white p-4">
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <Link href="/" passHref legacyBehavior>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" passHref legacyBehavior>
            <NavigationMenuLink>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/team" passHref legacyBehavior>
            <NavigationMenuLink>Team</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/calendar" passHref legacyBehavior>
            <NavigationMenuLink>Calendar</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" passHref legacyBehavior>
            <NavigationMenuLink>Contact</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
