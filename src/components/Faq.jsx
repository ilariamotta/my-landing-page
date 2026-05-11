import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Faq() {
  const faqs = [
    {
      question: "Quanto costa un sito?",
      answer:
        "Dipende dalla complessità del progetto, dai contenuti disponibili e dalle funzionalità richieste. Dopo una prima call conoscitiva preparo una proposta chiara e personalizzata.",
    },
    {
      question: "Quanto tempo ci vuole?",
      answer:
        "Dipende dal tipo di progetto. Per una landing page o un sito semplice si può ragionare indicativamente su alcune settimane, ma tutto viene definito meglio dopo il primo confronto.",
    },
    {
      question: "Devo avere già testi e immagini?",
      answer:
        "Se hai già materiali pronti, possiamo partire da quelli. Se invece hai solo un’idea generale, posso aiutarti a mettere ordine nei contenuti e capire da dove iniziare.",
    },
    {
      question: "La call conoscitiva è gratuita?",
      answer:
        "Sì, la prima call serve a capire se posso aiutarti e quale direzione ha più senso per il tuo progetto.",
    },
    {
      question: "C’è supporto dopo la consegna?",
      answer:
        "Sì, prevedo un breve periodo di supporto post-lancio per eventuali dettagli finali e per aiutarti a prendere confidenza con il sito.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  function toggleFaq(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section   id="faq" className="bg-[var(--blackWarm)] pt-8 pb-10">
      <div className="mx-auto max-w-4xl px-6">
        {/* titolo */}
        <div className="text-center">
          <p className="text-xl font-semibold tracking-wide text-[var(--lilac)]">
            DOMANDE FREQUENTI
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-white">
            Qualche risposta in più!
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Alcune risposte rapide alle domande più comuni, così puoi arrivare al
            form con le idee più chiare. Se hai altre curiosità, scrivimi pure!
          </p>
        </div>

        {/* accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-[var(--mint)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm sm:text-base leading-relaxed text-white/70">
                      {faq.answer}
                    </div>
                  </div>
                </div>

                {/* lineetta gradient */}
                <div
                  className="h-[2px] w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--pink), var(--lilac), var(--mint))",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* nota finale */}
        <p className="mt-8 text-center text-sm italic text-white/55">
          Se non trovi qui la risposta che cerchi, raccontami pure il tuo progetto
          nel form qui sotto
          <svg
            className="ml-0.5 inline h-2.5 w-2.5 align-baseline text-[var(--pink)] opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21s-6.7-4.35-9.33-8.28C.67 9.55 2.1 6 5.63 6c1.86 0 3.01 1.06 3.69 2.17C10 7.06 11.15 6 13.01 6 16.54 6 18 9.55 15.33 12.72 12.7 16.65 12 21 12 21z" />
          </svg>
        </p>
      </div>
    </section>
  );
}