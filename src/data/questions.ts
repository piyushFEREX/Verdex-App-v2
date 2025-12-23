import type { TraitKey } from './traits';

export interface Question {
  id: number;
  text: string;
  trait: TraitKey;
}

export interface AnswerOption {
  value: number;
  label: string;
  color?: string;
}

export const questions: Question[] = [
  // ================= Stress Tolerance =================
  {
    id: 0,
    text: "I am able to stay calm and think clearly when facing tight deadlines.",
    trait: "stressTolerance"
  },
  {
    id: 1,
    text: "Pressure situations usually bring out my best performance.",
    trait: "stressTolerance"
  },
  {
    id: 2,
    text: "When many things demand my attention at once, I can still prioritize effectively.",
    trait: "stressTolerance"
  },

  // ================= Logical Thinking =================
  {
    id: 3,
    text: "I enjoy solving problems that require step-by-step reasoning.",
    trait: "logicalThinking"
  },
  {
    id: 4,
    text: "I naturally look for patterns or logical connections in information.",
    trait: "logicalThinking"
  },
  {
    id: 5,
    text: "Before deciding, I prefer to analyze facts rather than rely on instincts.",
    trait: "logicalThinking"
  },

  // ================= Emotional Regulation =================
  {
    id: 6,
    text: "I am able to manage my emotions even when situations become frustrating.",
    trait: "emotionalRegulation"
  },
  {
    id: 7,
    text: "After a setback, I am able to regain motivation quickly.",
    trait: "emotionalRegulation"
  },
  {
    id: 8,
    text: "I can separate my emotions from decisions that require objectivity.",
    trait: "emotionalRegulation"
  },

  // ================= Creativity =================
  {
    id: 9,
    text: "I often think of multiple ways to approach the same problem.",
    trait: "creativity"
  },
  {
    id: 10,
    text: "I enjoy exploring ideas that are different from conventional approaches.",
    trait: "creativity"
  },
  {
    id: 11,
    text: "Imagining new possibilities comes naturally to me.",
    trait: "creativity"
  },

  // ================= Analytical Skills =================
  {
    id: 12,
    text: "I like breaking complex information into smaller, understandable parts.",
    trait: "analyticalSkills"
  },
  {
    id: 13,
    text: "I am comfortable working with data or detailed information to find insights.",
    trait: "analyticalSkills"
  },
  {
    id: 14,
    text: "I pay attention to details while still keeping the bigger picture in mind.",
    trait: "analyticalSkills"
  },

  // ================= Communication =================
  {
    id: 15,
    text: "I can clearly explain my thoughts to others.",
    trait: "communication"
  },
  {
    id: 16,
    text: "I feel comfortable expressing my ideas in group discussions.",
    trait: "communication"
  },
  {
    id: 17,
    text: "I try to understand people's viewpoints before responding.",
    trait: "communication"
  }
];

export const answerOptions: AnswerOption[] = [
  {
    value: 1,
    label: "Strongly Disagree",
    color: "bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-400"
  },
  {
    value: 2,
    label: "Disagree",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100 hover:border-orange-400"
  },
  {
    value: 3,
    label: "Agree",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100 hover:border-blue-400"
  },
  {
    value: 4,
    label: "Strongly Agree",
    color: "bg-green-50 border-green-200 hover:bg-green-100 hover:border-green-400"
  }
];

export const getQuestionById = (id: number): Question | undefined => {
  return questions.find(q => q.id === id);
};

export const getQuestionsByTrait = (trait: TraitKey): Question[] => {
  return questions.filter(q => q.trait === trait);
};
