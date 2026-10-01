import { FaExternalLinkAlt } from "react-icons/fa";

const works = [
  {
    title: "MCM Roma Driver",
    type: "Landing page per servizio NCC",
    description:
      "Sito bilingue pensato per raccontare un'attività di trasporto NCC. La landing page ha l'obiettivo di guidare l’utente e facilitare la richiesta di transfer senza stress. E' stata data molta importanza al branding per restituire un'immagine professionale ma rassicurante che profumasse di Roma.",
    image: "/images/works/mcm-roma-driver.webp",
    url: "https://mcmromadriver.it/",
    tags: ["React", "UX/UI", "Form", "SEO", "Branding"],
  },
  {
    title: "Pixel Pop",
    type: "Portfolio / progetto editoriale",
    description:
      "Progetto personale dal taglio creativo, nato per raccontare competenze, identità visiva e approccio grafico e capacità di sviluppo front-end e back-end. Nella preview del sito è possibile visitare anche la demo del gestionale!",
    image: "/images/works/pixel-pop.webp",
    url: "https://pixelpopmagazine.netlify.app/",
    tags: ["Branding", "UI", "Grafica", "React", "Front-end", "Back-end"],
  },
];

export default function Works() {
  return (
    <section
      id="lavori"
      className="relative scroll-mt-24 bg-[var(--bgSoft)] pt-20 text-[var(--blackWarm)]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-bold tracking-wide text-[var(--lilacReadable)]">
            LAVORI SELEZIONATI
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            Due progetti per raccontarmi.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--blackWarm)]/65">
            Alcuni dei lavori che raccontano il mio approccio:
            struttura chiara, identità visiva e attenzione all’esperienza utente.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {works.map((work) => {
            const hasExternalLink = work.url && work.url !== "#";

            const imageContent = (
              <img
                src={work.image}
                alt={`Anteprima progetto ${work.title}`}
                width="1200"
                height="700"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            );

            return (
              <article
                key={work.title}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white/75 p-4 shadow-[0_18px_45px_rgba(33,26,29,0.14)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(33,26,29,0.18)]"
              >
                <div className="overflow-hidden rounded-[1.5rem] bg-[var(--blackWarm)]/5">
                  {hasExternalLink ? (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Apri il sito ${work.title}`}
                      className="block aspect-[16/9]"
                    >
                      {imageContent}
                    </a>
                  ) : (
                    <div className="aspect-[16/9]">{imageContent}</div>
                  )}
                </div>

                <div className="mt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--blackWarm)]">
                        {work.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[var(--blackWarm)]/55">
                        {work.type}
                      </p>
                    </div>

                    {hasExternalLink && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Apri il sito ${work.title}`}
                        className="mt-1 text-[var(--blackWarm)]/45 transition hover:text-[var(--pinkReadable)]"
                      >
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--blackWarm)]/65">
                    {work.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.tags.map((tag, index) => {
                      const tagColors = [
                        "bg-[var(--lilac)]",
                        "bg-[var(--pink)]",
                        "bg-[var(--mint)]",
                        "bg-[var(--butter)]",
                      ];

                      return (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-xs font-bold text-[var(--blackWarm)] ${
                            tagColors[index % tagColors.length]
                          }`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
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

          <a
            href="#contatti"
            className="mt-4 inline-flex rounded-full bg-[var(--pink)] px-6 py-3 font-semibold text-[var(--blackWarm)] transition hover:opacity-90"
          >
            Parliamone!
          </a>
        </div>
      </div>
    </section>
  );
}