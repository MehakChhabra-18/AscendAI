export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main Purple Glow */}
      <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-[-150px] top-40 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[130px]" />

      {/* Purple Bottom Glow */}
      <div className="absolute bottom-[-180px] left-[-100px] h-[450px] w-[450px] rounded-full bg-primary/15 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, #030712 80%)",
        }}
      />
    </div>
  );
}