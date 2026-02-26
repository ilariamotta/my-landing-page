export default function Card({ title, text, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={`
        mt-2 group relative rounded-xl p-8 transition duration-300
        ${
          isDark
            ? "border border-white/10 bg-white/5 text-white hover:shadow-lg"
            : "border border-black/5 bg-white/70 text-[var(--blackWarm)] shadow-sm hover:shadow-md"
        }
      `}
    >
      {/* dot */}
      <div className="absolute top-6 left-6 h-1.5 w-1.5 rounded-full bg-[var(--pink)]" />

      {/* title */}
      <h3 className="relative bottom-3 pl-5 text-xl font-bold">
        <span className={isDark ? "text-white/70" : "text-[var(--blackWarm)]/70"}>
          {title}
        </span>
      </h3>

      {/* text */}
      <p
        className={`
          pl-5 text-sm font-semibold leading-relaxed
          ${isDark ? "text-[var(--mint)]" : "text-[var(--lilac)]"}
        `}
      >
        {text}
      </p>
    </div>
  );
}