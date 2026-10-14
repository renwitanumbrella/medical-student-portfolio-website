'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, profile } from '@/lib/portfolio-data'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-white/10 bg-navy/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20"
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 text-navy-foreground"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-white/20 font-serif text-sm transition-colors group-hover:border-accent group-hover:text-accent">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-wide sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3 py-2 text-sm transition-colors',
                  active === item.id
                    ? 'text-navy-foreground'
                    : 'text-navy-muted hover:text-navy-foreground',
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300',
                    active === item.id ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-10 items-center justify-center rounded-full text-navy-foreground transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-navy lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between border-b border-white/5 py-3 text-base transition-colors',
                  active === item.id ? 'text-accent' : 'text-navy-foreground hover:text-accent',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
