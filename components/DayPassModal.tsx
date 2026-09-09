"use client";

import { useEffect, useState } from "react";
import { X, TicketCheck } from "lucide-react";

type DayPassModalProps = {
  open: boolean;
  onClose: () => void;
};

const timeSlots = [
  "Morning 6AM - 12PM",
  "Afternoon 12PM - 5PM",
  "Evening 5PM - 10PM",
];

const inputStyles =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-lime-400 focus:ring-1 focus:ring-lime-400 [color-scheme:dark]";

function generateReferenceId() {
  return `PULSE-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function DayPassModal({ open, onClose }: DayPassModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(timeSlots[0]);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [passDetails, setPassDetails] = useState({ name: "", date: "", slot: "" });

  const today = new Date().toISOString().split("T")[0];

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open ]);

  if (!open) return null;

  function handleClose() {
    onClose();
    setSubmitted(false);
    setReferenceId("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setReferenceId(generateReferenceId());
    setPassDetails({ name, date, slot });
    setSubmitted(true);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Claim your free day pass"
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-400">
              Complimentary Access
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tighter text-zinc-100">
              CLAIM YOUR FREE DAY PASS
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Experience our elite 24/7 facility, world-class equipment, and
              high-energy community for one full day.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="daypass-name"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                >
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
                <label
                  htmlFor="daypass-email"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                >
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
                <label
                  htmlFor="daypass-date"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                >
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
                <label
                  htmlFor="daypass-slot"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                >
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

              <button
                type="submit"
                className="w-full rounded-xl bg-lime-400 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-lime-500"
              >
                Get My Pass
              </button>
            </form>
          </>
        ) : (
          /* Confirmation View */
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
              <TicketCheck className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-2xl font-black tracking-tighter text-zinc-100">
              YOU&apos;RE IN, {passDetails.name.split(" ")[0]?.toUpperCase() || "ATHLETE"}!
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Show this digital pass at the front desk for instant access.
            </p>

            {/* Pass card */}
            <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-widest text-zinc-100">
                  PULSE <span className="text-lime-400">DAY PASS</span>
                </span>
                <span className="text-xs font-bold text-lime-400">
                  {referenceId}
                </span>
              </div>
              {/* Barcode placeholder */}
              <div
                aria-hidden
                className="mt-4 h-16 w-full rounded bg-zinc-900"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, #f4f4f5 0 2px, transparent 2px 5px, #f4f4f5 5px 6px, transparent 6px 9px, #f4f4f5 9px 12px, transparent 12px 15px)",
                }}
              />
              <div className="mt-4 space-y-1 text-left text-xs text-zinc-400">
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

            <button
              type="button"
              onClick={handleClose}
              className="mt-5 w-full rounded-xl bg-lime-400 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-lime-500"
            >
              Done — See You Soon
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DayPassModal;
