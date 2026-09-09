import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Schedule | PULSE ATHLETICS",
  description:
    "Weekly class schedule — strength, HIIT, functional training, and recovery sessions.",
};

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-1">
        <section className="relative border-b border-zinc-800 bg-zinc-950 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-400">
                Class Timetable
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
                WEEKLY CLASS SCHEDULE
              </h1>
              <p className="mt-4 text-base leading-6 text-zinc-400 sm:text-lg">
                Strength, HIIT, functional training, and recovery — plan your
                week and lock in your sessions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
