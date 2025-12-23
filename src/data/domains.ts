export type Domain = 'pcb' | 'pcm' | 'commerce' | 'humanities';

export interface DomainInfo {
  id: Domain;
  name: string;
  fullName: string;
  description: string;
  tagLabel: string;
  tagColor: string;
  icon: string;
}

export const domains: DomainInfo[] = [
  {
    id: 'pcb',
    name: 'PCB',
    fullName: 'Physics, Chemistry, Biology',
    description: 'Healthcare, Medicine, and Life Sciences',
    tagLabel: 'Medical',
    tagColor: 'bg-red-100 text-red-700',
    icon: 'Microscope'
  },
  {
    id: 'pcm',
    name: 'PCM',
    fullName: 'Physics, Chemistry, Mathematics',
    description: 'Engineering, Technology, and Architecture',
    tagLabel: 'Engineering',
    tagColor: 'bg-blue-100 text-blue-700',
    icon: 'Cpu'
  },
  {
    id: 'commerce',
    name: 'Commerce',
    fullName: 'Commerce & Business',
    description: 'Finance, Business, and Entrepreneurship',
    tagLabel: 'Commerce',
    tagColor: 'bg-green-100 text-green-700',
    icon: 'TrendingUp'
  },
  {
    id: 'humanities',
    name: 'Humanities',
    fullName: 'Arts & Humanities',
    description: 'Law, Psychology, Media, and Education',
    tagLabel: 'Humanities',
    tagColor: 'bg-purple-100 text-purple-700',
    icon: 'BookOpen'
  }
];

export const getDomainById = (id: Domain): DomainInfo | undefined => {
  return domains.find(domain => domain.id === id);
};
