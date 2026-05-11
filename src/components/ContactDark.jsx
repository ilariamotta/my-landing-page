import { useState } from "react";

export default function ContactDark() {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  // endpoint formspree

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot anti-spam
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
    <section id="contatti" className="relative bg-[var(--blackWarm)] text-white py-20 pb-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">

          {/* LEFT */}
          <div className="lg:col-span-4">
            <p className="text-xl font-semibold tracking-wide text-[var(--butter)]">
              CONTATTI
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
              Ti va di parlarne?
            </h2>

            <p className="mt-4 text-base text-white/70 pr-40">
              Raccontami cosa ti serve e ti risponderò il prima possibile!
            </p>
          </div>

          {/* RIGHT - FORM */}
          <div className="lg:col-span-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">

              <form onSubmit={handleSubmit} className="grid gap-4">

                {/* honeypot */}
                
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid gap-4 sm:grid-cols-2">
{/* nome */}
                  <input
                    name="name"
                    required
                    placeholder="Nome"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--lilac)] outline-none"
                  />
{/* mail */}
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--mint)] outline-none"
                  />

                </div>
{/* servizio */}
                <div className="relative">
                  <select
                    name="service"
                    defaultValue=""
                    required
                    className="
      w-full
      appearance-none
      rounded-2xl
      border border-white/10
      bg-white/5
      px-4 py-3 pr-12
      text-white
      focus:border-[var(--butter)]
      outline-none
      transition
    "
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
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
{/* testo libero */}
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Raccontami il tuo progetto..."
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--pink)] outline-none"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 w-full rounded-full bg-[var(--pink)] px-6 py-3 font-semibold text-[var(--blackWarm)] hover:opacity-90 transition disabled:opacity-60"
                >
                  {status === "sending" ? "Invio..." : "Invia richiesta"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-white/70 text-center">
                    Messaggio inviato! Ti rispondo presto 🙂
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-300 text-center">
                    Qualcosa è andato storto. Riprova.
                  </p>
                )}

              </form>
            </div>
            <p className="mt-6 text-sm text-white/60 italic text-center">
              Anche se non sai da dove iniziare, è normale: risolviamo insieme!
              <svg
                className="inline h-2.5 w-2.5 ml-0.5 text-[var(--pink)] opacity-60 align-baseline"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21s-6.7-4.35-9.33-8.28C.67 9.55 2.1 6 5.63 6c1.86 0 3.01 1.06 3.69 2.17C10 7.06 11.15 6 13.01 6 16.54 6 18 9.55 15.33 12.72 12.7 16.65 12 21 12 21z" />
              </svg>
            </p>
          </div>
        </div>
      </div>

      {/* Wave finale */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="block w-full h-[120px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="var(--bgSoft)"
            d="M0,96L60,128C120,160,240,224,360,224C480,224,600,160,720,138.7C840,117,960,139,1080,128C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}