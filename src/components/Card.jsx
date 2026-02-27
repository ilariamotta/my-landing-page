export default function Card({
  title,
  text,
  icon,
  variant = "light",
  accent = "var(--lilac)",
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={[
        "group relative mt-2 rounded-3xl p-8 transition duration-300",
        "backdrop-blur",
        isDark
          ? "border border-white/10 bg-white/5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:bg-white/10"
          : "border border-black/5 bg-white/70 text-[var(--blackWarm)] shadow-[0_12px_35px_rgba(33,26,29,0.12)] hover:shadow-[0_16px_45px_rgba(33,26,29,0.16)]",
      ].join(" ")}
    >
      {/* soft highlight */}
      <div
        className={[
          "pointer-events-none absolute inset-0 rounded-3xl",
          isDark
            ? "bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(201,199,255,0.10),transparent_50%)]"
            : "bg-[radial-gradient(900px_circle_at_20%_10%,rgba(201,199,255,0.22),transparent_55%)]",
        ].join(" ")}
      />

      {/* icon top-right */}
      {icon && (
        <div
          className={[
            "absolute right-6 top-6 grid place-items-center rounded-2xl",
            "h-10 w-10",
            isDark
              ? "bg-white/5 ring-1 ring-white/10 text-white/80"
              : "bg-[var(--bgSoft)] ring-1 ring-black/5 text-[var(--blackWarm)]/60",
          ].join(" ")}
          aria-hidden="true"
        >
          {/* icon should be 18-20px */}
          <div className="h-5 w-5">{icon}</div>
        </div>
      )}

      {/* title */}
      <h3 className="relative pr-14 text-xl font-extrabold tracking-wide">
        <span className={isDark ? "text-white/85" : "text-[var(--blackWarm)]/75"}>
          {title}
        </span>
      </h3>

      {/* text */}
      <p
        className={[
          "relative mt-3 text-sm font-semibold leading-relaxed",
          isDark ? "text-white/70" : "text-[var(--blackWarm)]/65",
        ].join(" ")}
      >
        {text}
      </p>

      {/* bottom accent line (gradient-like) */}
      <div className="relative mt-6">
        <div
          className="h-1.5 w-full rounded-full opacity-90"
          style={{
            background: `linear-gradient(90deg, var(--pink), ${accent}, var(--mint))`,
          }}
        />
      </div>
    </div>
  );
}