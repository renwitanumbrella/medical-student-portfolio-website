import { Download, FileText } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from '@/components/reveal'

export function CV() {
  return (
    <section id="cv" aria-labelledby="cv-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy px-8 py-14 text-navy-foreground md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_100%_0%,oklch(0.6_0.15_252/0.3),transparent_70%)]"
            />
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  <span className="tabular-nums">07</span>
                  <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
                  Curriculum vitae
                </p>
                <h2 id="cv-heading" className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
                  The full picture, on one page.
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-navy-muted text-pretty">
                  Download my CV for a complete overview of my education, research, clinical experience, and
                  achievements.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={profile.cvUrl}
                    download={profile.cvFileName}
                    className="group inline-flex items-center gap-2 rounded-full bg-navy-foreground px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Download className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                    Download CV
                  </a>
                  <a
                    href={profile.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-white/50 hover:bg-white/5"
                  >
                    View in browser
                  </a>
                </div>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <div className="mx-auto max-w-[240px] rotate-2 rounded-xl bg-navy-foreground p-6 text-navy shadow-2xl transition-transform duration-500 hover:rotate-0">
                  <FileText className="size-6 text-accent" aria-hidden="true" />
                  <p className="mt-4 font-serif text-xl leading-tight">{profile.name}</p>
                  <p className="text-xs text-muted-foreground">{profile.role}</p>
                  <div aria-hidden="true" className="mt-5 space-y-2">
                    <span className="block h-1.5 w-full rounded bg-border" />
                    <span className="block h-1.5 w-5/6 rounded bg-border" />
                    <span className="block h-1.5 w-4/6 rounded bg-border" />
                    <span className="mt-4 block h-1.5 w-full rounded bg-border" />
                    <span className="block h-1.5 w-3/4 rounded bg-border" />
                  </div>
                  <p className="mt-5 text-xs text-muted-foreground">Updated {profile.cvLastUpdated}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
