import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 via-blue-250 via-blue-200 via-blue-250 to-blue-300 py-2 px-4 z-50 shadow-lg fixed top-4 left-4 right-4 rounded-2xl">
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
        {/* <div className="flex justify-end ml-auto"> */}
        <NavigationMenuList className="flex space-x-6 items-center">
            <NavigationMenuItem>
              <Link href="/" passHref legacyBehavior>
                <NavigationMenuLink className="text-md font-semibold text-white hover:text-blue-200 transition duration-300">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" passHref legacyBehavior>
                <NavigationMenuLink className="text-md font-semibold text-white hover:text-blue-200 transition duration-300">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/team" passHref legacyBehavior>
                <NavigationMenuLink className="text-md font-semibold text-white hover:text-blue-200 transition duration-300">
                  Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/calendar" passHref legacyBehavior>
                <NavigationMenuLink className="text-md font-semibold text-white hover:text-blue-200 transition duration-300">
                  Calendar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link href="/contact" passHref legacyBehavior>
                <NavigationMenuLink className="text-md font-semibold text-white hover:text-blue-200 transition duration-300">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;