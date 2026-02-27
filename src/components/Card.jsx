export default function Card({
  title,
  text,
  icon = null,
  variant = "light",
  grad = ["var(--pink)", "var(--lilac)"],
}) {
  const isDark = variant === "dark";
  const Icon = icon;

  // ID unico per evitare conflitti tra più card
  const gradientId = `grad-${title.replace(/\s+/g, "").toLowerCase()}`;

  return (
    <article
      className={[
        "relative rounded-[2rem] p-10 grid gap-6",
        "grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto]",
        isDark
          ? "bg-white/5 border border-white/10 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          : "bg-white/70 border border-black/5 text-[var(--blackWarm)] shadow-[0_18px_45px_rgba(33,26,29,0.14)]",
      ].join(" ")}
    >
      {/* SVG defs per gradient stroke */}
      {Icon && (
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient
              id={gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={grad[0]} />
              <stop offset="100%" stopColor={grad[1]} />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* Title */}
      <h3 className="relative col-start-1 row-start-1 self-end text-lg font-semibold">
        <span className={isDark ? "text-white/80" : "text-[var(--blackWarm)]/75"}>
          {title}
        </span>
      </h3>

      {/* Icon */}
      <div className="relative col-start-2 row-start-1 self-start">
        {Icon ? (
          <Icon
            className="h-8 w-8"
            style={{
              stroke: `url(#${gradientId})`,
            }}
          />
        ) : (
          <div className="h-8 w-8" />
        )}
      </div>

      {/* Content */}
      <div className="relative col-span-2 row-start-2">
        <p className={isDark ? "text-white/70" : "text-[var(--blackWarm)]/65"}>
          {text}
        </p>
      </div>

      {/* Gradient bar sotto */}
      <div
        className="relative col-span-2 row-start-3 h-[2px] w-full"
        style={{
          backgroundImage: `linear-gradient(90deg, ${grad[0]}, ${grad[1]})`,
        }}
      />
    </article>
  );
}