import Card from "./Card";


export default function ForWhom() {
    const items = [
        {
            title: "Per piccole realtà che vogliono crescere online",
            text: "Senza perdere identità e personalità!",
        },
        {
            title: "Professionisti che vogliono raccontarsi con chiarezza",
            text: "Con un sito coerente, che riflette chi sei e cosa fai!",
        },
        {
            title: "Progetti che mettono persone e brand al centro",
            text: "L'estetica è importante, ma anche il messaggio!",
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
                            A chi mi rivolgo?
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
                <svg
                    className="block w-full h-[200px]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="var(--blackWarm)"
                        d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,149.3C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
}