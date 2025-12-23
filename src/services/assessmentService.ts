import type { Question, TraitScores, TraitKey } from '../data';
import { questions, getQuestionById, getQuestionsByTrait } from '../data';

/**
 * Mock API service for assessment-related operations
 */

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Answer {
  questionId: number;
  value: number;
}

export interface AssessmentResult {
  userTraits: TraitScores;
  compatibilityScore: number;
  completedAt: Date;
}

/**
 * Fetch all assessment questions
 */
export const fetchQuestions = async (): Promise<Question[]> => {
  await delay(300);
  return questions;
};

/**
 * Fetch a single question by ID
 */
export const fetchQuestionById = async (id: number): Promise<Question | null> => {
  await delay(100);
  const question = getQuestionById(id);
  return question || null;
};

/**
 * Fetch questions by trait
 */
export const fetchQuestionsByTrait = async (trait: TraitKey): Promise<Question[]> => {
  await delay(200);
  return getQuestionsByTrait(trait);
};

/**
 * Calculate user traits based on answers
 * This analyzes responses and computes trait scores
 */
export const calculateUserTraits = async (answers: Answer[]): Promise<TraitScores> => {
  await delay(1000); // Simulate processing time
  
  // Group questions by trait (3 questions per trait)
  const traitGroups: Record<string, number[]> = {
    stressTolerance: [0, 1, 2],
    logicalThinking: [3, 4, 5],
    emotionalRegulation: [6, 7, 8],
    creativity: [9, 10, 11],
    analyticalSkills: [12, 13, 14],
    communication: [15, 16, 17]
  };
  
  const traits: TraitScores = {
    stressTolerance: 0,
    logicalThinking: 0,
    emotionalRegulation: 0,
    creativity: 0,
    analyticalSkills: 0,
    communication: 0
  };
  
  // Calculate each trait score
  Object.entries(traitGroups).forEach(([trait, questionIds]) => {
    const traitAnswers = answers.filter(a => questionIds.includes(a.questionId));
    const sum = traitAnswers.reduce((acc, answer) => acc + answer.value, 0);
    const average = sum / traitAnswers.length;
    
    // Convert to 0-100 scale (answers are 1-4)
    traits[trait as TraitKey] = Math.min(100, Math.round((average / 4) * 100));
  });
  
  return traits;
};

/**
 * Calculate compatibility score between user traits and career requirements
 */
export const calculateCompatibilityScore = (
  userTraits: TraitScores,
  requiredTraits: TraitScores
): number => {
  const traitKeys = Object.keys(userTraits) as TraitKey[];
  let totalScore = 0;
  
  traitKeys.forEach(trait => {
    const difference = Math.abs(userTraits[trait] - requiredTraits[trait]);
    const traitScore = Math.max(0, 100 - difference);
    totalScore += traitScore;
  });
  
  return Math.round(totalScore / traitKeys.length);
};

/**
 * Process complete assessment
 * This simulates backend processing of the assessment
 */
export const processAssessment = async (
  answers: Answer[],
  requiredTraits: TraitScores
): Promise<AssessmentResult> => {
  // Calculate user traits
  const userTraits = await calculateUserTraits(answers);
  
  // Calculate compatibility
  const compatibilityScore = calculateCompatibilityScore(userTraits, requiredTraits);
  
  return {
    userTraits,
    compatibilityScore,
    completedAt: new Date()
  };
};

/**
 * Validate answers
 */
export const validateAnswers = (answers: Answer[]): boolean => {
  // Check if all questions are answered
  if (answers.length !== questions.length) {
    return false;
  }
  
  // Check if all values are valid (1-4)
  return answers.every(answer => 
    answer.value >= 1 && answer.value <= 4
  );
};

/**
 * Get trait insights based on score
 */
export const getTraitInsight = (score: number): string => {
  if (score >= 80) {
    return 'Strong';
  } else if (score >= 60) {
    return 'Good';
  } else if (score >= 40) {
    return 'Developing';
  } else {
    return 'Needs Growth';
  }
};
