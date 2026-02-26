export default function ForWhom() {
    const items = [
        {
            title: "Per piccole realtà che vogliono crescere online",
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
                        <div className="grid gap-3 sm:grid-cols-3">
                            {items.map((it) => (
                                <div
                                    key={it.title}
                                    className="mt-2 group relative rounded-xl border border-black/5 bg-white/70 p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                    {/* dots */}
                                    <div className="absolute h-2 w-2 rounded-full bg-[var(--pink)] opacity-70 group-hover:opacity-100" />
                                    {/* title */}
                                    <h3 className="relative bottom-3 pl-5 text-xl font-bold text-[var(--blackWarm)]">
                                        <span className="text-[var(--blackWarm)]/70">{it.title}</span>
                                    </h3>
                                    {/* text */}
                                    <p className="pl-5 text-sm font-semibold leading-relaxed text-[var(--lilac)]">
                                        {it.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* optional note */}
                        <p className="mt-4 text-sm text-[var(--blackWarm)]/60 text-center italic">
                            Se non rientri in queste categorie non preoccuparti: se pensi che potremmo essere un buon match, scrivimi lo stesso!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}