import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { EcgMonitor } from '@/components/ecg-monitor'
import { MoleculeField } from '@/components/molecule-field'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-navy text-navy-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_30%,oklch(0.6_0.15_252/0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <MoleculeField className="text-pulse/25" />

      <EcgMonitor className="absolute inset-x-0 top-20 -z-10 h-12 opacity-60 animate-in fade-in duration-1000 fill-mode-both md:top-auto md:bottom-36 md:h-24 md:opacity-80" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 md:pt-40">
        <p className="flex animate-in fade-in slide-in-from-bottom-3 items-center gap-2 text-sm text-navy-muted duration-700">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {profile.role} &middot; {profile.university}
        </p>

        <h1
          id="home-heading"
          className="mt-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 font-serif text-5xl leading-[1.05] text-balance delay-100 duration-700 fill-mode-both sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {profile.name}
          <span className="block italic text-navy-muted">future physician.</span>
        </h1>

        <p className="mt-8 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-pretty text-lg leading-relaxed text-navy-muted delay-200 duration-700 fill-mode-both">
          {profile.tagline}
        </p>

        <div className="mt-10 flex animate-in flex-wrap items-center gap-4 fade-in slide-in-from-bottom-4 delay-300 duration-700 fill-mode-both">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-foreground px-6 py-3 text-sm font-medium text-navy lift hover:bg-accent hover:text-accent-foreground"
          >
            Explore my portfolio
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#cv"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-navy-foreground lift hover:border-white/50 hover:bg-white/5"
          >
            View CV
          </a>
          <a
            href="#contact"
            className="px-2 py-3 text-sm text-navy-muted underline-offset-4 transition-colors hover:text-navy-foreground hover:underline"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-20 flex animate-in flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6 text-sm text-navy-muted fade-in delay-500 duration-1000 fill-mode-both">
          <p className="flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </p>
          <a
            href="#about"
            className="group flex items-center gap-2 transition-colors hover:text-navy-foreground"
          >
            Scroll to discover
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
