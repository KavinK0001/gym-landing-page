'use client';

import { useEffect, useState } from "react";
import { X, TicketCheck } from "lucide-react";

type DayPassModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const timeSlots = [
  "Morning (6 AM - 12 PM)",
  "Afternoon (12 PM - 5 PM)",
  "Evening (5 PM - 10 PM)",
];

const inputStyles =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-lime-400 focus:ring-1 focus:ring-lime-400 [color-scheme:dark]";

export function DayPassModal({ isOpen, onClose }: DayPassModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(timeSlots[0]);
  const [passId, setPassId] = useState("");
  const [passDetails, setPassDetails] = useState({ name: "", date: "", slot: "" });

  const today = new Date().toISOString().split("T")[0];

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen]);

  if (!isOpen) return null;

  function handleClose() {
    onClose();
    setSubmitted(false);
    setPassId("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPassId(`PULSE-PASS-${Math.floor(1000 + Math.random() * 9000)}`);
    setPassDetails({ name, date, slot });
    setSubmitted(true);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Claim your free day pass"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop dimming — clicking outside the card closes the modal */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-6 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <h2 className="pr-8 text-2xl font-black tracking-tighter text-zinc-100">
              CLAIM YOUR <span className="text-lime-400 font-bold">FREE</span> DAY PASS
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Fill out the details below to experience PULSE.
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

              <div className="grid grid-cols-2 gap-3 my-5">
                <div>
                  <label
                    htmlFor="daypass-date"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                  >
                    Visit Date
                  </label>
                  <input
                    id="daypass-date"
                    type="date"
                    required
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-100 focus:border-lime-400 outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="daypass-slot"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                  >
                    Time Slot
                  </label>
                  <select
                    id="daypass-slot"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-100 focus:border-lime-400 outline-none"
                  >
                    {timeSlots.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-400 text-zinc-950 font-bold py-3 rounded-xl hover:bg-lime-500 transition-colors"
              >
                Get My Pass
              </button>
            </form>
          </>
        ) : (
          /* Digital Pass View */
          <div className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/15 text-lime-400">
              <TicketCheck className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-2xl font-black tracking-tighter text-zinc-100">
              YOUR PASS IS READY
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Show this digital pass at the front desk for instant access.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-widest text-zinc-100">
                  PULSE <span className="text-lime-400">DAY PASS</span>
                </span>
                <span className="text-xs font-bold text-lime-400">{passId}</span>
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
