import { ArrowUp } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm md:flex-row md:items-center">
        <p>
          <span className="text-navy-foreground">{profile.name}</span> &middot; {profile.role},{' '}
          {profile.university}
        </p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 transition-colors hover:text-navy-foreground"
        >
          Back to top
          <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
