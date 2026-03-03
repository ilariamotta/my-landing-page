import Card from "./Card";
import {
  PhoneIcon,
  Squares2X2Icon,
  PaintBrushIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function Process() {
  const steps = [
    { title: "Call", text: "Ci conosciamo e capiamo obiettivi e stile", icon: PhoneIcon, grad: ["var(--pink)", "var(--butter)"] },
    { title: "Struttura", text: "Organizziamo i contenuti e la navigazione (wireframe)", icon: Squares2X2Icon, grad: ["var(--lilac)", "var(--mint)"] },
    { title: "Design", text: "UI coerente col brand, chiara e curata", icon: PaintBrushIcon, grad: ["var(--mint)", "var(--pink)"] },
    { title: "Sviluppo", text: "Adatto sia per desktop che mobile, veloce e ordinato", icon: CodeBracketIcon, grad: ["var(--butter)", "var(--lilac)"] },
    { title: "Consegna", text: "Rilascio + mini guida per gestirlo", icon: CheckBadgeIcon, grad: ["var(--pink)", "var(--lilac)"] },
  ];

  return (
    <section className="relative bg-[var(--bgSoft)] py-20 pb-32 z-0">
      {/* contenuto sopra la wave */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xl font-semibold tracking-wide text-[var(--lilac)]">METODO</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-[var(--blackWarm)]">
            Come lavoriamo insieme
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--blackWarm)]/70">
            Anche se non sai da dove iniziare, non temere: ti guido io!
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 lg:flex-row lg:flex-nowrap lg:justify-center">
          {steps.map((s, idx) => (
            <div key={s.title} className="flex flex-col items-center lg:flex-row">
              <div className="w-full max-w-sm lg:w-[210px]">
                <Card title={s.title} text={s.text} icon={s.icon} grad={s.grad} size="sm" />
              </div>

              {idx < steps.length - 1 && (
                <div className="grid place-items-center my-2 lg:my-0 lg:mx-1.5">
                  <ArrowDownIcon className="h-6 w-6 text-[var(--blackWarm)]/25 lg:hidden" />
                  <ArrowRightIcon className="hidden h-6 w-6 text-[var(--blackWarm)]/25 lg:block" />
                </div>
              )}
            </div>
          ))}
        </div>

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
      </div>

      {/* WAVE (sotto il contenuto) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="block w-full h-[140px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="var(--blackWarm)"
            d="M0,192L60,202.7C120,213,240,235,360,213.3C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}