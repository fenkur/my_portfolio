'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (target: string) => {
    if (pathname === '/') {
      // Already on homepage, just scroll
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Not on homepage, navigate to home and include hash
      router.push('/#' + target);
    }
  };

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
                blog
              </Link>
            </NavigationMenuItem>
            <span className="text-white">/</span>
            <NavigationMenuItem>
              <button
                onClick={() => handleNavClick('projects')}
                className="hover:underline hover:text-gray-300 transition duration-200"
              >
                projects
              </button>
            </NavigationMenuItem>
            <span className="text-white">/</span>
            <NavigationMenuItem>
              <button
                onClick={() => handleNavClick('contacts')}
                className="hover:underline hover:text-gray-300 transition duration-200"
              >
                contacts
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
