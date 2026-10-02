import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import { Eye, Download } from 'lucide-react'
const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact']

const PORTRAIT_URL =
  '/potrait.png'

export default function HeroSection() {
  return (
    <section

      className="relative h-screen w-full flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[300px] sm:w-[380px] md:w-[400px] lg:w-[450px]"
      >
        <Magnet
  padding={150}
  strength={3}
  activeTransition="transform 0.3s ease-out"
  inactiveTransition="transform 0.6s ease-in-out"
>
  <img
    src={PORTRAIT_URL}
    alt="Muntasir portrait"
    className="w-full h-auto select-none pointer-events-none"
    draggable={false}
    style={{ transform: 'translateX(-200px)' }} // This helps with performance by creating a new stacking context
  />
</Magnet>
      </FadeIn>

      {/* Hero heading */}
      <FadeIn delay={0.15} y={40} className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden w-full">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[13vw] md:text-[13vw] lg:text-[13vw]">
          Hi, I'm Muntasir
        </h1>
      </FadeIn>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn
          delay={0.35}
          y={20}
          as="p"
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' } as React.CSSProperties}
        >
          Extracting meaningful patterns to drive smart, scalable choices.
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-col items-end gap-3">
  <div className="flex items-center gap-2">
    
      <a href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm whitespace-nowrap transition-colors hover:bg-[#D7E2EA]/10"
    >
      <Eye size={16} strokeWidth={2} />
      View CV
    </a>
    
      <a href="/cv.pdf"
      download="Muntasir-CV.pdf"
      aria-label="Download CV"
      className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] p-3 sm:p-3.5 transition-colors hover:bg-[#D7E2EA]/10"
    >
      <Download size={16} strokeWidth={2} />
    </a>
  </div>
  <ContactButton />
</FadeIn>
      </div>
    </section>
  )
}
