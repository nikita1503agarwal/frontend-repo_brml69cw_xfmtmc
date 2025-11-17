import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-[#0B0B0B]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0B0B0B]/50 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#E11D2A] shadow-[0_0_30px_rgba(225,29,42,0.5)]" />
          <div>
            <div className="font-[Anton] tracking-[0.08em] text-white text-xl leading-none">DUSK SOCIETY MEDIA</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#9C9C9C]">Raw. Rebellious. Unapologetic.</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="text-[#9C9C9C] hover:text-white transition">Work</a>
          <a href="#brief" className="text-[#9C9C9C] hover:text-white transition">Submit Brief</a>
          <a href="#creators" className="text-[#9C9C9C] hover:text-white transition">Join Creators</a>
          <a href="#subscribe" className="text-[#FFC857] hover:text-white transition">Subscribe</a>
        </nav>
        <button className="md:hidden text-white" aria-label="Open Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
