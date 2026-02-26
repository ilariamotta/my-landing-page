import Card from "./Card";


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
        <section className="bg-[var(--bgSoft)]  py-20 relative">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start pb-30">
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
                            {items.map((item, index) => (
                                <Card key={index} title={item.title} text={item.text} />
                            ))}
                        </div>

                        {/* optional note */}
                        <p className="mt-4 text-sm text-[var(--blackWarm)]/60 text-center italic">
                            Se non rientri in queste categorie non preoccuparti: se pensi che potremmo essere un buon match, scrivimi lo stesso!
                        </p>
                    </div>
                </div>
            </div>
            {/* Wave invertita */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
                <svg
                    className="block w-full h-[160px]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="var(--blackWarm)"
                        d="M0,224L60,186.7C120,149,240,75,360,58.7C480,43,600,85,720,117.3C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
}