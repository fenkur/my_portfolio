import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-black text-white py-4 w-full">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-white hover:text-gray-300 transition-colors font-medium">
          Fenky Wah
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-2">
            <NavigationMenuItem>
              <Link href="/blog" className="hover:underline hover:text-gray-300 transition duration-200">
                about
              </Link>
            </NavigationMenuItem>
            <span className="text-white">/</span>
            <NavigationMenuItem>
              <Link href="/work" className="hover:underline hover:text-gray-300 transition duration-200">
                projects
              </Link>
            </NavigationMenuItem>
            <span className="text-white">/</span>
            <NavigationMenuItem>
              <Link href="/contact" className="hover:underline hover:text-gray-300 transition duration-200">
                contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}