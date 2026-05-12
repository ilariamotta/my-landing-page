import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function SocialSection() {
  return (
    <section  id="social" className="bg-[var(--bgSoft)] py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-xl font-semibold tracking-wide text-[var(--lilac)]">
          DOVE TROVARMI
        </p>

        <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-[var(--blackWarm)]">
          Restiamo in contatto
        </h2>

        <p className="mt-4 text-[var(--blackWarm)]/70 max-w-xl mx-auto">
          Puoi trovarmi anche qui!
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ilariamottawebdev/"
            target="_blank"
            rel="noreferrer"
            className="
              group inline-flex items-center gap-3
              rounded-full
              bg-[var(--blackWarm)]
              px-6 py-3
              text-white
              text-sm font-medium
              transition
              hover:opacity-90
            "
          >
            <FaLinkedinIn className="h-5 w-5 text-[var(--mint)] transition group-hover:scale-110" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ilariamotta"
            target="_blank"
            rel="noreferrer"
            className="
              group inline-flex items-center gap-3
              rounded-full
              bg-[var(--blackWarm)]
              px-6 py-3
              text-white
              text-sm font-medium
              transition
              hover:opacity-90
            "
          >
            <FaGithub className="h-5 w-5 text-[var(--lilac)] transition group-hover:scale-110" />
            GitHub
          </a>

          {/* Instagram */}
          <a
  href="https://www.instagram.com/lil.webdesign/"
  target="_blank"
  rel="noreferrer"
  className="
    group inline-flex items-center gap-3
    rounded-full
    bg-[var(--blackWarm)]
    px-6 py-3
    text-white
    text-sm font-medium
    transition
    hover:opacity-90
  "
>
  <FaInstagram className="h-5 w-5 text-[var(--pink)] transition group-hover:scale-110" />
  Instagram
</a>

        </div>
      </div>
    </section>
  );
}