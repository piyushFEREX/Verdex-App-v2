import { WelcomeScreen } from './components/WelcomeScreen';
import { DomainSelection } from './components/DomainSelection';
import { CareerLibrary } from './components/CareerLibrary';
import { AssessmentInstructions } from './components/AssessmentInstructions';
import { QuestionScreen } from './components/QuestionScreen';
import { LoadingAnalysis } from './components/LoadingAnalysis';
import { CompatibilityResult } from './components/CompatibilityResult';
import { DetailedInsight } from './components/DetailedInsight';
import { NextSteps } from './components/NextSteps';
import { AssessmentProvider, useAssessment } from '../context';
import { PDFReport } from './components/Downloadreport';

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

export type Domain = 'pcb' | 'pcm' | 'commerce' | 'humanities';

export interface Career {
  id: string;
  name: string;
  description: string;
  domain: Domain;
  requiredTraits: {
    stressTolerance: number;
    logicalThinking: number;
    emotionalRegulation: number;
    creativity: number;
    analyticalSkills: number;
    communication: number;
  };
}

export interface Answer {
  questionId: number;
  value: number;
}

function AppContent() {
  const {
    currentScreen,
    selectedDomain,
    selectedCareer,
    userTraits,
    compatibilityScore,
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
  } = useAssessment();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hidden PDF layout – required */}
<div style={{ position: "absolute", left: "-9999px", top: 0 }}>
  <PDFReport />
</div>

      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={goToDomainSelection} />
      )}
      {currentScreen === 'domain' && (
        <DomainSelection onSelectDomain={selectDomain} />
      )}
      {currentScreen === 'career' && selectedDomain && (
        <CareerLibrary 
          domain={selectedDomain} 
          onSelectCareer={selectCareer}
          onBack={goToDomainSelection}
        />
      )}
      {currentScreen === 'instructions' && selectedCareer && (
        <AssessmentInstructions 
          career={selectedCareer}
          onBegin={goToQuestions}
          onBack={goToCareerLibrary}
        />
      )}
      {currentScreen === 'questions' && (
        <QuestionScreen 
          onComplete={submitAnswers}
          onBack={goToInstructions}
        />
      )}
      {currentScreen === 'loading' && (
        <LoadingAnalysis />
      )}
      {currentScreen === 'result' && selectedCareer && (
        <CompatibilityResult 
          score={compatibilityScore}
          career={selectedCareer}
          onViewInsights={goToInsights}
          onExploreOther={retakeForCareer}
        />
      )}
      {currentScreen === 'insights' && selectedCareer && userTraits && (
        <DetailedInsight 
          userTraits={userTraits}
          careerTraits={selectedCareer.requiredTraits}
          career={selectedCareer}
          onNext={goToNextSteps}
          onBack={goToResults}
        />
      )}
      {currentScreen === 'next-steps' && selectedCareer && (
        <NextSteps 
          career={selectedCareer}
          score={compatibilityScore}
          onExploreOther={retakeForCareer}
          onStartOver={resetAssessment}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AssessmentProvider>
      <AppContent />
    </AssessmentProvider>
  );
}