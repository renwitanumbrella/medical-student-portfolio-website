/**
 * All personal content for the portfolio lives in this file.
 * Replace the bracketed placeholders with your own details — every section
 * of the site reads from here, so nothing else needs to change.
 */

export const profile = {
  name: 'Muhammad Siddiqui',
  initials: 'MS',
  role: 'Year 1 Medical Student',
  university: 'Gulf Medical University',
  location: 'Ajman, United Arab Emirates',
  tagline: 'Exploring medicine, advancing understanding, and making a difference.',
  introduction:
    'Interested in the intersection of medicine, scientific research, and patient care, with particular interests in neurology, anatomy, and evidence-based medicine.',
  email: 'your.email@example.com',
  cvUrl: '/cv/cv-placeholder.pdf',
  cvFileName: 'Your-Name-CV.pdf',
  cvLastUpdated: '[Month Year]',
}

export const siteMetadata = {
  title: `${profile.name} | Medical Student Portfolio`,
  description: `Personal portfolio of ${profile.name}, a Year 1 medical student at Gulf Medical University, Ajman, UAE — education, research, experience, achievements, and CV.`,
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
] as const

export const about = {
  bio: [
    "I'm Muhammad Siddiqui, a first-year medical student at Gulf Medical University with an interest in the science behind disease and how scientific understanding can contribute to patient care.",
    "My motivation for pursuing medicine comes from the opportunity to help people, bring a smile to someone's face, and work through problems that may initially seem difficult to solve. I'm particularly interested in medical research, neurology, anatomy, and evidence-based medicine. As I progress through medical school, I hope to deepen my understanding of these fields and explore how they connect scientific discovery with clinical practice.",
    "Beyond academics, I enjoy going to the gym and painting. I've also been involved in organising charitable events through the SCR department at Al Noor, helping organise festivals and directly support participants. This experience has allowed me to contribute to activities beyond the classroom and be involved in initiatives that bring people together.",
  ],
  interests: ['Medical research', 'Neurology', 'Anatomy', 'Evidence-based medicine'],
  facts: [
    { label: 'Programme', value: 'MD programme' },
    { label: 'Current year', value: 'Year 1' },
    { label: 'Based in', value: 'Ajman, UAE' },
    { label: 'Languages', value: 'English, Urdu, Hindi' },
  ],
}

export type TimelineItem = {
  period: string
  title: string
  institution: string
  location?: string
  description: string
  highlights?: string[]
}

export const education: TimelineItem[] = [
  {
    period: '[Start Year] — Present',
    title: '[Degree, e.g. Doctor of Medicine / MBBS]',
    institution: 'Gulf Medical University',
    location: 'Ajman, UAE',
    description:
      '[Describe your medical programme, current stage of training, and focus areas.]',
    highlights: ['[Relevant module or rotation]', '[Relevant module or rotation]'],
  },
  {
    period: '[Start Year] — [End Year]',
    title: '[Previous qualification, e.g. High School / Pre-Medical]',
    institution: '[Institution Name]',
    location: '[City, Country]',
    description: '[Add a brief description of this stage of your education.]',
  },
]

export type ProjectItem = {
  category: 'Research' | 'Laboratory' | 'Academic'
  title: string
  description: string
  role: string
  period: string
  tags: string[]
  link?: { label: string; href: string }
}

export const projects: ProjectItem[] = [
  {
    category: 'Research',
    title: '[Research Project Title]',
    description:
      '[Summarise the research question, your methods, and what you learned or found.]',
    role: '[Your role]',
    period: '[Year]',
    tags: ['[Topic]', '[Method]'],
  },
  {
    category: 'Laboratory',
    title: '[Laboratory Project Title]',
    description:
      '[Describe the laboratory work, techniques used, and your contribution.]',
    role: '[Your role]',
    period: '[Year]',
    tags: ['[Technique]', '[Field]'],
  },
  {
    category: 'Academic',
    title: '[Academic Work Title]',
    description:
      '[Describe a case presentation, literature review, poster, or other academic work.]',
    role: '[Your role]',
    period: '[Year]',
    tags: ['[Topic]', '[Format]'],
  },
]

export type ExperienceItem = {
  type: 'Clinical' | 'Volunteering'
  title: string
  organisation: string
  period: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    type: 'Clinical',
    title: '[Role, e.g. Clinical Observer]',
    organisation: '[Hospital or Clinic Name]',
    period: '[Month Year] — [Month Year]',
    description:
      '[Describe the healthcare setting, what you observed or did, and what you learned.]',
  },
  {
    type: 'Clinical',
    title: '[Healthcare Experience Role]',
    organisation: '[Organisation Name]',
    period: '[Month Year] — [Month Year]',
    description: '[Add details about this healthcare-related experience.]',
  },
  {
    type: 'Volunteering',
    title: '[Volunteer Role]',
    organisation: '[Organisation or Initiative]',
    period: '[Month Year] — [Month Year]',
    description:
      '[Describe the community service, who it supported, and your contribution.]',
  },
  {
    type: 'Volunteering',
    title: '[Volunteer Role]',
    organisation: '[Organisation or Initiative]',
    period: '[Month Year] — [Month Year]',
    description: '[Add details about this volunteering experience.]',
  },
]

export type AchievementItem = {
  kind: 'Award' | 'Certificate'
  title: string
  issuer: string
  year: string
  description?: string
  credentialUrl?: string
}

export const achievements: AchievementItem[] = [
  {
    kind: 'Certificate',
    title: 'Mid-Semester Exam',
    issuer: 'Gulf Medical University',
    year: '19 October 2026',
    description: 'Certificate of Achievement.',
  },
  {
    kind: 'Certificate',
    title: 'Hayat Program',
    issuer: 'UAE Ministry of Health & Prevention',
    year: '30 September 2026',
    description:
      'In recognition of outstanding efforts and valuable contribution to the success of the Hayat Program.',
  },
  {
    kind: 'Certificate',
    title: 'World Anatomy Day',
    issuer: 'Gulf Medical University',
    year: '15 October 2026',
    description: 'Certificate recognising your role as an organiser.',
  },
]
export const skills = [
  {
    group: 'Clinical',
    items: ['[Clinical skill]', '[Clinical skill]', '[Clinical skill]', '[Clinical skill]'],
  },
  {
    group: 'Research & Academic',
    items: ['[Research skill]', '[Research skill]', '[Academic skill]', '[Academic skill]'],
  },
  {
    group: 'Professional',
    items: ['[Professional skill]', '[Professional skill]', '[Professional skill]'],
  },
  {
    group: 'Languages',
    items: ['English', 'Urdu', 'Hindi'],
  },
]

export const personalInterests = ['Gym', 'Painting', 'Charitable event organisation']

export type SocialLink = {
  label: string
  handle: string
  href: string
  icon: 'mail' | 'linkedin' | 'research' | 'orcid' | 'globe'
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    handle: '[linkedin.com/in/your-profile]',
    href: 'https://www.linkedin.com/',
    icon: 'linkedin',
  },
  {
    label: 'ResearchGate',
    handle: '[researchgate.net/profile/your-name]',
    href: 'https://www.researchgate.net/',
    icon: 'research',
  },
  {
    label: 'ORCID',
    handle: '[0000-0000-0000-0000]',
    href: 'https://orcid.org/',
    icon: 'orcid',
  },
]
