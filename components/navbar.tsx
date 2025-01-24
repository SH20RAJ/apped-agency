"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { useTheme } from "next-themes";
import { useEffect, useCallback } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "App Testing", href: "/services#testing" },
      { name: "Compliance Review", href: "/services#compliance" },
      { name: "Launch Support", href: "/services#launch" },
    ]
  },
  { name: "Get Started", href: "/get-started" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const createParticles = useCallback(() => {
    const particles = 20;
    const colors = theme === 'dark' 
      ? [
          'rgba(255, 255, 255, 0.8)',
          'rgba(165, 180, 252, 0.8)',
          'rgba(129, 140, 248, 0.8)'
        ]
      : [
          'rgba(255, 217, 61, 0.8)',
          'rgba(255, 107, 107, 0.8)',
          'rgba(255, 160, 122, 0.8)'
        ];

    document.querySelectorAll('.theme-particle').forEach(el => el.remove());

    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.className = 'theme-particle';
      
      const size = Math.random() * 15 + 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.bottom = `${Math.random() * 20}vh`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDelay = `${Math.random() * 0.8}s`;

      document.body.appendChild(particle);
    }
  }, [theme]);

  const handleThemeChange = useCallback((e: React.MouseEvent) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', nextTheme);
    document.body.classList.add('theme-changing');
    
    createParticles();
    setTimeout(() => createParticles(), 200);
    setTimeout(() => createParticles(), 400);
    
    setTimeout(() => {
      setTheme(nextTheme);
    }, 100);

    setTimeout(() => {
      document.body.classList.remove('theme-changing');
      document.querySelectorAll('.theme-particle').forEach(el => el.remove());
    }, 2000);
  }, [theme, createParticles, setTheme]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.submenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-primary">
                    {item.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.name}>
                        <Link href={subitem.href} className="w-full">
                          {subitem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredPath(item.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </span>
                  {hoveredPath === item.href && (
                    <motion.span
                      layoutId="hoverIndicator"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="hidden md:flex md:items-center md:space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full"
            onClick={handleThemeChange}
          >
            <motion.div
              initial={false}
              animate={{
                rotate: theme === 'dark' ? 360 : 0,
                scale: theme === 'dark' ? 0 : 1,
                opacity: theme === 'dark' ? 0 : 1
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute"
            >
              <Sun className="h-4 w-4" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                rotate: theme === 'dark' ? 0 : -360,
                scale: theme === 'dark' ? 1 : 0,
                opacity: theme === 'dark' ? 1 : 0
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute"
            >
              <Moon className="h-4 w-4" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button
            variant="ghost"
            asChild
            className="hover:bg-primary/5 transition-colors"
          >
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute left-0 top-16 z-50 w-full bg-background border-b md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-1 px-4 py-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.submenu ? (
                      <>
                        <div className="text-sm font-semibold py-2">{item.name}</div>
                        {item.submenu.map((subitem, subIndex) => (
                          <motion.div
                            key={subitem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                          >
                            <Link
                              href={subitem.href}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navigation.length * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={handleThemeChange}
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-4 w-4 mr-2" />
                    ) : (
                      <Moon className="h-4 w-4 mr-2" />
                    )}
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </Button>
                  
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/signin">Sign In</Link>
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80" asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}