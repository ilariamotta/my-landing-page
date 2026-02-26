export default function Hero() {
  return (
    <section className="relative min-h-[78vh] bg-[var(--blackWarm)] text-white flex items-center">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-[var(--butter)]" />
          Web Developer • Psicologia • UX/UI
        </div>

        {/* headline */}
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
          Creo siti web che uniscono{" "}
          <span className="text-[var(--lilac)]">design</span>,{" "}
          <span className="text-[var(--mint)]">strategia</span> e{" "}
          <span className="text-[var(--pink)]">psicologia</span>.
        </h1>

        {/* sub */}
        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70">
          Sono una web developer con formazione in psicologia.
          Progetto e sviluppo interfacce funzionali, intuitive e curate, pensate
          per le persone e per trasformare visite in contatti.
        </p>

        {/* cta */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contatti"
            className="rounded-full bg-[var(--pink)] px-6 py-3 font-semibold text-[var(--blackWarm)] hover:opacity-90 transition"
          >
            Contattami
          </a>
          <a
            href="#progetti"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 transition"
          >
            Vedi progetti
          </a>
        </div>
      </div>
      {/* 🌊 Wave divider (più pronunciata) */}
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