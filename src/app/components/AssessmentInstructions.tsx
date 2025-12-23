import { CircleCheck, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Career } from '../../data';

interface AssessmentInstructionsProps {
  career: Career;
  onBegin: () => void;
  onBack: () => void;
}

export function AssessmentInstructions({ career, onBegin, onBack }: AssessmentInstructionsProps) {
  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Change Career
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Career Info */}
          <div className="text-center mb-8">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              Assessment for
            </div>
            <h1 className="text-3xl md:text-4xl mb-2 text-slate-900">
              {career.name}
            </h1>
            <p className="text-lg text-slate-600">{career.description}</p>
          </div>

          {/* Instructions */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl mb-6 text-slate-900">Before You Begin</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CircleCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-slate-900">No Right or Wrong Answers</h3>
                  <p className="text-sm text-slate-600">
                    This isn't an exam. Be honest about how you truly feel and think.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CircleCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-slate-900">Answer Honestly</h3>
                  <p className="text-sm text-slate-600">
                    The more honest you are, the better your results will match your actual strengths.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CircleCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-slate-900">Take Your Time</h3>
                  <p className="text-sm text-slate-600">
                    There's no rush. Think about each question and answer based on your instincts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Details */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm text-slate-600 mb-1">Estimated Time</p>
              <p className="text-slate-900">10–15 minutes</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CircleCheck className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-slate-600 mb-1">Total Questions</p>
              <p className="text-slate-900">18 Questions</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Your Progress</span>
              <span className="text-sm text-slate-900">0%</span>
            </div>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"></div>
            </div>
          </div>

          {/* CTA */}
          <button 
            onClick={onBegin}
            className="w-full bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg flex items-center justify-center gap-2 group"
          >
            Begin Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}