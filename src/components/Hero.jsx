import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full bg-[#0B0B0B] overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0B0B0B]/40 to-[#0B0B0B] pointer-events-none" />
      <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-[Anton] tracking-tight text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            DUSK SOCIETY MEDIA
          </h1>
          <p className="mt-4 text-[#9C9C9C] max-w-xl">
            Documenting underground culture. Building creators. Amplifying street narratives.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#brief" className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-[#E11D2A] text-white font-medium tracking-wide shadow-[0_0_30px_rgba(225,29,42,0.4)] hover:brightness-110 transition">Submit a Brief</a>
            <a href="#creators" className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-[#1F1F1F] text-white/90 font-medium tracking-wide hover:bg-white/10 transition">Join as Creator</a>
          </div>
        </div>
      </div>
    </section>
  );
}
