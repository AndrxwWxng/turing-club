import React from "react";
import Image from "next/image";
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
    <div className="bg-indigo-900 bg-opacity-90 py-2 px-4 z-50 shadow-lg w-full flex items-center justify-between">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
          <Avatar className="mr-2 w-16 h-16 rounded-full overflow-hidden">
            <AvatarImage
              src="/images/TuringClubLogoBetterOnlyHead.svg"
              alt="Turing Club Logo"
              width={75}
              height={75}
            />
          </Avatar>
            <span className="text-xl font-bold text-white">Turing Club</span>
          </a>
        </Link>
    <NavigationMenu className="ml-auto pr-6 inter.className">
        {/* <div className="flex justify-end ml-auto"> */}
          <NavigationMenuList className="flex space-x-10">
            <NavigationMenuItem>
              <Link href="/" passHref legacyBehavior>
                <NavigationMenuLink className="text-lg font-medium text-white hover:text-blue-400 transition duration-300">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" passHref legacyBehavior>
              <NavigationMenuLink className="text-lg font-medium text-white hover:text-blue-400 transition duration-300">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/team" passHref legacyBehavior>
              <NavigationMenuLink className="text-lg font-medium text-white hover:text-blue-400 transition duration-300">
                  Team
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/calendar" passHref legacyBehavior>
              <NavigationMenuLink className="text-lg font-medium text-white hover:text-blue-400 transition duration-300">
                  Calendar
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" passHref legacyBehavior>
              <NavigationMenuLink className="text-lg font-medium text-white hover:text-blue-400 transition duration-300">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        {/* </div> */}
    </NavigationMenu>
    </div>
  );
};

export default Navbar;