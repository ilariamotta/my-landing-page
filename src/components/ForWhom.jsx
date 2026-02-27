import { SparklesIcon, PencilSquareIcon, HeartIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

export default function ForWhom() {
  const items = [
    {
      title: "A piccole realtà",
      text: "Che vogliono farsi notare online!",
      icon: SparklesIcon,
      grad: ["var(--butter)", "var(--pink)"],
    },
    {
      title: "A professionisti",
      text: "Che vogliono raccontare chi sono, cosa fanno e costruire fiducia.",
      icon: PencilSquareIcon,
      grad: ["var(--lilac)", "var(--mint)"],
    },
    {
      title: "Progetti emergenti",
      text: "L'estetica è importante, ma anche il messaggio!",
      icon: HeartIcon,
      grad: ["var(--pink)", "var(--lilac)"],
    },
  ];

  return (
    <section className="relative bg-[var(--bgSoft)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <h2 className="text-xl font-semibold tracking-wide text-[var(--pink)]">
              COLLABORAZIONI
            </h2>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-[var(--blackWarm)]">
              A chi mi rivolgo?
            </h2>
            <p className="mt-4 text-base text-[var(--blackWarm)]/70">
              Vuoi un sito con una buona estetica, ma che sia anche chiaro, coerente e funzionale?
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Card
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                  grad={item.grad}
                />
              ))}
            </div>

            <p className="mb-14 text-sm text-[var(--blackWarm)]/60 text-center italic py-4">
              Se non rientri in queste categorie non preoccuparti: se pensi che potremmo essere un buon match, scrivimi lo stesso!
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
        </div>
      </div>

      {/* Wave invertita */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="block w-full h-[180px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="var(--blackWarm)"
            d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,149.3C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}