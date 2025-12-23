import { ArrowLeft, ArrowRight, Brain, Heart, Lightbulb, MessageCircle, ChartBar, Shield } from 'lucide-react';
import type { Career, TraitScores } from '../../data';

interface DetailedInsightProps {
  userTraits: TraitScores;
  careerTraits: TraitScores;
  career: Career;
  onNext: () => void;
  onBack: () => void;
}

const traitConfig = {
  stressTolerance: {
    name: "Stress Tolerance",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    barColor: "bg-red-500"
  },
  logicalThinking: {
    name: "Logical Thinking",
    icon: Brain,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    barColor: "bg-blue-500"
  },
  emotionalRegulation: {
    name: "Emotional Regulation",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    barColor: "bg-pink-500"
  },
  creativity: {
    name: "Creativity",
    icon: Lightbulb,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    barColor: "bg-yellow-500"
  },
  analyticalSkills: {
    name: "Analytical Skills",
    icon: ChartBar,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    barColor: "bg-purple-500"
  },
  communication: {
    name: "Communication",
    icon: MessageCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    barColor: "bg-green-500"
  }
};

export function DetailedInsight({ userTraits, careerTraits, career, onNext, onBack }: DetailedInsightProps) {
  const traits = Object.keys(traitConfig) as Array<keyof typeof traitConfig>;

  const getGapAnalysis = (userValue: number, careerValue: number) => {
    const difference = userValue - careerValue;
    if (Math.abs(difference) <= 10) {
      return { status: "Excellent Match", color: "text-green-600" };
    } else if (Math.abs(difference) <= 25) {
      return { status: "Good Fit", color: "text-blue-600" };
    } else if (userValue < careerValue) {
      return { status: "Room to Grow", color: "text-purple-600" };
    } else {
      return { status: "Overqualified", color: "text-slate-600" };
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto pt-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Results
          </button>
          
          <h1 className="text-3xl md:text-4xl mb-2 text-slate-900">
            Detailed Trait Analysis
          </h1>
          <p className="text-lg text-slate-600">
            See how your profile matches with {career.name}
          </p>
        </div>

        {/* Trait Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {traits.map((traitKey) => {
            const config = traitConfig[traitKey];
            const Icon = config.icon;
            const userValue = userTraits[traitKey];
            const careerValue = careerTraits[traitKey];
            const gap = getGapAnalysis(userValue, careerValue);

            return (
              <div key={traitKey} className="bg-white rounded-2xl shadow-lg p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`${config.bgColor} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${config.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900">{config.name}</h3>
                      <span className={`text-sm ${gap.color}`}>{gap.status}</span>
                    </div>
                  </div>
                </div>

                {/* Your Level */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Your Level</span>
                    <span className="text-sm text-slate-900">{Math.round(userValue)}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${config.barColor} rounded-full transition-all duration-1000`}
                      style={{ width: `${userValue}%` }}
                    ></div>
                  </div>
                </div>

                {/* Career Requirement */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Career Requirement</span>
                    <span className="text-sm text-slate-900">{Math.round(careerValue)}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-400 rounded-full transition-all duration-1000"
                      style={{ width: `${careerValue}%` }}
                    ></div>
                  </div>
                </div>

                {/* Gap Indicator */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  {userValue >= careerValue - 10 ? (
                    <p className="text-sm text-slate-600">
                      ✓ You meet or exceed the requirements for this trait
                    </p>
                  ) : (
                    <p className="text-sm text-slate-600">
                      → Focus on developing this skill by {Math.round(careerValue - userValue)}%
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-6">
          <h2 className="text-xl mb-4 text-slate-900">Key Insights</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">1</span>
              </div>
              <p className="text-slate-700">
                Your strongest traits align well with what employers look for in this career
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">2</span>
              </div>
              <p className="text-slate-700">
                Areas marked as "Room to Grow" are opportunities for skill development
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">3</span>
              </div>
              <p className="text-slate-700">
                Remember, these traits can be developed through practice and learning
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={onNext}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            View Next Steps
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}