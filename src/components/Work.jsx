export default function Work({ items = [] }) {
  return (
    <section id="work" className="bg-[#0B0B0B] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-[Anton] text-white text-3xl sm:text-4xl">SELECTED WORK</h2>
          <a href="#brief" className="hidden sm:inline-block text-[#FFC857] hover:text-white text-sm">Hire DSM →</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <article key={idx} className="group relative bg-[#111] border border-white/5 rounded-sm overflow-hidden">
              <div className="aspect-[4/5] bg-[#0B0B0B]">
                <img src={item.cover} alt={item.title} className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-sm font-semibold tracking-wide">{item.title}</h3>
                  <p className="text-[#9C9C9C] text-xs">{item.type}</p>
                </div>
                <div className="text-[10px] text-[#9C9C9C] uppercase tracking-widest">{item.tags?.slice(0,2).join(' • ')}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
