import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { questions, answerOptions } from '../../data';
import type { Answer } from '../../services';

interface QuestionScreenProps {
  onComplete: (answers: Answer[]) => void;
  onBack: () => void;
}

export function QuestionScreen({ onComplete, onBack }: QuestionScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);

  const handleAnswer = (value: number) => {
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({ questionId: currentQuestion.id, value });
    setAnswers(newAnswers);

    // Auto-advance to next question after a brief delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto pt-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span className="text-sm text-slate-900">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl text-slate-900 leading-relaxed">
              {currentQuestion.text}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {answerOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full p-6 border-2 rounded-2xl text-left transition-all ${option.color} ${
                  currentAnswer?.value === option.value 
                    ? 'ring-4 ring-green-200 border-green-500' 
                    : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    currentAnswer?.value === option.value 
                      ? 'border-green-600 bg-green-600' 
                      : 'border-slate-300'
                  }`}>
                    {currentAnswer?.value === option.value && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-lg text-slate-900">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5" />
            {currentQuestionIndex === 0 ? 'Back' : 'Previous'}
          </button>

          {currentAnswer && currentQuestionIndex < questions.length - 1 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {currentAnswer && currentQuestionIndex === questions.length - 1 && (
            <button
              onClick={() => onComplete(answers)}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Complete Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}