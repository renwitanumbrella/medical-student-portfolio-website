import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Education } from '@/components/sections/education'
import { Research } from '@/components/sections/research'
import { Experience } from '@/components/sections/experience'
import { Achievements } from '@/components/sections/achievements'
import { Skills } from '@/components/sections/skills'
import { CV } from '@/components/sections/cv'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Research />
        <Experience />
        <Achievements />
        <Skills />
        <CV />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
