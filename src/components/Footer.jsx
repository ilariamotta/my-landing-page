
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bgSoft)] border-t border-black/5">
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
              className="font-medium text-[var(--bgSoft)]/65 underline-offset-4 transition hover:text-[var(--pink)] hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* Right / social */}
          <div className="flex justify-center gap-3 sm:justify-end">
            <a
              href="https://www.linkedin.com/in/ilariamottawebdev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full bg-[var(--bgSoft)] text-white transition hover:opacity-90"
            >
              <FaLinkedinIn className="h-5 w-5 text-[var(--mint)]" />
            </a>

            <a
              href="https://github.com/ilariamotta"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full bg-[var(--bgSoft)] text-white transition hover:opacity-90"
            >
              <FaGithub className="h-5 w-5 text-[var(--lilac)]" />
            </a>

            <a
  href="https://www.instagram.com/lil.webdesign/"
  target="_blank"
  rel="noreferrer"
  aria-label="Instagram"
  className="grid h-10 w-10 place-items-center rounded-full bg-[var(--bgSoft)] text-white transition hover:opacity-90"
>
  <FaInstagram className="h-5 w-5 text-[var(--pink)]" />
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