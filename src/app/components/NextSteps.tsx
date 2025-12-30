import { BookOpen, Users, Target, Download, House, Search } from 'lucide-react';
import type { Career } from '../../data';
import { downloadReportPDF } from '../../services/downloadReportPDF';

interface NextStepsProps {
  career: Career;
  score: number;
  onExploreOther: () => void;
  onStartOver: () => void;
}

export function NextSteps({ career, score, onExploreOther, onStartOver }: NextStepsProps) {
  const getSimilarCareers = (career: Career) => {
    const similar: { [key: string]: string[] } = {
      'doctor': ['Surgeon', 'Medical Researcher', 'Pediatrician'],
      'software-engineer': ['Full-Stack Developer', 'DevOps Engineer', 'Mobile App Developer'],
      'chartered-accountant': ['Financial Analyst', 'Tax Consultant', 'Auditor'],
      'lawyer': ['Corporate Lawyer', 'Civil Rights Attorney', 'Legal Consultant'],
      'psychologist': ['Clinical Psychologist', 'Counselor', 'Therapist']
    };
    return similar[career.id] || ['Explore the career library for more options'];
  };

  const getSkillsToDevelo = (score: number) => {
    if (score >= 80) {
      return [
        'Advanced certification in your field',
        'Leadership and management skills',
        'Industry-specific software and tools',
        'Public speaking and presentation skills'
      ];
    }
    if (score >= 60) {
      return [
        'Core technical skills for this profession',
        'Time management and organization',
        'Communication and teamwork',
        'Problem-solving and critical thinking'
      ];
    }
    return [
      'Foundation courses in relevant subjects',
      'Basic soft skills development',
      'Mentorship and guidance from professionals',
      'Exploratory internships or job shadowing'
    ];
  };

  const getRecommendedActivities = (career: Career) => {
    const activities: { [key: string]: string[] } = {
      'pcb': [
        'Join science clubs and attend medical camps',
        'Volunteer at hospitals or clinics',
        'Read medical journals and case studies',
        'Attend biology/chemistry workshops'
      ],
      'pcm': [
        'Participate in coding competitions and hackathons',
        'Build personal projects and contribute to open source',
        'Join robotics or maker clubs',
        'Take online courses in programming and math'
      ],
      'commerce': [
        'Start a small business or entrepreneurship project',
        'Learn accounting software and financial analysis',
        'Join business clubs and case study competitions',
        'Read business news and market reports'
      ],
      'humanities': [
        'Join debate clubs and public speaking forums',
        'Write for school publications or blogs',
        'Participate in Model UN or mock trials',
        'Volunteer for social causes and NGOs'
      ]
    };
    return activities[career.domain] || [];
  };

  const similarCareers = getSimilarCareers(career);
  const skillsToDevelop = getSkillsToDevelo(score);
  const recommendedActivities = getRecommendedActivities(career);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            Your Action Plan
          </div>
          <h1 className="text-3xl md:text-4xl mb-2 text-slate-900">
            Next Steps for Your Journey
          </h1>
          <p className="text-lg text-slate-600">
            Practical steps to pursue your career in {career.name}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Similar Careers */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-xl text-slate-900">Similar Careers</h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Careers related to {career.name} that you might also consider:
            </p>
            <ul className="space-y-3">
              {similarCareers.map((similarCareer, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{similarCareer}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills to Develop */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl text-slate-900">Skills to Develop</h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Focus on building these skills to strengthen your profile:
            </p>
            <ul className="space-y-3">
              {skillsToDevelop.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Activities */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl text-slate-900">Recommended Activities</h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Get involved in these activities while still in school:
            </p>
            <ul className="space-y-3">
              {recommendedActivities.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Subjects */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-xl text-slate-900">Subject Focus</h2>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Subjects and streams to prioritize:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">Excel in your core subjects related to {career.domain.toUpperCase()}</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">Maintain good grades in English for communication</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">Take additional courses or tuitions if needed</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">Stay updated with competitive exam patterns</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Report */}
        <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 mb-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl mb-2">Download Your Complete Report</h2>
              <p className="text-green-50">
                Get a PDF with your assessment results, trait analysis, and action plan
              </p>
            </div>
            <button onClick={()=> downloadReportPDF()}  className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-colors flex items-center gap-2 whitespace-nowrap">
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onExploreOther}
            className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Explore Other Careers
          </button>
          <button 
            onClick={onStartOver}
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:border-slate-400 transition-colors flex items-center justify-center gap-2"
          >
            <House className="w-5 h-5" />
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}