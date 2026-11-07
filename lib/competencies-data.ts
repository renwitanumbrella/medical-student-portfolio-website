
import {
  Stethoscope,
  BookOpen,
  HeartPulse,
  MessageCircle,
  Users,
  ShieldCheck,
  Building2,
  GraduationCap,
  Globe,
  type LucideIcon,
} from 'lucide-react'

export type EvidenceItem = {
  title: string
  description: string
  href: string
  image?: boolean
  linkLabel?: string
  tag?: boolean
}

export type CompetencyRole = {
  number: string
  slug: string
  title: string
  description: string
  domain: string
  focus: string[]
  icon: LucideIcon
  status?: 'completed'
  reflection?: string
  evidence?: EvidenceItem[]
  photosToAdd?: boolean
}

export const competencyRoles: CompetencyRole[] = [
  {
    number: '01',
    slug: 'medical-expert',
    title: 'Medical Expert',
    description:
      'Apply medical knowledge and clinical skills to understand health conditions and contribute to patient care.',
    domain:
      'The Medical Expert role brings together the medical knowledge, clinical reasoning, and practical skills that form the foundation of medical practice. It focuses on developing the ability to understand health conditions and apply relevant knowledge in clinical situations.',
    focus: [
      'Medical knowledge',
      'Clinical reasoning',
      'Clinical skills',
    ],
    icon: Stethoscope,
  },
  {
    number: '02',
    slug: 'evidence-based-practitioner-scholar',
    title: 'Evidence-Based Practitioner and Scholar',
    description:
      'Use scientific evidence, critical thinking, and continuous learning to improve healthcare.',
    domain:
      'This role emphasises applying scientific reasoning and continuous learning to improve patient care. It involves approaching questions critically, engaging with research, and using relevant evidence to inform medical decisions.',
    focus: [
      'Scientific reasoning',
      'Research literacy',
      'Lifelong learning',
    ],
    icon: BookOpen,
  },
  {
    number: '03',
    slug: 'patient-care-provider-health-advocate',
    title: 'Patient Care Provider and Health Advocate',
    description:
      'Recognise the health needs of individuals and communities and support better health outcomes.',
    domain:
      'This role focuses on responding to the health needs of individuals and communities. It includes understanding patient needs, supporting wellbeing, and recognising the wider importance of health advocacy and prevention.',
    focus: [
      'Patient needs',
      'Health promotion',
      'Community advocacy',
    ],
    icon: HeartPulse,
  },
  {
    number: '04',
    slug: 'communicator',
    title: 'Communicator',
    description:
      'Communicate clearly and empathetically with patients, families, and healthcare teams.',
    domain:
      'Effective communication is central to safe and respectful healthcare. This role highlights the ability to exchange information clearly, listen to others, demonstrate empathy, and communicate effectively with patients, families, and colleagues.',
    focus: [
      'Clear communication',
      'Empathy',
      'Team communication',
    ],
    icon: MessageCircle,
  },
  {
    number: '05',
    slug: 'collaborator-innovator-leader',
    title: 'Collaborator, Innovator and Leader',
    description:
      'Work with others, adapt to challenges, and contribute through teamwork and leadership.',
    domain:
      'This role reflects the importance of teamwork, adaptive thinking, and leadership. It involves contributing constructively to shared activities, working effectively with others, and responding to challenges in changing environments.',
    focus: [
      'Teamwork',
      'Adaptive thinking',
      'Leadership',
    ],
    icon: Users,
    status: 'completed',
    reflection: `World Anatomy Day at Gulf Medical University on 15 October 2026 gave me my first opportunity to take on an organising role in an event of this kind. I contributed by teaching the abdominal anatomy activity and running the plank competition, working alongside the other organisers to help deliver the event. At first, I found managing participants more challenging than I had expected. Taking responsibility for activities and interacting with participants required me to think beyond simply knowing what I needed to do. Despite this initial challenge, the experience was rewarding because the activities came together through our collective effort, and I could see how my contribution supported the event. It also made me realise that organising an event involves much more than preparing activities. Communication, coordination and the ability to respond to people as situations develop are equally important. Looking back, I would prepare clearer instructions, agree on responsibilities with the other organisers beforehand, and consider how participants would move between activities. I would also welcome further opportunities to coordinate groups, as this is an area in which I would like to become more confident. Overall, World Anatomy Day helped me recognise the value of shared responsibility and gave me a practical opportunity to contribute to a team.`,
    evidence: [
      {
        title: 'World Anatomy Day Organiser Certificate',
        description: 'Gulf Medical University · 15 October 2026',
        href: '/world%20anatomy%20day.png',
        image: true,
        linkLabel: 'View full certificate',
      },
      {
        title: 'World Anatomy Day – Event Photograph 1',
        description: 'Event evidence · Gulf Medical University',
        href: '/worldanatomydayevi.JPG',
        image: true,
        linkLabel: 'World Anatomy Day',
        tag: true,
      },
      {
        title: 'World Anatomy Day – Event Photograph 2',
        description: 'Event evidence · Gulf Medical University',
        href: '/worldanatomydayevid.JPG',
        image: true,
        linkLabel: 'World Anatomy Day',
        tag: true,
      },
      {
        title: 'World Anatomy Day – Event Photograph 3',
        description: 'Event evidence · Gulf Medical University',
        href: '/worldanatomydayeviden.JPG',
        image: true,
        linkLabel: 'World Anatomy Day',
        tag: true,
      },
    ],
  },
  {
    number: '06',
    slug: 'professional',
    title: 'Professional',
    description:
      'Demonstrate integrity, ethical conduct, accountability, and respect.',
    domain:
      'The Professional role emphasises the values and behaviours expected of members of the medical profession. It includes ethical practice, integrity, accountability, and treating others with respect.',
    focus: [
      'Ethical practice',
      'Integrity',
      'Accountability',
    ],
    icon: ShieldCheck,
  },
  {
    number: '07',
    slug: 'health-system-proponent',
    title: 'Health System Proponent',
    description:
      'Understand healthcare systems and contribute to improving the quality and delivery of care.',
    domain:
      'This role focuses on understanding how healthcare systems function and how their structures influence the delivery of care. It encourages future doctors to recognise opportunities to support better quality, safety, and healthcare outcomes.',
    focus: [
      'Healthcare systems',
      'Quality of care',
      'System improvement',
    ],
    icon: Building2,
  },
  {
    number: '08',
    slug: 'self-and-profession-enhancer',
    title: 'Self and Profession Enhancer',
    description:
      'Commit to reflection, personal development, wellbeing, and lifelong learning.',
    domain:
      'This role recognises that becoming a good doctor involves continuous personal and professional development. It highlights lifelong learning, maintaining wellbeing, reflecting on experience, and contributing positively to the medical profession.',
    focus: [
      'Self-reflection',
      'Personal wellbeing',
      'Professional growth',
    ],
    icon: GraduationCap,
  },
  {
    number: '09',
    slug: 'socially-accountable',
    title: 'Socially Accountable',
    description:
      'Recognise the needs of diverse populations and respond to important health priorities in society.',
    domain:
      'Social accountability highlights the responsibility of medical graduates to serve diverse populations and respond to important societal health needs. It connects medical education with the needs and priorities of the communities doctors serve.',
    focus: [
      'Diverse populations',
      'Community needs',
      'Social responsibility',
    ],
    icon: Globe,
  },
]
