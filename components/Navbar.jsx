'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const root = document.documentElement;

      if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        root.classList.add('dark');
        setIsDark(true);
      } else {
        root.classList.remove('dark');
        setIsDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* <div className="text-lg font-bold text-primary">Gerald Citadel</div> */}
        <Link href='/' className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-12 w-auto invert dark:invert-0" />
          <div className="text-lg font-bold text-primary hidden md:block">Gerald Citadel</div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 h-screen bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar (Slides in from the right) */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-white dark:bg-gray-900 shadow-2xl z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header inside Sidebar */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-800">
            <span className="text-xl font-bold text-primary">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </nav>
  );
}