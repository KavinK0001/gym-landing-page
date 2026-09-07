"use client";

import Link from "next/link";
import { Zap, Mail } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v5h4v-5h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 0 0-10 2.5 2.5 0 0 1 1.8-1.8C7.3 4.5 12 4.5 12 4.5s4.7 0 7.7.7A2.5 2.5 0 0 1 21.5 7c.2 3.3.2 6.7 0 10a2.5 2.5 0 0 1-1.8 1.8c-3 .7-7.7.7-7.7.7s-4.7 0-7.7-.7A2.5 2.5 0 0 1 2.5 17z" />
      <path d="m10 15 5-3-5-3z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 text-zinc-950">
                <Zap className="h-5 w-5 fill-zinc-950" />
              </span>
              <span className="text-lg font-black tracking-tighter">
                <span className="text-zinc-100">PULSE</span>{" "}
                <span className="text-lime-400">ATHLETICS</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-zinc-400">
              High-energy training, elite coaching, and modern facilities built
              for your next personal record. Open 24/7 for members who never
              quit.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
              >
                <FacebookIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Youtube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
              >
                <YoutubeIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
              >
                <TwitterIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#home" className="hover:text-zinc-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#classes" className="hover:text-zinc-100">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="#trainers" className="hover:text-zinc-100">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-zinc-100">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-zinc-100">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-zinc-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Hours of Operation
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-zinc-400">Members</span>
                <span className="font-medium text-zinc-100">24/7 Access</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-zinc-400">Staffed Hours</span>
                <span className="font-medium text-zinc-100">
                  5AM – 11PM Daily
                </span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-zinc-400">Classes</span>
                <span className="font-medium text-zinc-100">6AM – 9PM</span>
              </li>
              <li className="pt-2 text-xs leading-5 text-zinc-500">
                Key-fob entry after hours. Staff on-site for support, tours &amp;
                day passes during staffed hours.
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-100">
              Get weekly workout tips
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              No spam. Just elite training tips, nutrition hacks, and early
              access to classes.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 p-1.5"
            >
              <div className="flex flex-1 items-center gap-2 pl-3">
                <Mail className="h-4 w-4 shrink-0 text-zinc-500" />
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email address"
                  className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-full bg-lime-400 px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-lime-500"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-zinc-500">
              By subscribing you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} PULSE ATHLETICS. All rights reserved.
            Premium 24/7 Fitness & Gym.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="#" className="hover:text-zinc-300">
              Terms
            </Link>
            <Link href="#" className="hover:text-zinc-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
