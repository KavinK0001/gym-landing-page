"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, KeyRound, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inputStyles =
  "w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-lime-400 focus:ring-1 focus:ring-lime-400";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("General Inquiry");
    setMessage("");
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <main className="flex-1">
        <section className="relative border-b border-zinc-800 bg-zinc-950 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-lime-400">
                Get in Touch
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
                WE&apos;RE HERE TO HELP YOU{" "}
                <span className="text-lime-400">TRANSFORM</span>
              </h1>
              <p className="mt-4 text-base leading-6 text-zinc-400 sm:text-lg">
                Have questions about memberships, private coaching, or facility
                access? Reach out to our team.
              </p>
            </div>

            {/* 2-Column Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Left Column: Contact Information & Hours */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                  <h2 className="text-sm font-black uppercase tracking-widest text-zinc-100">
                    Contact Information
                  </h2>
                  <ul className="mt-5 space-y-5">
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-lime-400">
                        <Phone className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                          Phone
                        </span>
                        <a
                          href="tel:+15550192834"
                          className="mt-1 block text-sm font-semibold text-zinc-100 hover:text-lime-400"
                        >
                          +1 (555) 019-2834
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-lime-400">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                          Email
                        </span>
                        <a
                          href="mailto:support@pulseathletics.com"
                          className="mt-1 block text-sm font-semibold text-zinc-100 hover:text-lime-400"
                        >
                          support@pulseathletics.com
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-lime-400">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                          Location
                        </span>
                        <span className="mt-1 block text-sm font-semibold text-zinc-100">
                          104 Athletic Way, Metro City, NY 10001
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                  <h2 className="text-sm font-black uppercase tracking-widest text-zinc-100">
                    Hours & Access
                  </h2>
                  <ul className="mt-5 space-y-5">
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-lime-400">
                        <Clock className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                          Staffed Hours
                        </span>
                        <span className="mt-1 block text-sm font-semibold text-zinc-100">
                          Mon-Fri: 5 AM - 11 PM | Sat-Sun: 7 AM - 9 PM
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-lime-400">
                        <KeyRound className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                          Member Facility Access
                        </span>
                        <span className="mt-1 block text-sm font-semibold text-zinc-100">
                          24/7 Key-Fob Access
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <h2 className="text-sm font-black uppercase tracking-widest text-zinc-100">
                  Send Us a Message
                </h2>

                {submitted && (
                  <div
                    role="status"
                    className="mt-5 flex items-start gap-3 rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-3 text-sm leading-6 text-lime-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />
                    Thank you! Your message has been sent. Our team will
                    contact you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
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
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
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
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={inputStyles}
                    >
                      <option>General Inquiry</option>
                      <option>Membership Query</option>
                      <option>Personal Training</option>
                      <option>Corporate Pass</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your goals..."
                      className={`${inputStyles} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-lime-400 px-6 py-3.5 text-sm font-bold text-zinc-950 transition-colors hover:bg-lime-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
