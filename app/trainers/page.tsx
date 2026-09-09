import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trainers | PULSE ATHLETICS",
  description:
    "Meet your coaches — world-class trainers dedicated to pushing your limits and perfecting your technique.",
};

type Trainer = {
  name: string;
  role: string;
  bio: string;
  spec: string;
  image: string;
  alt: string;
};

const trainers: Trainer[] = [
  {
    name: "Marcus Vance",
    role: "Head Strength & Conditioning Coach",
    bio: "10+ years coaching powerlifting & elite athletic performance.",
    spec: "Powerlifting, Hypertrophy",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    alt: "Marcus Vance — Head Strength & Conditioning Coach",
  },
  {
    name: "Elena Rostova",
    role: "HIIT & Endurance Specialist",
    bio: "Former Olympic track athlete focusing on metabolic conditioning.",
    spec: "Fat Loss, Cardiovascular Power",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    alt: "Elena Rostova — HIIT & Endurance Specialist",
  },
  {
    name: "David Chen",
    role: "Functional Mobility & Rehab",
    bio: "Doctor of Physical Therapy specializing in injury recovery and joint health.",
    spec: "Mobility, Injury Prevention",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    alt: "David Chen — Functional Mobility & Rehab",
  },
  {
    name: "Sarah Jenkins",
    role: "Calisthenics & Core Master",
    bio: "Gymnastics coach specializing in bodyweight strength and core stability.",
    spec: "Bodyweight, Core Strength",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    alt: "Sarah Jenkins — Calisthenics & Core Master",
  },
];

export default function TrainersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-1">
        <section className="relative border-b border-zinc-800 bg-zinc-950 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-400">
                Elite Coaching
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
                MEET YOUR COACHES
              </h1>
              <p className="mt-4 text-base leading-6 text-zinc-400 sm:text-lg">
                World-class trainers dedicated to pushing your limits and
                perfecting your technique.
              </p>
            </div>

            {/* 4-Card Responsive Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trainers.map((trainer) => (
                <div
                  key={trainer.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/5"
                >
                  {/* Trainer image with gradient fade */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={trainer.image}
                      alt={trainer.alt}
                      fill
                      unoptimized
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold tracking-tight text-zinc-100">
                      {trainer.name}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-lime-400">
                      {trainer.role}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                      {trainer.bio}
                    </p>

                    <span className="mt-4 inline-flex w-fit items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-2.5 py-1 text-xs font-semibold text-lime-400">
                      {trainer.spec}
                    </span>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-lime-500"
                    >
                      <CalendarCheck className="h-4 w-4" />
                      Book 1-on-1 Session
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
