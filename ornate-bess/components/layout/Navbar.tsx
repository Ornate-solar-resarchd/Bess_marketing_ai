"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/products#applications" },
  { label: "Why UnityESS", href: "/#features" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-11 flex items-center"
        style={{
          backgroundColor: scrolled ? "rgba(242, 243, 246, 0.92)" : "rgba(251, 248, 248, 0.72)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="w-full max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logos/unityess-logo.svg"
              alt="UnityESS"
              width={110}
              height={30}
              className="h-9  w-auto object-contain "
            />
          </Link>

          {/* Desktop Nav Links – center */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.75rem] text-black  transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="text-[0.75rem] text-[#2997ff] hover:text-[#5ac8fa] transition-colors duration-150"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f5f5f7] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-11 left-0 right-0 z-40 border-t border-[#424245]"
            style={{
              backgroundColor: "rgba(0,0,0,0.95)",
              backdropFilter: "saturate(180%) blur(20px)",
              WebkitBackdropFilter: "saturate(180%) blur(20px)",
            }}
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 text-base text-[#f5f5f7] border-b border-[#424245]/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-base text-[#2997ff]"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
