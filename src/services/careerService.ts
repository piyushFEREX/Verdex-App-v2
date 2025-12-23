import type { Career, Domain } from '../data';
import { careers, getCareerById, getCareersByDomain, searchCareers } from '../data';

/**
 * Mock API service for career-related operations
 * In a real application, these would make HTTP requests to a backend
 */

// Simulated network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface CareerSearchParams {
  domain?: Domain;
  query?: string;
}

/**
 * Fetch all careers
 */
export const fetchAllCareers = async (): Promise<Career[]> => {
  await delay(300); // Simulate network delay
  return careers;
};

/**
 * Fetch a single career by ID
 */
export const fetchCareerById = async (id: string): Promise<Career | null> => {
  await delay(200);
  const career = getCareerById(id);
  return career || null;
};

/**
 * Fetch careers by domain
 */
export const fetchCareersByDomain = async (domain: Domain): Promise<Career[]> => {
  await delay(300);
  return getCareersByDomain(domain);
};

/**
 * Search careers with optional filters
 */
export const fetchCareersWithSearch = async (params: CareerSearchParams): Promise<Career[]> => {
  await delay(400);
  return searchCareers(params.query || '', params.domain);
};

/**
 * Get career recommendations based on user traits
 * This could be expanded to use more sophisticated matching algorithms
 */
export const fetchCareerRecommendations = async (
  userTraits: Record<string, number>,
  limit: number = 5
): Promise<Career[]> => {
  await delay(500);
  
  // Calculate compatibility scores for all careers
  const careerScores = careers.map(career => {
    let totalScore = 0;
    const traits = Object.keys(career.requiredTraits) as Array<keyof typeof career.requiredTraits>;
    
    traits.forEach(trait => {
      const difference = Math.abs(userTraits[trait] - career.requiredTraits[trait]);
      const traitScore = Math.max(0, 100 - difference);
      totalScore += traitScore;
    });
    
    const averageScore = totalScore / traits.length;
    
    return {
      career,
      score: averageScore
    };
  });
  
  // Sort by score and return top matches
  return careerScores
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.career);
};
