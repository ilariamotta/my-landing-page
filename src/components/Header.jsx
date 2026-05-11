import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Per chi", href: "#for-whom" },
    { label: "Servizi", href: "#servizi" },
    { label: "Metodo", href: "#metodo" },
    { label: "FAQ", href: "#faq" },
    { label: "Contatti", href: "#contatti" },
    { label: "Social", href: "#social" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[var(--blackWarm)]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / nome */}
       <a href="#home" className="inline-flex items-center">
  <img
    src="/images/logo-per-sito.png"
    alt="Ilaria Motta Web Developer"
    className="h-11 w-auto transition hover:opacity-80"
  />
</a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contatti"
          className="hidden rounded-full bg-[var(--pink)] px-5 py-2 text-sm font-semibold text-[var(--blackWarm)] transition hover:opacity-90 lg:inline-flex"
        >
          Scrivimi
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
          aria-label="Apri menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[var(--blackWarm)] px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-white/75 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contatti"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--pink)] px-5 py-2 text-sm font-semibold text-[var(--blackWarm)] transition hover:opacity-90"
            >
              Scrivimi
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}