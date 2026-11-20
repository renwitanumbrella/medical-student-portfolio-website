
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
    reflection: `On 15 October 2026, I helped organise World Anatomy Day at Gulf Medical University. It was my first time taking responsibility for activities at a university event. I contributed to a group teaching session on the abdominal muscles and a plank competition. As a team, we explained the abdominal muscles and introduced the plank as an isometric exercise, in which the core muscles contract to keep the body steady while the position is held. For the competition, I timed each participant, encouraged them to continue and distributed the prizes.

Before the event, I felt excited to take part, but also stressed about managing my responsibilities well. I wanted the teaching to be clear and did not want competitors to feel overlooked. I felt most pressure during the competition, where keeping an accurate time while encouraging each participant made me worry that focusing on one would make me neglect the other. As the activity progressed, I became more comfortable with my role. Seeing competitors respond to encouragement and try to hold their positions made the task rewarding, and the support of the other organisers helped me settle in. By the end, I felt pleased to have contributed to both parts of the event.

The combination of teaching and competition worked well because it connected anatomical learning with a practical activity. Participants were introduced to the muscles involved before taking part in an exercise that used them. However, I had underestimated how much planning was needed around the activity itself, particularly how instructions, timing and prize distribution would fit together.

This experience showed me that I had viewed organising as a list of separate tasks, when in practice they form one continuous process. I came to understand that accurate timekeeping and encouragement were not competing priorities: consistent timing helped maintain trust in the competition, while encouragement helped make it welcoming. Both shaped the participants' experience. I also realised that preparation should cover how an activity will unfold, not just its content. Agreeing on roles and transitions beforehand would allow organisers to respond more confidently instead of working out details as the event progresses.

I learned that I can contribute meaningfully to an event, while recognising that coordinating several responsibilities at once is a skill I still need to develop. The experience made me more aware that even a straightforward activity depends on thoughtful planning and the ability to balance organisation with interaction.

For future events, I will agree on roles with the team beforehand, including who will keep time and who will encourage participants, and prepare a small set of consistent verbal cues so encouragement does not interfere with accurate timing. I will also confirm the timing and prize-distribution process before the activity begins, and prepare a concise explanation for the teaching session. Afterward, I will ask the other organisers for feedback and identify one improvement to apply at the next event.`,
    evidence: [
      {
        title: 'World Anatomy Day Organiser Certificate',
        description: 'Gulf Medical University · 15 October 2026',
        href: '/world%20anatomy%20day.png',
        image: true,
        linkLabel: 'View full certificate',
      },
      {
        title: 'World Anatomy Day',
        description: 'Gulf Medical University · 15 October 2026',
        href: '/worldanatomydayevi.JPG',
        image: true,
        linkLabel: 'World Anatomy Day',
        tag: true,
      },
      {
        title: 'World Anatomy Day',
        description: 'Gulf Medical University · 15 October 2026',
        href: '/worldanatomydayevid.JPG',
        image: true,
        linkLabel: 'World Anatomy Day',
        tag: true,
      },
      {
        title: 'World Anatomy Day',
        description: 'Gulf Medical University · 15 October 2026',
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
