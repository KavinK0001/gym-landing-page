import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  Flame,
  Activity,
  HeartPulse,
  Clock,
  Gauge,
  ArrowRight,
} from "lucide-react";

type Program = {
  title: string;
  description: string;
  intensity: string;
  duration: string;
  icon: React.ElementType;
  image: string;
  alt: string;
};

const programs: Program[] = [
  {
    title: "Strength & Hypertrophy",
    description:
      "Progressive overload programming for maximum muscle building and raw power.",
    intensity: "High",
    duration: "60 mins",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    alt: "Close-up of barbell rack knurling and weight plates",
  },
  {
    title: "HIIT & Conditioning",
    description:
      "Fast-paced cardiovascular circuits engineered to burn fat and boost stamina.",
    intensity: "Extreme",
    duration: "45 mins",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000&auto=format&fit=crop",
    alt: "High-intensity interval training athlete in motion",
  },
  {
    title: "Functional Athleticism",
    description:
      "Agility, mobility, and core strength movements designed for real-world sport performance.",
    intensity: "Medium-High",
    duration: "50 mins",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    alt: "Hand gripping a kettlebell in gym",
  },
  {
    title: "Active Recovery & Mobility",
    description:
      "Targeted foam rolling, deep stretching, and joint care to prevent injury and speed up repair.",
    intensity: "Low",
    duration: "30 mins",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    alt: "Close-up texture of a foam roller",
  },
];

function intensityStyles(intensity: string) {
  switch (intensity) {
    case "Extreme":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    case "High":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20";
    case "Medium-High":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "Low":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    default:
      return "bg-zinc-800 text-zinc-300 border-zinc-700";
  }
}

export function Programs() {
  return (
    <section
      id="classes"
      className="relative border-b border-zinc-800 bg-zinc-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tighter text-zinc-100 sm:text-4xl lg:text-5xl">
            ENGINEERED FOR <span className="text-lime-400">RESULTS</span>
          </h2>
          <p className="mt-4 text-base leading-6 text-zinc-400 sm:text-lg">
            Targeted training programs tailored for strength, stamina, and
            athletic performance.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/5"
            >
              {/* Image accent - blurred snippet with monochromatic dark filter + lime overlay */}
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  unoptimized
                  className="object-cover opacity-60 grayscale contrast-125 brightness-[0.7] blur-[0.5px] transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* lime-green accent overlay with multiply blend */}
                <div className="absolute inset-0 bg-lime-400/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-zinc-950/30 mix-blend-multiply" />
                {/* gradient fade to card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                {/* Icon integrated over image */}
                <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700/50 bg-zinc-900/80 backdrop-blur text-lime-400 shadow-lg transition-colors group-hover:border-lime-400/30">
                  <program.icon className="h-5 w-5" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-5">
                <h3 className="text-base font-bold tracking-tight text-zinc-100">
                  {program.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                  {program.description}
                </p>

                {/* Badges */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${intensityStyles(
                      program.intensity
                    )}`}
                  >
                    <Gauge className="h-3 w-3" />
                    {program.intensity}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-400">
                    <Clock className="h-3 w-3" />
                    {program.duration}
                  </span>
                </div>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-lime-400 transition-colors hover:text-lime-300"
                >
                  Explore Program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
