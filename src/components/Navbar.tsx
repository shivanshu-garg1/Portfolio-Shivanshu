"use client";
import { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={cn("fixed w-full z-100 px-4", className)}>
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center">
        <Menu setActive={setActive}>
          <Link href="#home">
            <MenuItem setActive={setActive} item="Home" />
          </Link>
          <Link href="#about">
            <MenuItem setActive={setActive} item="About" />
          </Link>
          <Link href="#project">
            <MenuItem setActive={setActive} item="Projects" />
          </Link>
          <Link href="#skills">
            <MenuItem setActive={setActive} item="Skills" />
          </Link>
          <Link href="#contact-me">
            <MenuItem setActive={setActive} item="Contact" />
          </Link>
        </Menu>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden items-center justify-between py-4 z-100 px-4 bg-black border border-gray-700 rounded-xl shadow-md">
        <h1 className="text-white font-semibold text-lg">Shivanshu</h1>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white focus:outline-none"
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden flex flex-col items-center bg-black border border-gray-700 mt-2 py-4 rounded-xl  shadow-lg space-y-4 text-white">
          <Link href="#home" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="#project" onClick={() => setMobileOpen(false)}>
            Projects
          </Link>
          <Link href="#skills" onClick={() => setMobileOpen(false)}>
            Skills
          </Link>
          <Link href="#contact-me" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
