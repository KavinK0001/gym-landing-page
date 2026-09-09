"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { DayPassModal } from "@/components/DayPassModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Trainers", href: "/trainers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [passOpen, setPassOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 text-zinc-950">
            <Zap className="h-5 w-5 fill-zinc-950" />
          </span>
          <span className="text-lg font-black tracking-tighter">
            <span className="text-zinc-100">PULSE</span>{" "}
            <span className="text-lime-400">ATHLETICS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPassOpen(true)}
            className="hidden rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold tracking-wide text-black transition-colors hover:bg-lime-500 md:inline-flex"
          >
            Free Day Pass
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-100 transition-colors hover:bg-zinc-800 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setPassOpen(true);
              }}
              className="mt-2 inline-flex justify-center rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black hover:bg-lime-500"
            >
              Free Day Pass
            </button>
          </nav>
        </div>
      )}
      <DayPassModal open={passOpen} onClose={() => setPassOpen(false)} />
    </header>
  );
}

export default Navbar;
