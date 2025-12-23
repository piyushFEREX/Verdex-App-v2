import { Microscope, Cpu, TrendingUp, Palette, ArrowRight } from 'lucide-react';
import type { Domain } from '../../data';

interface DomainSelectionProps {
  onSelectDomain: (domain: Domain) => void;
}

const domains = [
  {
    id: 'pcb' as Domain,
    name: 'PCB – Medical & Life Sciences',
    icon: Microscope,
    color: 'bg-red-50 border-red-200 hover:border-red-400',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    examples: ['Doctor (MBMS)', 'Pharmacist', 'Biotechnologist', 'Physiotherapist']
  },
  {
    id: 'pcm' as Domain,
    name: 'PCM – Engineering & Technology',
    icon: Cpu,
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    examples: ['Software Engineer', 'Mechanical Engineer', 'Data Scientist', 'Architect']
  },
  {
    id: 'commerce' as Domain,
    name: 'Commerce – Business & Finance',
    icon: TrendingUp,
    color: 'bg-green-50 border-green-200 hover:border-green-400',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    examples: ['Chartered Accountant', 'Investment Banker', 'Entrepreneur', 'Marketing Manager']
  },
  {
    id: 'humanities' as Domain,
    name: 'Humanities – Arts & Social Sciences',
    icon: Palette,
    color: 'bg-purple-50 border-purple-200 hover:border-purple-400',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    examples: ['Lawyer', 'Psychologist', 'Journalist', 'Teacher']
  }
];

export function DomainSelection({ onSelectDomain }: DomainSelectionProps) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-3xl md:text-4xl mb-4 text-slate-900">
            Choose Your Career Stream
          </h1>
          <p className="text-lg text-slate-600">
            Select the field that interests you most
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <button
                key={domain.id}
                onClick={() => onSelectDomain(domain.id)}
                className={`${domain.color} border-2 rounded-3xl p-8 text-left transition-all hover:shadow-lg group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${domain.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${domain.iconColor}`} />
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </div>
                
                <h2 className="text-xl mb-4 text-slate-900">
                  {domain.name}
                </h2>
                
                <div className="space-y-2">
                  <p className="text-sm text-slate-600 mb-2">Example careers:</p>
                  {domain.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                      <span className="text-sm text-slate-700">{example}</span>
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}