import { GraduationCap, Sparkles, TrendingUp } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full mb-8">
            <GraduationCap className="w-6 h-6" />
            <span className="font-semibold">VerdeXGlobal</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl mb-4 text-slate-900">
              Check Your Compatibility With Your Dream Career
            </h1>
            <p className="text-xl text-slate-600">
              Based on psychology, aptitude, and real-world career demands
            </p>
          </div>

          {/* Illustration Area */}
          <div className="my-12 flex justify-center gap-6 flex-wrap">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-green-600" />
            </div>
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-blue-600" />
            </div>
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-purple-600" />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-slate-900">Scientific Assessment</h3>
              <p className="text-sm text-slate-600">Based on proven psychometric principles</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-slate-900">Honest Insights</h3>
              <p className="text-sm text-slate-600">Understand your strengths and growth areas</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-slate-900">Actionable Guidance</h3>
              <p className="text-sm text-slate-600">Get personalized next steps for your journey</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onStart}
              className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg"
            >
              Start Assessment
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:border-slate-400 transition-colors text-lg">
              How This Works
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Takes only 10–15 minutes · No registration required
          </p>
        </div>
      </div>
    </div>
  );
}
