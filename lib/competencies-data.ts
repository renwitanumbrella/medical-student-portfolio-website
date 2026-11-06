
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

export type ReflectionEntry = {
  heading: string
  content: string
}

export type EvidenceItem = {
  title: string
  description: string
  href: string
  image?: boolean
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
  reflection?: ReflectionEntry[]
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
    reflection: [
      {
        heading: 'Description of the Activity',
        content:
          'On 15 October 2026, I took part in organising World Anatomy Day at Gulf Medical University. My contributions included teaching the abdominal anatomy activity and running the plank competition. I worked alongside the other organisers to help deliver the event.',
      },
      {
        heading: 'Feelings',
        content:
          'Managing participants was a new responsibility for me, and I found it difficult at first. Taking responsibility for activities and interacting with participants challenged me to step outside what I was accustomed to. I also recognised that the success of the event depended on the organisers working together.',
      },
      {
        heading: 'Evaluation',
        content:
          'One positive aspect was that the event came together through a collaborative effort. I was able to contribute by teaching the abdominal anatomy activity and running the plank competition. The main challenge for me was managing people, particularly because it was my first time taking on that responsibility in an event like this.',
      },
      {
        heading: 'Analysis',
        content:
          'This experience showed me that organising an event involves more than preparing an activity. It also requires communication, coordination, and the ability to respond to participants. Working with the other organisers helped the event succeed and showed me how individual contributions can support a shared goal.',
      },
      {
        heading: 'Conclusion',
        content:
          'I learned that I can contribute to a shared event by taking responsibility for specific activities, while also recognising that managing participants is an area in which I can continue to develop. The experience helped me appreciate the importance of teamwork and shared responsibility when taking on an organising role.',
      },
      {
        heading: 'Action Plan',
        content:
          'For future events, I would prepare activity instructions in advance, clarify responsibilities with the other organisers, and think ahead about how participants will move between activities. I would also seek further opportunities to take on organising responsibilities so that I can develop greater confidence in coordinating groups.',
      },
    ],
    evidence: [
      {
        title: 'World Anatomy Day Organiser Certificate',
        description:
          'Gulf Medical University · 15 October 2026',
        href: '/world%20anatomy%20day.png',
        image: true,
      },
    ],
    photosToAdd: true,
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
