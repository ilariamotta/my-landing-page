import Card from "./Card";

export default function Services() {
  const services = [
    {
      title: "Landing page",
      text: "Una pagina essenziale e strategica per presentarti e portare le persone a contattarti.",
    },
    {
      title: "Sito vetrina",
      text: "Un sito completo e coerente per raccontare chi sei, cosa fai e costruire fiducia.",
    },
    {
      title: "E-commerce",
      text: "Un’esperienza d’acquisto semplice e ordinata, allineata al tuo brand.",
    },
  ];

  return (
    <section className="relative bg-[var(--blackWarm)] text-white pt-20 pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: cards */}
          <div className="lg:col-span-8">
            <div className="grid gap-3 sm:grid-cols-3">
              {services.map((s) => (
                <Card
                  key={s.title}
                  title={s.title}
                  text={s.text}
                  variant="dark"
                />
              ))}
            </div>

            <p className="mt-4 text-sm text-white/60 text-center italic">
              Se ti serve altro (restyling, UX/UI, revisione struttura e contenuti),
              scrivimi lo stesso.
            </p>
          </div>

          {/* RIGHT: title */}
          <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
            <h2 className="text-xl font-semibold tracking-wide text-[var(--pink)]">
              SERVIZI
            </h2>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Cosa posso fare per te
            </h2>
            <p className="mt-4 text-base text-white/70">
              Siti curati, chiari e coerenti: progettati per guidare le persone e
              valorizzare il tuo brand.
            </p>
          </div>
        </div>
      </div>

      {/* Wave verso sezione chiara */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="block w-full h-[140px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--bgSoft)"
            d="M0,96L60,133.3C120,171,240,245,360,261.3C480,277,600,235,720,202.7C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}