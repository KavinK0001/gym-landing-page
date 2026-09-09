"use client";

import { useState } from "react";
import { TicketCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const timeSlots = [
  "Morning (6 AM - 12 PM)",
  "Afternoon (12 PM - 5 PM)",
  "Evening (5 PM - 10 PM)",
];

const inputStyles =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-lime-400 focus:ring-1 focus:ring-lime-400 [color-scheme:dark]";

const labelStyles =
  "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400";

export default function DayPassPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(timeSlots[0]);
  const [passId, setPassId] = useState("");
  const [passDetails, setPassDetails] = useState({
    name: "",
    date: "",
    slot: "",
  });

  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPassId(`PULSE-PASS-${Math.floor(1000 + Math.random() * 9000)}`);
    setPassDetails({ name, date, slot });
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-1 bg-zinc-950 px-4 py-16 text-zinc-100">
        <div className="mx-auto max-w-3xl text-center">
          {/* Header Section */}
          <div className="inline-flex items-center rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime-400">
            Complimentary Access
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
            CLAIM YOUR FREE DAY PASS
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-zinc-400 sm:text-lg">
            Experience our elite 24/7 facility, world-class equipment, and
            high-energy community for one full day with zero commitment.
          </p>
        </div>

        {/* Page Form Container */}
        <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="daypass-name" className={labelStyles}>
                  Full Name
                </label>
                <input
                  id="daypass-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Carter"
                  className={inputStyles}
                />
              </div>

              <div>
                <label htmlFor="daypass-email" className={labelStyles}>
                  Email Address
                </label>
                <input
                  id="daypass-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className={inputStyles}
                />
              </div>

              <div>
                <label htmlFor="daypass-phone" className={labelStyles}>
                  Phone Number
                </label>
                <input
                  id="daypass-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className={inputStyles}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="daypass-date" className={labelStyles}>
                    Preferred Visit Date
                  </label>
                  <input
                    id="daypass-date"
                    type="date"
                    required
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor="daypass-slot" className={labelStyles}>
                    Preferred Time Slot
                  </label>
                  <select
                    id="daypass-slot"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className={inputStyles}
                  >
                    {timeSlots.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-lime-400 py-4 text-lg font-bold text-zinc-950 transition-all duration-200 hover:bg-lime-500"
              >
                Get My Day Pass
              </button>
            </form>
          ) : (
            /* Success Confirmation View */
            <div className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
                <TicketCheck className="h-6 w-6" />
              </span>
              <div className="mt-4 inline-flex items-center rounded-full border border-lime-400/40 bg-lime-400/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lime-400">
                Pass Active
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tighter text-zinc-100">
                YOUR PASS IS READY
              </h2>

              {/* Digital pass card */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-zinc-100">
                    PULSE <span className="text-lime-400">DAY PASS</span>
                  </span>
                  <span className="font-mono text-xs font-bold text-lime-400">
                    {passId}
                  </span>
                </div>
                {/* Barcode / QR placeholder box */}
                <div
                  aria-hidden
                  className="mt-4 h-20 w-full rounded-lg bg-zinc-900"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, #f4f4f5 0 2px, transparent 2px 5px, #f4f4f5 5px 6px, transparent 6px 9px, #f4f4f5 9px 12px, transparent 12px 15px)",
                  }}
                />
                <div className="mt-4 space-y-1 text-xs text-zinc-400">
                  <p>
                    <span className="font-semibold uppercase tracking-widest text-zinc-500">
                      Guest:
                    </span>{" "}
                    <span className="text-zinc-100">{passDetails.name}</span>
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-widest text-zinc-500">
                      Visit:
                    </span>{" "}
                    <span className="text-zinc-100">{passDetails.date}</span>
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-widest text-zinc-500">
                      Slot:
                    </span>{" "}
                    <span className="text-zinc-100">{passDetails.slot}</span>
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-zinc-400">
                Show this digital pass at the front desk for instant access.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
