import { RectangleGroupIcon, BuildingStorefrontIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

export default function Services() {
  const services = [
    {
      title: "Landing page",
      text: "Quella pagina per presentarti e portare le persone a contattarti. Come questa!",
      icon: RectangleGroupIcon,
      grad: ["var(--lilac)", "var(--mint)"],
    },
    {
      title: "Sito vetrina",
      text: "Un sito completo e coerente per raccontare chi sei, cosa fai e costruire fiducia.",
      icon: BuildingStorefrontIcon,
      grad: ["var(--lilac)", "var(--pink)"],
    },
    {
      title: "E-commerce",
      text: "Un’esperienza d’acquisto semplice e ordinata, allineata al tuo brand.",
      icon: ShoppingCartIcon,
      grad: ["var(--pink)", "var(--butter)"],
    },
  ];

  return (
    <section className="relative bg-[var(--blackWarm)] text-white py-20 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: cards */}
          <div className="order-2 lg:order-1 lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Card
                  key={s.title}
                  title={s.title}
                  text={s.text}
                  icon={s.icon}
                  grad={s.grad}
                  variant="dark"
                />
              ))}
            </div>

            <p className="mt-6 text-sm text-[var(--bgSoft)]/60 text-center italic">
              Se ti serve altro come restyling, UX/UI, revisione struttura e contenuti, parliamone insieme!
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

          {/* RIGHT: title */}
          <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9 lg:text-right">
            <h2 className="text-xl font-semibold tracking-wide text-[var(--mint)]">
              SERVIZI
            </h2>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Cosa posso fare per te?
            </h2>
            <p className="mt-4 text-base text-white/70">
              Soluzioni su misura per il tuo brand, progetto o attività.
            </p>
          </div>
        </div>
      </div>

      {/* Wave verso sezione chiara */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="block w-full h-[120px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="var(--bgSoft)"
            d="M0,192L60,181.3C120,171,240,149,360,165.3C480,181,600,235,720,250.7C840,267,960,245,1080,218.7C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}