"use client";

import { useState } from "react";
import { Clock, User, MapPin, Flame, CalendarCheck, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

type Day = (typeof days)[number];

type Session = {
  time: string;
  name: string;
  category: string;
  trainer: string;
  duration: string;
  intensity: "Extreme" | "High" | "Moderate";
  room: string;
};

const timetable: Record<Day, Session[]> = {
  Mon: [
    { time: "06:00 AM", name: "HIIT Conditioning", category: "HIIT", trainer: "Elena Rostova", duration: "45 min", intensity: "Extreme", room: "Main Floor" },
    { time: "09:00 AM", name: "Powerlifting Foundations", category: "Strength", trainer: "Marcus Vance", duration: "60 min", intensity: "High", room: "Zone A" },
    { time: "05:00 PM", name: "Calisthenics Core", category: "Core", trainer: "Sarah Jenkins", duration: "50 min", intensity: "High", room: "Main Floor" },
    { time: "07:00 PM", name: "Mobility & Flow", category: "Mobility", trainer: "David Chen", duration: "45 min", intensity: "Moderate", room: "Zone A" },
  ],
  Tue: [
    { time: "06:00 AM", name: "Powerlifting Foundations", category: "Strength", trainer: "Marcus Vance", duration: "60 min", intensity: "High", room: "Zone A" },
    { time: "09:00 AM", name: "Mobility & Flow", category: "Mobility", trainer: "David Chen", duration: "45 min", intensity: "Moderate", room: "Zone A" },
    { time: "05:00 PM", name: "HIIT Conditioning", category: "HIIT", trainer: "Elena Rostova", duration: "45 min", intensity: "Extreme", room: "Main Floor" },
    { time: "07:00 PM", name: "Calisthenics Core", category: "Core", trainer: "Sarah Jenkins", duration: "50 min", intensity: "High", room: "Main Floor" },
  ],
  Wed: [
    { time: "06:00 AM", name: "Calisthenics Core", category: "Core", trainer: "Sarah Jenkins", duration: "50 min", intensity: "High", room: "Main Floor" },
    { time: "09:00 AM", name: "HIIT Conditioning", category: "HIIT", trainer: "Elena Rostova", duration: "45 min", intensity: "Extreme", room: "Main Floor" },
    { time: "05:00 PM", name: "Mobility & Flow", category: "Mobility", trainer: "David Chen", duration: "45 min", intensity: "Moderate", room: "Zone A" },
    { time: "07:00 PM", name: "Powerlifting Foundations", category: "Strength", trainer: "Marcus Vance", duration: "60 min", intensity: "High", room: "Zone A" },
  ],
  Thu: [
    { time: "06:00 AM", name: "Mobility & Flow", category: "Mobility", trainer: "David Chen", duration: "45 min", intensity: "Moderate", room: "Zone A" },
    { time: "09:00 AM", name: "Calisthenics Core", category: "Core", trainer: "Sarah Jenkins", duration: "50 min", intensity: "High", room: "Main Floor" },
    { time: "05:00 PM", name: "Powerlifting Foundations", category: "Strength", trainer: "Marcus Vance", duration: "60 min", intensity: "High", room: "Zone A" },
    { time: "07:00 PM", name: "HIIT Conditioning", category: "HIIT", trainer: "Elena Rostova", duration: "45 min", intensity: "Extreme", room: "Main Floor" },
  ],
  Fri: [
    { time: "06:00 AM", name: "HIIT Conditioning", category: "HIIT", trainer: "Elena Rostova", duration: "45 min", intensity: "Extreme", room: "Main Floor" },
    { time: "09:00 AM", name: "Powerlifting Foundations", category: "Strength", trainer: "Marcus Vance", duration: "60 min", intensity: "High", room: "Zone A" },
    { time: "05:00 PM", name: "Mobility & Flow", category: "Mobility", trainer: "David Chen", duration: "45 min", intensity: "Moderate", room: "Zone A" },
    { time: "07:00 PM", name: "Calisthenics Core", category: "Core", trainer: "Sarah Jenkins", duration: "50 min", intensity: "High", room: "Main Floor" },
  ],
  Sat: [
    { time: "09:00 AM", name: "HIIT Conditioning", category: "HIIT", trainer: "Elena Rostova", duration: "45 min", intensity: "Extreme", room: "Main Floor" },
    { time: "05:00 PM", name: "Calisthenics Core", category: "Core", trainer: "Sarah Jenkins", duration: "50 min", intensity: "High", room: "Main Floor" },
    { time: "07:00 PM", name: "Mobility & Flow", category: "Mobility", trainer: "David Chen", duration: "45 min", intensity: "Moderate", room: "Zone A" },
  ],
  Sun: [
    { time: "09:00 AM", name: "Mobility & Flow", category: "Mobility", trainer: "David Chen", duration: "45 min", intensity: "Moderate", room: "Zone A" },
    { time: "05:00 PM", name: "Powerlifting Foundations", category: "Strength", trainer: "Marcus Vance", duration: "60 min", intensity: "High", room: "Zone A" },
    { time: "07:00 PM", name: "HIIT Conditioning", category: "HIIT", trainer: "Elena Rostova", duration: "45 min", intensity: "Extreme", room: "Main Floor" },
  ],
};

const categories = ["All", "HIIT", "Strength", "Mobility", "Core"];

function intensityStyles(intensity: Session["intensity"]) {
  switch (intensity) {
    case "Extreme":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    case "High":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20";
    case "Moderate":
      return "bg-sky-500/10 text-sky-400 border-sky-500/20";
  }
}

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<Day>("Mon");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reserved, setReserved] = useState<Set<string>>(new Set());

  const sessions = timetable[selectedDay].filter(
    (s) => selectedCategory === "All" || s.category === selectedCategory
  );

  function toggleReserve(key: string) {
    setReserved((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-1">
        <section className="relative border-b border-zinc-800 bg-zinc-950 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-400">
                Weekly Timetable
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
                CLASS SCHEDULE
              </h1>
              <p className="mt-4 text-base leading-6 text-zinc-400 sm:text-lg">
                Filter by day or category to find your next training session.
              </p>
            </div>

            {/* Day Selector Filter */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  aria-pressed={selectedDay === day}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selectedDay === day
                      ? "bg-lime-400 font-bold text-zinc-950"
                      : "border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-100"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    selectedCategory === category
                      ? "bg-lime-400/15 text-lime-400 border border-lime-400/30"
                      : "border border-zinc-800 bg-zinc-900 text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Timetable List */}
            <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4">
              {sessions.length === 0 && (
                <p className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center text-sm text-zinc-400">
                  No sessions in this category on {selectedDay}. Try another
                  filter.
                </p>
              )}
              {sessions.map((session) => {
                const key = `${selectedDay}-${session.time}-${session.name}`;
                const isReserved = reserved.has(key);
                return (
                  <div
                    key={key}
                    className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
                  >
                    {/* Time slot */}
                    <div className="flex shrink-0 items-center gap-2 text-sm font-black tracking-wide text-zinc-100 sm:w-28 sm:flex-col sm:items-start sm:gap-0">
                      <Clock className="h-4 w-4 text-lime-400 sm:hidden" />
                      <span className="text-base">{session.time}</span>
                      <span className="text-xs font-medium text-zinc-500">
                        {session.duration}
                      </span>
                    </div>

                    {/* Class details */}
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-bold tracking-tight text-zinc-100">
                        {session.name}
                      </h2>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-400">
                        <User className="h-3.5 w-3.5 text-zinc-500" />
                        {session.trainer}
                        <span className="text-zinc-600">•</span>
                        <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                        {session.room}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${intensityStyles(
                            session.intensity
                          )}`}
                        >
                          <Flame className="h-3 w-3" />
                          {session.intensity}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-400">
                          {session.duration}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-400">
                          {session.room}
                        </span>
                      </div>
                    </div>

                    {/* Reserve */}
                    <button
                      type="button"
                      onClick={() => toggleReserve(key)}
                      aria-pressed={isReserved}
                      className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                        isReserved
                          ? "bg-lime-400 text-zinc-950 hover:bg-lime-500"
                          : "border border-zinc-700 bg-zinc-950 text-zinc-100 hover:border-lime-400/50 hover:text-lime-400"
                      }`}
                    >
                      {isReserved ? (
                        <>
                          <Check className="h-4 w-4" /> Reserved
                        </>
                      ) : (
                        <>
                          <CalendarCheck className="h-4 w-4" /> Reserve Spot
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
