export default function Card({
  title,
  text,
  icon = null,
  variant = "light",
  grad = ["var(--pink)", "var(--lilac)"],
  size = "md",
}) {
  const isDark = variant === "dark";
  const Icon = icon;
  const gradientId = `grad-${title.replace(/\s+/g, "").toLowerCase()}`;

  const pad = size === "sm" ? "p-6" : "p-8";
  const titleSize = size === "sm" ? "text-base" : "text-lg";
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  const iconSize = size === "sm" ? "h-9 w-9" : "h-10 w-10";

  return (
    <article
      className={[
        "relative rounded-[2rem] flex flex-col items-center text-center gap-4",
        pad,
        isDark
          ? "bg-white/5 border border-white/10 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          : "bg-white/70 border border-black/5 text-[var(--blackWarm)] shadow-[0_18px_45px_rgba(33,26,29,0.14)]",
      ].join(" ")}
    >
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

      {Icon && <Icon className={iconSize} style={{ stroke: `url(#${gradientId})` }} />}

      <h3 className={`${titleSize} font-semibold`}>
        <span className={isDark ? "text-white/85" : "text-[var(--blackWarm)]/80"}>
          {title}
        </span>
      </h3>

      <div
        className="h-[3px] w-16 rounded-full"
        style={{ backgroundImage: `linear-gradient(90deg, ${grad[0]}, ${grad[1]})` }}
      />

      <p className={`${textSize} ${isDark ? "text-white/70" : "text-[var(--blackWarm)]/65"}`}>
        {text}
      </p>
    </article>
  );
}