import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import { BriefForm, CreatorForm, SubscribeForm } from './components/Forms'
import './index.css'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [work, setWork] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/showcase`).then(r => r.json()).then(setWork).catch(() => {})
  }, [])

  return (
    <div className="bg-[#0B0B0B] text-white selection:bg-[#E11D2A] selection:text-white">
      <Header />
      <main>
        <Hero />

        <Work items={work} />

        <section id="brief" className="bg-[#0B0B0B] py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-[Anton] text-3xl sm:text-4xl">SUBMIT A BRIEF</h2>
              <p className="mt-2 text-[#9C9C9C]">Brands and artists — tell us what you need. We move fast and hit hard.</p>
              <div className="mt-6"><BriefForm /></div>
            </div>
            <div className="bg-[#0E0E0E] border border-white/5 p-6 rounded-sm">
              <h3 className="font-[Anton] text-xl">WHAT WE DO</h3>
              <ul className="mt-3 space-y-2 text-[#9C9C9C] text-sm list-disc pl-5">
                <li>Music videos, performance films, short-form edits</li>
                <li>Campaign content, lookbooks, product films</li>
                <li>Photography: editorial, street, portrait</li>
                <li>Art direction and creative production</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="creators" className="bg-[#0B0B0B] py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-[Anton] text-3xl sm:text-4xl">JOIN THE LABEL</h2>
              <p className="mt-2 text-[#9C9C9C]">Filmmakers, photographers, editors, designers — build with DSM.</p>
              <div className="mt-6"><CreatorForm /></div>
            </div>
            <div className="bg-[#0E0E0E] border border-white/5 p-6 rounded-sm">
              <h3 className="font-[Anton] text-xl">WHAT WE LOOK FOR</h3>
              <ul className="mt-3 space-y-2 text-[#9C9C9C] text-sm list-disc pl-5">
                <li>Distinct voice and visual identity</li>
                <li>Reliability and speed</li>
                <li>Comfort in raw, underground environments</li>
                <li>Obsession with craft</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="subscribe" className="bg-[#0B0B0B] py-16 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="font-[Anton] text-3xl sm:text-4xl">STAY IN THE DUSK</h2>
              <p className="mt-2 text-[#9C9C9C]">Culture drops, releases, calls for creators.</p>
            </div>
            <div className="md:justify-self-end"><SubscribeForm /></div>
          </div>
        </section>

        <footer className="bg-[#0B0B0B] border-t border-white/5 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#9C9C9C] text-sm">© {new Date().getFullYear()} Dusk Society Media. All rights reserved.</p>
            <div className="text-xs text-[#9C9C9C]">Built fast. Zero apologies.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
