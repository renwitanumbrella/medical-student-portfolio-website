
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
    reflection: `On 15 October 2026, I helped organise World Anatomy Day at Gulf Medical University. It was my first time taking responsibility for activities at a university event. I contributed to a group teaching session on the abdominal muscles and a plank competition. Our team explained the abdominal muscles and introduced the plank as an isometric exercise, where the core muscles work to hold the body steady. During the competition, I timed each participant, encouraged them and distributed the prizes.

Before the event, I felt excited but also stressed about managing my responsibilities well. I wanted our teaching to be clear and competitors to feel included. I felt most pressure during the competition: keeping accurate time while encouraging each participant made me worry that focusing on one task would cause me to neglect the other. As the activity progressed, I became more comfortable. Seeing competitors respond to encouragement and push themselves to hold their positions made the task rewarding, while support from the other organisers helped me settle in. By the end, I felt pleased to have contributed to both parts of the event.

Combining peer teaching with a physical competition worked well because it connected anatomical knowledge with practical application. Participants learned which muscles were involved before performing an exercise that engaged them. However, I underestimated the operational planning required. When we moved from recording final times to retrieving and awarding prizes, there was a brief, rushed pause because we had not agreed on a clear handover sequence.

This experience showed me that I had viewed organising as a list of separate tasks, when in practice they form one continuous process. Accurate timekeeping helped maintain fairness and trust in the competition, while encouragement made the environment welcoming. Both shaped the participants' experience. The pause during prize distribution showed me that even brief transitions need clear responsibilities and an agreed sequence. I also realised that preparation must cover how an activity unfolds, not just its educational content. When several responsibilities fall to one person, prepared verbal cues can help balance encouragement with accurate timekeeping.

I learned that I can contribute effectively to a team initiative while recognising that coordinating several responsibilities simultaneously is a skill I still need to develop. The experience also showed me that clear communication, role delegation and remaining composed under pressure will be important throughout my medical training and future clinical practice.

For future events, I will agree on team roles beforehand, separating timekeeping from participant encouragement where possible. If I need to manage both, I will prepare two or three consistent verbal cues and use a clear timing method so encouragement does not interrupt accurate recording. I will also agree on a handover sequence for recording final times and distributing prizes, and rehearse a concise explanation for the teaching session. Afterwards, I will ask the other organisers for feedback and identify one specific improvement to apply at the next event.`,
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
