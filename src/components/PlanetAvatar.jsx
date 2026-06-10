export default function PlanetAvatar() {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px] lg:w-[300px]">
      {/* glow morbido dietro */}
      <div className="absolute -inset-8 z-0 rounded-full bg-[radial-gradient(circle,rgba(201,199,255,0.18),transparent_60%)] blur-2xl" />

      {/* pianeta */}
      <div className="planet relative z-10 aspect-square w-full border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
        <img
          src="/images/ilaria-motta-web-dev.webp"
          width="600"
          height="600"
          alt="Ilaria Motta, web designer e developer UX/UI"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}