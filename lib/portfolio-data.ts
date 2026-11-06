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
  email: 'muhammadfurq.s23@gmail.com',
  cvUrl: '/Muhammad_Siddiqui_CV_.pdf',
  cvFileName: 'Muhammad_Siddiqui_CV_.pdf',
  cvLastUpdated: 'November 2026',
}

export const siteMetadata = {
  title: `${profile.name} | Medical Student Portfolio`,
  description: `Personal portfolio of ${profile.name}, a Year 1 medical student at Gulf Medical University, Ajman, UAE — education, research, experience, achievements, and CV.`,
}


export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'competencies', label: 'Competencies' },
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
  "I'm Muhammad Siddiqui, a first-year medical student at Gulf Medical University, interested in understanding the science behind disease and how that knowledge can make a difference in patient care.",

  "What draws me to medicine is the opportunity to help people, make a positive difference in their lives, and take on problems that require curiosity, patience, and critical thinking. I'm particularly interested in medical research, neurology, anatomy, and evidence-based medicine. As I progress through medical school, I hope to explore these areas further and understand how scientific discoveries translate into better clinical practice.",

  "Outside my studies, I spend time at the gym and enjoy painting. I'm also drawn to charitable and community initiatives, especially those that bring people together. Being involved in organising events has given me the opportunity to work with others, take responsibility, and contribute to something beyond my own academic journey.",
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
    period: 'August 2026 — Present',
    title: 'Doctor of Medicine (MD) — Year 1',
    institution: 'Gulf Medical University',
    location: 'Ajman, UAE',
    description:
      'Currently undertaking the first year of the Doctor of Medicine programme, building foundational knowledge in medical sciences and developing an understanding of the scientific principles underlying patient care.',
    highlights: [
      'Anatomy',
      'Physiology',
      'Biochemistry',
    ],
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

export const projects: ProjectItem[] = []

export type ExperienceItem = {
  type: 'Clinical' | 'Volunteering'
  title: string
  organisation: string
  period: string
  description: string
}

export const experience: ExperienceItem[] = []
export type AchievementItem = {
  kind: 'Award' | 'Certificate'
  title: string
  issuer: string
  year: string
  description?: string
  credentialUrl?: string
  imageUrl?: string
}
export const achievements: AchievementItem[] = [
  {
    kind: 'Certificate',
    title: 'Mid-Semester Exam',
    issuer: 'Gulf Medical University',
    year: '19 October 2026',
    description: 'Certificate of Achievement.',
    imageUrl: '/mid-semester%20exam%20achievement.png',
  },
  {
    kind: 'Certificate',
    title: 'Hayat Program',
    issuer: 'UAE Ministry of Health & Prevention',
    year: '30 September 2026',
    description:
      'In recognition of outstanding efforts and valuable contribution to the success of the Hayat Program.',
    imageUrl: '/organ%20donation%20conference.png',
  },
  {
    kind: 'Certificate',
    title: 'World Anatomy Day',
    issuer: 'Gulf Medical University',
    year: '15 October 2026',
    description: 'Certificate recognising your role as an organiser.',
    imageUrl: '/world%20anatomy%20day.png',
  },
]
export const skills = [
  {
    group: 'Clinical & Medical Sciences',
    items: [
      'Urine sample analysis',
      'Interpretation of laboratory findings',
      'Blood grouping (ABO and Rh)',
      'Bleeding time and clotting time assessment',
    ],
  },
  {
    group: 'Research & Academic',
    items: ['Coming Soon'],
  },
  {
    group: 'Professional',
    items: [
      'Teamwork and collaboration',
      'Scientific communication',
      'Presentation skills',
      'Event organisation',
    ],
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
