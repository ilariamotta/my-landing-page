export default function Card({
  title,
  text,
  icon = null,
  variant = "light",
  grad = ["var(--pink)", "var(--lilac)"],
}) {
  const isDark = variant === "dark";
  const Icon = icon;
  const gradientId = `grad-${title.replace(/\s+/g, "").toLowerCase()}`;

  return (
    <article
      className={[
        "relative rounded-[2rem] p-8 flex flex-col items-center text-center gap-4",
        isDark
          ? "bg-white/5 border border-white/10 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          : "bg-white/70 border border-black/5 text-[var(--blackWarm)] shadow-[0_18px_45px_rgba(33,26,29,0.14)]",
      ].join(" ")}
    >
      {/* Gradient SVG */}
      {Icon && (
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={grad[0]} />
              <stop offset="100%" stopColor={grad[1]} />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* Icon */}
      {Icon && (
        <Icon
          className="h-10 w-10"
          style={{ stroke: `url(#${gradientId})` }}
        />
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold">
        <span className={isDark ? "text-white/85" : "text-[var(--blackWarm)]/80"}>
          {title}
        </span>
      </h3>

      {/* Gradient bar */}
      <div
        className="h-[3px] w-16 rounded-full"
        style={{
          backgroundImage: `linear-gradient(90deg, ${grad[0]}, ${grad[1]})`,
        }}
      />

      {/* Content */}
      <p className={isDark ? "text-white/70 text-sm" : "text-[var(--blackWarm)]/65 text-sm"}>
        {text}
      </p>
    </article>
  );
}