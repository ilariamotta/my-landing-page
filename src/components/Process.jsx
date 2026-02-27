import Card from "./Card";
import {
  PhoneIcon,
  Squares2X2Icon,
  PaintBrushIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function Process() {
  const steps = [
    {
      title: "Call",
      text: "Ci conosciamo e capiamo obiettivi e stile.",
      icon: PhoneIcon,
      grad: ["var(--pink)", "var(--butter)"],
    },
    {
      title: "Struttura",
      text: "Organizziamo contenuti e navigazione (wireframe).",
      icon: Squares2X2Icon,
      grad: ["var(--lilac)", "var(--mint)"],
    },
    {
      title: "Design",
      text: "UI coerente col brand, chiara e curata.",
      icon: PaintBrushIcon,
      grad: ["var(--mint)", "var(--pink)"],
    },
    {
      title: "Sviluppo",
      text: "Adatto sia per desktop che mobile, veloce e ordinato.",
      icon: CodeBracketIcon,
      grad: ["var(--butter)", "var(--lilac)"],
    },
    {
      title: "Consegna",
      text: "Rilascio + mini guida per gestirlo.",
      icon: CheckBadgeIcon,
      grad: ["var(--pink)", "var(--lilac)"],
    },
  ];

  return (
    <section className="bg-[var(--bgSoft)] py-20">
      {/* margine*/}
      <div className="mx-auto max-w-7xl px-6">
        {/* Titolo top */}
        <div className="text-center">
          <p className="text-xl font-semibold tracking-wide text-[var(--lilac)]">
            METODO
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-[var(--blackWarm)]">
            Come lavoriamo insieme
          </h2>

          {/* nota */}
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--blackWarm)]/70">
            Anche se non sai da dove iniziare, non temere: ti guido io!
          </p>
        </div>

        {/* Cards + arrows */}
        <div
          className="
            mt-12
            flex flex-col items-center
            gap-3
            lg:flex-row lg:flex-nowrap lg:justify-center
          "
        >
          {steps.map((s, idx) => (
            <div key={s.title} className="flex flex-col items-center lg:flex-row">
              {/* card */}
              <div className="w-full max-w-sm lg:w-[210px]">
                <Card
                  title={s.title}
                  text={s.text}
                  icon={s.icon}
                  grad={s.grad}
                  size="sm"
                />
              </div>

              {/* Arrow*/}
              {idx < steps.length - 1 && (
                <div className="grid place-items-center my-2 lg:my-0 lg:mx-1.5">
                  {/* mobile ↓ */}
                  <ArrowDownIcon className="h-6 w-6 text-[var(--blackWarm)]/25 lg:hidden" />
                  {/* desktop → */}
                  <ArrowRightIcon className="hidden h-6 w-6 text-[var(--blackWarm)]/25 lg:block" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nota*/}
        <p className="mt-8 text-sm text-[var(--blackWarm)]/60 text-center italic">
          Se hai dubbi o vuoi capire se fa per te, scrivimi pure: ti rispondo volentieri.
          <svg
            className="inline h-2.5 w-2.5 ml-0.5 text-[var(--pink)] opacity-60 align-baseline"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21s-6.7-4.35-9.33-8.28C.67 9.55 2.1 6 5.63 6c1.86 0 3.01 1.06 3.69 2.17C10 7.06 11.15 6 13.01 6 16.54 6 18 9.55 15.33 12.72 12.7 16.65 12 21 12 21z" />
          </svg>
        </p>
      </div>
    </section>
  );
}