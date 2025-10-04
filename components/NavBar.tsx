'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

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
    <div className="bg-card/95 border-b border-border text-foreground py-4 w-full sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-foreground hover:text-primary transition-colors font-semibold">
          Fenky Wah
        </Link>

        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-2">
              <NavigationMenuItem>
                <Link href="/blog" className="text-foreground hover:underline hover:text-primary transition duration-200">
                  blog
                </Link>
              </NavigationMenuItem>
              <span className="text-muted-foreground">/</span>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-foreground hover:underline hover:text-primary transition duration-200"
                >
                  projects
                </button>
              </NavigationMenuItem>
              <span className="text-muted-foreground">/</span>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavClick('contacts')}
                  className="text-foreground hover:underline hover:text-primary transition duration-200"
                >
                  contacts
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}