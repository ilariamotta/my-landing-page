import PlanetAvatar from "./PlanetAvatar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--blackWarm)] text-white scroll-mt-24 pt-32 pb-28 lg:min-h-[78vh] lg:flex lg:items-center lg:pt-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT: testo */}
          <div className="lg:col-span-7">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-[var(--butter)]" />
              <span>Web Developer • Psicologia • UX/UI</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Creo siti web che uniscono{" "}
              <span className="text-[var(--lilac)]">design</span>,{" "}
              <span className="text-[var(--mint)]">strategia</span> e{" "}
              <span className="text-[var(--pink)]">psicologia</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Sono una web developer con formazione in psicologia.
              Progetto e sviluppo interfacce funzionali, intuitive e curate,
              pensate per le persone e per trasformare visite in contatti.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
              <a
                href="#contatti"
                className="inline-flex rounded-full bg-[var(--pink)] px-6 py-3 font-semibold text-[var(--blackWarm)] transition hover:opacity-90"
              >
                Contattami
              </a>
            </div>
          </div>

          {/* RIGHT: foto */}
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="mx-auto mt-4 max-w-[300px] sm:max-w-[360px] lg:mt-0 lg:max-w-none">
              <PlanetAvatar />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 w-full overflow-hidden leading-none">
        <svg
          className="block h-[120px] w-full sm:h-[150px] lg:h-[190px]"
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