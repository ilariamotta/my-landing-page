import { useState } from "react";

export default function ContactDark() {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam
    if (data.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contatti"
      className="relative scroll-mt-24 bg-[var(--blackWarm)] py-20 pb-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <p className="text-xl font-semibold tracking-wide text-[var(--butter)]">
              CONTATTI
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              Ti va di parlarne?
            </h2>

            <p className="mt-4 max-w-sm text-base text-white/70">
              Raccontami cosa ti serve e ti risponderò il prima possibile!
            </p>
          </div>

          {/* RIGHT - FORM */}
          <div className="lg:col-span-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
              <form onSubmit={handleSubmit} className="grid gap-4">
                {/* Subject mail Formspree */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Nuova richiesta dal sito"
                />

                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                {/* Nome + email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    required
                    placeholder="Il tuo nome"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-[var(--lilac)]"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="La tua email"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-[var(--mint)]"
                  />
                </div>

                {/* Servizio */}
                <div className="relative">
                  <select
                    name="service"
                    defaultValue=""
                    required
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white outline-none transition focus:border-[var(--butter)]"
                  >
                    <option value="" disabled className="text-black">
                      Di cosa hai bisogno?
                    </option>
                    <option value="Non lo so ancora" className="text-black">
                      Non lo so ancora
                    </option>
                    <option value="Landing page" className="text-black">
                      Landing page
                    </option>
                    <option value="Sito vetrina" className="text-black">
                      Sito vetrina
                    </option>
                    <option value="E-commerce" className="text-black">
                      E-commerce
                    </option>
                    <option value="Design UI/UX" className="text-black">
                      Design UI/UX
                    </option>
                  </select>

                  {/* Freccia custom */}
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Messaggio */}
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Raccontami il tuo progetto..."
                  className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-[var(--pink)]"
                />

                {/* Privacy */}
                <label className="flex items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--pink)]"
                  />

                  <span>
                    Ho letto la{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[var(--pink)] underline underline-offset-4 transition hover:opacity-80"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {/* Bottone */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 w-full rounded-full bg-[var(--pink)] px-6 py-3 font-semibold text-[var(--blackWarm)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Invio in corso..."
                    : "Invia richiesta"}
                </button>
              </form>
            </div>

            {/* Nota sotto form */}
            <p className="mt-6 text-center text-sm italic text-white/60">
              Anche se non sai da dove iniziare, è normale: risolviamo insieme!
              <svg
                className="ml-0.5 inline h-2.5 w-2.5 align-baseline text-[var(--pink)] opacity-60"
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

      {/* MODALE SUCCESS / ERROR */}
      {(status === "success" || status === "error") && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--blackWarm)]/75 px-6 backdrop-blur-sm">
          <div
            role={status === "success" ? "status" : "alert"}
            aria-live="polite"
            className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[var(--blackWarm)] p-8 text-center text-white shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
          >
            <div
              className={`mx-auto grid h-12 w-12 place-items-center rounded-full border ${
                status === "success"
                  ? "border-[var(--mint)]/40 bg-[var(--mint)]/10 text-[var(--mint)]"
                  : "border-[var(--pink)]/40 bg-[var(--pink)]/10 text-[var(--pink)]"
              }`}
            >
              <span className="text-2xl font-bold">
                {status === "success" ? "✓" : "!"}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              {status === "success"
                ? "Messaggio inviato!"
                : "Qualcosa è andato storto"}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {status === "success"
                ? "Grazie per avermi scritto. Ti risponderò il prima possibile ✨"
                : "Riprova tra poco oppure controlla di aver compilato correttamente tutti i campi."}
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full bg-[var(--pink)] px-6 py-3 text-sm font-semibold text-[var(--blackWarm)] transition hover:opacity-90"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      {/* Wave finale */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block h-[120px] w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--bgSoft)"
            d="M0,96L60,128C120,160,240,224,360,224C480,224,600,160,720,138.7C840,117,960,139,1080,128C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}