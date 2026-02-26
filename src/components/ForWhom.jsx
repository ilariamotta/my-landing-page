export default function ForWhom() {
  const items = [
    {
      title: "Piccole realtà che vogliono crescere online",
      text: "Senza perdere identità e personalità.",
    },
    {
      title: "Professionisti che vogliono raccontarsi con chiarezza",
      text: "Con un sito coerente e curato.",
    },
    {
      title: "Progetti che mettono persone e brand al centro",
      text: "Non solo l’estetica, ma il messaggio.",
    },
  ];

  return (
   <section className="bg-[var(--bgSoft)] -mt-10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: title */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold tracking-wide text-[var(--pink)]">
              COLLABORAZIONI
            </h2>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-[var(--blackWarm)]">
              A chi mi rivolgo
            </h2>
            <p className="mt-4 text-base text-[var(--blackWarm)]/70">
              Vuoi un sito con una buona estetica, ma che sia anche chiara, coerente e funzionale?
            </p>
          </div>

          {/* RIGHT: cards */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="group relative rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* little accent bar */}
                  <div className="absolute left-6 top-6 h-10 w-1 rounded-full bg-[var(--butter)]" />

                  <h3 className="pl-5 text-lg font-semibold text-[var(--blackWarm)]">
                    <span className="text-[var(--lilac)]">{it.title}</span>
                  </h3>

                  <p className="mt-3 pl-5 text-sm leading-relaxed text-[var(--blackWarm)]/70">
                    {it.text}
                  </p>

                  {/* tiny dot accent */}
                  <div className="mt-5 pl-5">
                    <span className="inline-block h-2 w-2 rounded-full bg-[var(--pink)] opacity-70 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>

            {/* optional note */}
            <p className="mt-6 text-sm text-[var(--blackWarm)]/60">
              Se non rientri in queste categorie ma senti che “ci siamo”, scrivimi
              lo stesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}