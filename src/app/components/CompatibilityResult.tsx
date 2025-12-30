import { TrendingUp, Award, Target, ArrowRight, Download } from 'lucide-react';
import type { Career } from '../../data';
import { downloadReportPDF } from '../../services/downloadReportPDF';

interface CompatibilityResultProps {
  score: number;
  career: Career;
  onViewInsights: () => void;
  onExploreOther: () => void;
}

export function CompatibilityResult({ score, career, onViewInsights, onExploreOther }: CompatibilityResultProps) {
  const getFitLabel = (score: number) => {
    if (score >= 80) return { label: "Strong Fit", color: "text-green-600", bgColor: "bg-green-100" };
    if (score >= 60) return { label: "Moderate Fit", color: "text-blue-600", bgColor: "bg-blue-100" };
    return { label: "Needs Alignment", color: "text-purple-600", bgColor: "bg-purple-100" };
  };

  const getStrengths = (score: number) => {
    if (score >= 80) {
      return [
        "Your natural abilities align strongly with this career",
        "You have the right mindset for the challenges ahead",
        "Your personality traits match what employers look for"
      ];
    }
    if (score >= 60) {
      return [
        "You have some natural strengths for this career",
        "With focused development, you can excel in this field",
        "Your basic aptitude is well-suited to this path"
      ];
    }
    return [
      "You have potential that can be developed",
      "This career may require significant skill building",
      "Consider exploring related careers that might be a better fit"
    ];
  };

  const getChallenges = (score: number) => {
    if (score >= 80) {
      return [
        "Stay updated with industry trends and continuous learning",
        "Build relevant experience through internships or projects",
        "Network with professionals in this field"
      ];
    }
    if (score >= 60) {
      return [
        "Focus on developing specific skills identified in the detailed insights",
        "Seek mentorship from professionals in this field",
        "Consider additional training or courses to strengthen weak areas"
      ];
    }
    return [
      "Significant skill development will be needed in multiple areas",
      "Consider if this career truly aligns with your interests",
      "Explore alternative careers with higher compatibility"
    ];
  };

  const fitInfo = getFitLabel(score);
  const strengths = getStrengths(score);
  const challenges = getChallenges(score);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            Assessment Complete
          </div>
          <h1 className="text-3xl md:text-4xl mb-2 text-slate-900">
            Your Compatibility with {career.name}
          </h1>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-6">
          {/* Circular Score */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e2e8f0"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#16a34a"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 88}`}
                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - score / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl text-slate-900">{score}%</span>
                  <span className="text-sm text-slate-600 mt-1">Compatible</span>
                </div>
              </div>
            </div>
            
            <div className={`inline-block ${fitInfo.bgColor} ${fitInfo.color} px-6 py-3 rounded-full mb-4`}>
              <Award className="w-5 h-5 inline mr-2" />
              {fitInfo.label}
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Strengths */}
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg text-slate-900">Your Strengths</h3>
              </div>
              <ul className="space-y-3">
                {strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to Develop */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg text-slate-900">Growth Opportunities</h3>
              </div>
              <ul className="space-y-3">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onViewInsights}
              className="flex-1 bg-green-600 cursor-pointer text-white px-6 py-4 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 group"
            >
              View Detailed Insights
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={()=>{ downloadReportPDF()}} className="cursor-pointer flex-1 border-2 border-slate-300 text-slate-700 px-6 py-4 rounded-full hover:border-slate-400 transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Report
            </button>
          </div>
        </div>

        {/* Explore Other Careers */}
        <div className="text-center">
          <button 
            onClick={onExploreOther}
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Explore Other Careers
          </button>
        </div>
      </div>
    </div>
  );
}