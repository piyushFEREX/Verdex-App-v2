export type TraitKey = 
  | 'stressTolerance' 
  | 'logicalThinking' 
  | 'emotionalRegulation' 
  | 'creativity' 
  | 'analyticalSkills' 
  | 'communication';

export interface TraitInfo {
  key: TraitKey;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface TraitScores {
  stressTolerance: number;
  logicalThinking: number;
  emotionalRegulation: number;
  creativity: number;
  analyticalSkills: number;
  communication: number;
}

export const traitDefinitions: TraitInfo[] = [
  {
    key: 'stressTolerance',
    name: 'Stress Tolerance',
    description: 'Ability to stay calm and focused under pressure and tight deadlines',
    icon: 'Shield',
    color: 'text-red-600'
  },
  {
    key: 'logicalThinking',
    name: 'Logical Thinking',
    description: 'Capacity for systematic reasoning and pattern recognition',
    icon: 'Brain',
    color: 'text-blue-600'
  },
  {
    key: 'emotionalRegulation',
    name: 'Emotional Regulation',
    description: 'Managing emotions effectively and bouncing back from setbacks',
    icon: 'Heart',
    color: 'text-pink-600'
  },
  {
    key: 'creativity',
    name: 'Creativity',
    description: 'Generating original ideas and thinking outside the box',
    icon: 'Lightbulb',
    color: 'text-yellow-600'
  },
  {
    key: 'analyticalSkills',
    name: 'Analytical Skills',
    description: 'Breaking down complex information and drawing meaningful conclusions',
    icon: 'BarChart3',
    color: 'text-green-600'
  },
  {
    key: 'communication',
    name: 'Communication',
    description: 'Expressing ideas clearly and understanding others\' perspectives',
    icon: 'MessageSquare',
    color: 'text-purple-600'
  }
];

export const getTraitInfo = (key: TraitKey): TraitInfo | undefined => {
  return traitDefinitions.find(trait => trait.key === key);
};

export const createEmptyTraitScores = (): TraitScores => ({
  stressTolerance: 0,
  logicalThinking: 0,
  emotionalRegulation: 0,
  creativity: 0,
  analyticalSkills: 0,
  communication: 0
});
