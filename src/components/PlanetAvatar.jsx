export default function PlanetAvatar() {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px] lg:w-[300px]">
      
      {/* glow morbido dietro */}
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(201,199,255,0.18),transparent_60%)] blur-2xl z-0" />

      {/* pianeta */}
      <div className="planet relative aspect-square w-full border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] z-10">
        <img
          src="/images/ilaria.png"
          alt="Ilaria"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}