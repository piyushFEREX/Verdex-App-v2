import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { Career, Domain, TraitScores } from '../data';
import type { Answer } from '../services';
import { processAssessment } from '../services';

export type Screen = 
  | 'welcome'
  | 'domain'
  | 'career'
  | 'instructions'
  | 'questions'
  | 'loading'
  | 'result'
  | 'insights'
  | 'next-steps';

interface AssessmentState {
  currentScreen: Screen;
  selectedDomain: Domain | null;
  selectedCareer: Career | null;
  answers: Answer[];
  userTraits: TraitScores | null;
  compatibilityScore: number;
}

interface AssessmentContextValue extends AssessmentState {
  // Navigation actions
  setScreen: (screen: Screen) => void;
  goToWelcome: () => void;
  goToDomainSelection: () => void;
  goToCareerLibrary: () => void;
  goToInstructions: () => void;
  goToQuestions: () => void;
  goToResults: () => void;
  goToInsights: () => void;
  goToNextSteps: () => void;
  
  // Data actions
  selectDomain: (domain: Domain) => void;
  selectCareer: (career: Career) => void;
  submitAnswers: (answers: Answer[]) => Promise<void>;
  resetAssessment: () => void;
  retakeForCareer: () => void;
}

const AssessmentContext = createContext<AssessmentContextValue | undefined>(undefined);

const initialState: AssessmentState = {
  currentScreen: 'welcome',
  selectedDomain: null,
  selectedCareer: null,
  answers: [],
  userTraits: null,
  compatibilityScore: 0
};

interface AssessmentProviderProps {
  children: ReactNode;
}

export function AssessmentProvider({ children }: AssessmentProviderProps) {
  const [state, setState] = useState<AssessmentState>(initialState);

  // Screen navigation
  const setScreen = useCallback((screen: Screen) => {
    setState(prev => ({ ...prev, currentScreen: screen }));
  }, []);

  const goToWelcome = useCallback(() => setScreen('welcome'), [setScreen]);
  const goToDomainSelection = useCallback(() => setScreen('domain'), [setScreen]);
  const goToCareerLibrary = useCallback(() => setScreen('career'), [setScreen]);
  const goToInstructions = useCallback(() => setScreen('instructions'), [setScreen]);
  const goToQuestions = useCallback(() => setScreen('questions'), [setScreen]);
  const goToResults = useCallback(() => setScreen('result'), [setScreen]);
  const goToInsights = useCallback(() => setScreen('insights'), [setScreen]);
  const goToNextSteps = useCallback(() => setScreen('next-steps'), [setScreen]);

  // Data actions
  const selectDomain = useCallback((domain: Domain) => {
    setState(prev => ({ 
      ...prev, 
      selectedDomain: domain,
      currentScreen: 'career'
    }));
  }, []);

  const selectCareer = useCallback((career: Career) => {
    setState(prev => ({ 
      ...prev, 
      selectedCareer: career,
      currentScreen: 'instructions'
    }));
  }, []);

  const submitAnswers = useCallback(async (answers: Answer[]) => {
    setState(prev => ({ 
      ...prev, 
      answers,
      currentScreen: 'loading'
    }));

    // Process assessment with selected career's required traits
    if (state.selectedCareer) {
      try {
        const result = await processAssessment(
          answers, 
          state.selectedCareer.requiredTraits
        );
        
        setState(prev => ({
          ...prev,
          userTraits: result.userTraits,
          compatibilityScore: result.compatibilityScore,
          currentScreen: 'result'
        }));
      } catch (error) {
        console.error('Failed to process assessment:', error);
        // Handle error gracefully
        setState(prev => ({ ...prev, currentScreen: 'questions' }));
      }
    }
  }, [state.selectedCareer]);

  const resetAssessment = useCallback(() => {
    setState(initialState);
  }, []);

  const retakeForCareer = useCallback(() => {
    setState(prev => ({
      ...prev,
      answers: [],
      userTraits: null,
      compatibilityScore: 0,
      currentScreen: 'career'
    }));
  }, []);

  const value: AssessmentContextValue = {
    ...state,
    setScreen,
    goToWelcome,
    goToDomainSelection,
    goToCareerLibrary,
    goToInstructions,
    goToQuestions,
    goToResults,
    goToInsights,
    goToNextSteps,
    selectDomain,
    selectCareer,
    submitAnswers,
    resetAssessment,
    retakeForCareer
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}
