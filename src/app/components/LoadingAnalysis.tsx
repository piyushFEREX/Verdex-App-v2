import { useEffect, useState } from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';

const loadingMessages = [
  { icon: Brain, text: "Analyzing your strengths...", color: "text-green-600" },
  { icon: Target, text: "Matching your profile with career requirements...", color: "text-blue-600" },
  { icon: TrendingUp, text: "Calculating your compatibility score...", color: "text-purple-600" }
];

export function LoadingAnalysis() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = loadingMessages[currentMessageIndex];
  const Icon = currentMessage.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-32 h-32 rounded-full border-4 border-green-200 animate-spin" style={{ 
              borderTopColor: '#16a34a',
              animationDuration: '2s'
            }}></div>
            
            {/* Inner icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Icon className={`w-10 h-10 ${currentMessage.color}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <div className="mb-8">
          <h2 className="text-2xl mb-2 text-slate-900 transition-all duration-500">
            {currentMessage.text}
          </h2>
          <p className="text-slate-600">This will only take a moment</p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {loadingMessages.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentMessageIndex 
                  ? 'w-8 bg-green-600' 
                  : 'w-2 bg-slate-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
