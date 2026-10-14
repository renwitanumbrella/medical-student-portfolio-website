/**
 * All personal content for the portfolio lives in this file.
 * Replace the bracketed placeholders with your own details — every section
 * of the site reads from here, so nothing else needs to change.
 */

export const profile = {
  name: '[Your Full Name]',
  initials: 'YN',
  role: 'Medical Student',
  university: 'Gulf Medical University',
  location: 'Ajman, United Arab Emirates',
  tagline:
    '[A short line about what drives you in medicine — e.g. your commitment to patient care, curiosity in research, or the specialty you are drawn to.]',
  email: 'your.email@example.com',
  cvUrl: '/cv/cv-placeholder.pdf',
  cvFileName: 'Your-Name-CV.pdf',
  cvLastUpdated: '[Month Year]',
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
    '[Write a short introduction about yourself here. Mention where you are from, your current year of study at Gulf Medical University, and what first drew you to medicine.]',
    '[Use a second paragraph to describe your approach to learning and patient care, the kind of doctor you hope to become, and anything that makes your path distinctive.]',
  ],
  interests: [
    '[Medical interest 1]',
    '[Medical interest 2]',
    '[Medical interest 3]',
    '[Medical interest 4]',
  ],
  facts: [
    { label: 'Programme', value: '[Degree, e.g. MBBS]' },
    { label: 'Current year', value: '[Year of study]' },
    { label: 'Based in', value: 'Ajman, UAE' },
    { label: 'Languages', value: '[Languages you speak]' },
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
    kind: 'Award',
    title: '[Award or Honour]',
    issuer: '[Awarding Body]',
    year: '[Year]',
    description: '[One line on what it recognised.]',
  },
  {
    kind: 'Certificate',
    title: '[Certificate Name]',
    issuer: '[Issuing Organisation]',
    year: '[Year]',
    description: '[One line on what it covers.]',
  },
  {
    kind: 'Certificate',
    title: '[Certificate Name]',
    issuer: '[Issuing Organisation]',
    year: '[Year]',
  },
  {
    kind: 'Award',
    title: '[Achievement]',
    issuer: '[Organisation]',
    year: '[Year]',
  },
  {
    kind: 'Certificate',
    title: '[Certificate Name]',
    issuer: '[Issuing Organisation]',
    year: '[Year]',
  },
  {
    kind: 'Award',
    title: '[Achievement]',
    issuer: '[Organisation]',
    year: '[Year]',
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
    items: ['[Language — proficiency]', '[Language — proficiency]'],
  },
]

export const personalInterests = [
  '[Interest or hobby]',
  '[Interest or hobby]',
  '[Interest or hobby]',
  '[Interest or hobby]',
]

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
