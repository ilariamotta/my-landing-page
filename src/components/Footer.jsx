import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../data/contactLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-[var(--bgSoft)]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-[var(--blackWarm)]">
              © {year} Ilaria Motta
            </p>

            <p className="mt-1 text-sm text-[var(--blackWarm)]/60">
              Sito personale • Web Developer
            </p>
          </div>

          {/* Center / legal */}
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:justify-start">
            <a
              href="/privacy-policy"
              className="font-medium text-[var(--blackWarm)]/60 underline-offset-4 transition hover:text-[var(--pinkReadable)] hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* Right / social */}
          <div className="flex justify-center gap-5 sm:justify-end">
            <a
              href="https://www.linkedin.com/in/ilariamottawebdev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <FaLinkedinIn className="h-5 w-5 text-[var(--lilacReadable)] drop-shadow-[0_2px_2px_rgba(33,26,29,0.25)]" />
            </a>

            <a
              href="https://www.instagram.com/lil.webdesign/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <FaInstagram className="h-5 w-5 text-[var(--pinkReadable)] drop-shadow-[0_2px_2px_rgba(33,26,29,0.25)]" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Scrivimi su WhatsApp"
              className="transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <FaWhatsapp className="h-5 w-5 text-[var(--mintReadable)] drop-shadow-[0_2px_2px_rgba(33,26,29,0.25)]" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[var(--blackWarm)]/45">
          Sito realizzato con React e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}