import type { Domain } from './domains';
import type { TraitScores } from './traits';

export interface Career {
  id: string;
  name: string;
  description: string;
  domain: Domain;
  requiredTraits: TraitScores; // 0–100 requirement benchmark for that career
}

export const careers: Career[] = [
  // ================= PCB (Medical & Life Sciences) =================

  {
    id: 'doctor',
    name: 'Doctor (MBBS)',
    description: 'Diagnose and treat illnesses; make high-stakes clinical decisions.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 90,
      logicalThinking: 85,
      emotionalRegulation: 80,
      creativity: 55,
      analyticalSkills: 85,
      communication: 75
    }
  },
  {
    id: 'dentist',
    name: 'Dentist (BDS)',
    description: 'Diagnose and treat dental/oral conditions; perform procedures with precision.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 80,
      logicalThinking: 80,
      emotionalRegulation: 75,
      creativity: 60,
      analyticalSkills: 80,
      communication: 75
    }
  },
  {
    id: 'nurse',
    name: 'Nursing Professional (B.Sc Nursing)',
    description: 'Provide patient care, monitoring, and support in clinical settings.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 80,
      logicalThinking: 65,
      emotionalRegulation: 90,
      creativity: 55,
      analyticalSkills: 70,
      communication: 90
    }
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist (B.Pharm)',
    description: 'Dispense medications safely; guide patients on correct usage.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 65,
      logicalThinking: 75,
      emotionalRegulation: 70,
      creativity: 45,
      analyticalSkills: 85,
      communication: 65
    }
  },
  {
    id: 'physiotherapist',
    name: 'Physiotherapist (BPT)',
    description: 'Rehab and restore movement after injury/illness using therapy plans.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 65,
      emotionalRegulation: 85,
      creativity: 60,
      analyticalSkills: 70,
      communication: 90
    }
  },
  {
    id: 'medical-lab-technologist',
    name: 'Medical Lab Technologist (MLT)',
    description: 'Run diagnostic tests; ensure accuracy and quality in lab reporting.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 65,
      logicalThinking: 75,
      emotionalRegulation: 70,
      creativity: 45,
      analyticalSkills: 90,
      communication: 55
    }
  },
  {
    id: 'radiology-technologist',
    name: 'Radiology / Imaging Technologist',
    description: 'Operate imaging equipment (X-ray/CT/MRI) and follow safety protocols.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 70,
      emotionalRegulation: 70,
      creativity: 45,
      analyticalSkills: 80,
      communication: 65
    }
  },
  {
    id: 'biotechnologist',
    name: 'Biotechnologist',
    description: 'Research and develop biological solutions in health, agriculture, and industry.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 65,
      logicalThinking: 85,
      emotionalRegulation: 60,
      creativity: 85,
      analyticalSkills: 92,
      communication: 60
    }
  },
  {
    id: 'microbiologist',
    name: 'Microbiologist',
    description: 'Study microorganisms for diagnostics, research, and public health applications.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 60,
      logicalThinking: 80,
      emotionalRegulation: 60,
      creativity: 70,
      analyticalSkills: 92,
      communication: 55
    }
  },
  {
    id: 'nutritionist',
    name: 'Nutritionist / Dietitian',
    description: 'Create diet plans and health interventions based on evidence and lifestyle.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 60,
      logicalThinking: 65,
      emotionalRegulation: 80,
      creativity: 70,
      analyticalSkills: 75,
      communication: 88
    }
  },
  {
    id: 'veterinarian',
    name: 'Veterinarian (BVSc)',
    description: 'Diagnose and treat animal health issues; handle emergencies and procedures.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 85,
      logicalThinking: 80,
      emotionalRegulation: 80,
      creativity: 55,
      analyticalSkills: 80,
      communication: 65
    }
  },
  {
    id: 'public-health-specialist',
    name: 'Public Health Specialist',
    description: 'Work on disease prevention, health programs, and community interventions.',
    domain: 'pcb',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 75,
      emotionalRegulation: 75,
      creativity: 60,
      analyticalSkills: 88,
      communication: 80
    }
  },

  // ================= PCM (Engineering & Technology) =================

  {
    id: 'software-engineer',
    name: 'Software Engineer',
    description: 'Build and maintain software applications and systems.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 95,
      emotionalRegulation: 65,
      creativity: 80,
      analyticalSkills: 90,
      communication: 65
    }
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    description: 'Extract insights from data using statistics, models, and experimentation.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 90,
      emotionalRegulation: 60,
      creativity: 75,
      analyticalSkills: 95,
      communication: 70
    }
  },
  {
    id: 'ai-ml-engineer',
    name: 'AI / ML Engineer',
    description: 'Develop machine learning models and production AI systems.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 95,
      emotionalRegulation: 60,
      creativity: 75,
      analyticalSkills: 95,
      communication: 60
    }
  },
  {
    id: 'cybersecurity-analyst',
    name: 'Cybersecurity Analyst',
    description: 'Protect systems from threats; respond to incidents and vulnerabilities.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 85,
      logicalThinking: 90,
      emotionalRegulation: 70,
      creativity: 65,
      analyticalSkills: 92,
      communication: 65
    }
  },
  {
    id: 'mechanical-engineer',
    name: 'Mechanical Engineer',
    description: 'Design and improve mechanical systems, machines, and mechanisms.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 85,
      emotionalRegulation: 60,
      creativity: 75,
      analyticalSkills: 85,
      communication: 60
    }
  },
  {
    id: 'civil-engineer',
    name: 'Civil Engineer',
    description: 'Plan and execute infrastructure projects; coordinate stakeholders and constraints.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 80,
      logicalThinking: 80,
      emotionalRegulation: 65,
      creativity: 60,
      analyticalSkills: 85,
      communication: 75
    }
  },
  {
    id: 'electrical-engineer',
    name: 'Electrical Engineer',
    description: 'Work with power systems, circuits, and electrical design/maintenance.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 90,
      emotionalRegulation: 60,
      creativity: 60,
      analyticalSkills: 88,
      communication: 60
    }
  },
  {
    id: 'electronics-engineer',
    name: 'Electronics / Embedded Engineer',
    description: 'Design embedded systems, devices, and hardware-software integrations.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 90,
      emotionalRegulation: 60,
      creativity: 70,
      analyticalSkills: 90,
      communication: 60
    }
  },
  {
    id: 'chemical-engineer',
    name: 'Chemical Engineer',
    description: 'Design and optimize processes in chemicals, materials, and manufacturing.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 85,
      emotionalRegulation: 60,
      creativity: 65,
      analyticalSkills: 90,
      communication: 60
    }
  },
  {
    id: 'architect',
    name: 'Architect',
    description: 'Design buildings and spaces balancing aesthetics, usability, and constraints.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 75,
      emotionalRegulation: 70,
      creativity: 95,
      analyticalSkills: 75,
      communication: 85
    }
  },
  {
    id: 'product-designer',
    name: 'Product / UX Designer',
    description: 'Design digital products with user-centered research and iterative thinking.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 65,
      logicalThinking: 70,
      emotionalRegulation: 70,
      creativity: 92,
      analyticalSkills: 70,
      communication: 88
    }
  },
  {
    id: 'robotics-engineer',
    name: 'Robotics Engineer',
    description: 'Build and integrate mechanical + electronics + software automation systems.',
    domain: 'pcm',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 92,
      emotionalRegulation: 60,
      creativity: 80,
      analyticalSkills: 90,
      communication: 60
    }
  },

  // ================= Commerce (Business & Finance) =================

  {
    id: 'chartered-accountant',
    name: 'Chartered Accountant (CA)',
    description: 'Auditing, taxation, compliance, and financial reporting.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 80,
      logicalThinking: 85,
      emotionalRegulation: 75,
      creativity: 45,
      analyticalSkills: 92,
      communication: 70
    }
  },
  {
    id: 'company-secretary',
    name: 'Company Secretary (CS)',
    description: 'Corporate governance, legal compliance, and board-level coordination.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 80,
      emotionalRegulation: 75,
      creativity: 45,
      analyticalSkills: 85,
      communication: 80
    }
  },
  {
    id: 'cost-accountant',
    name: 'Cost & Management Accountant (CMA)',
    description: 'Cost control, budgeting, and performance analysis for organizations.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 85,
      emotionalRegulation: 70,
      creativity: 45,
      analyticalSkills: 90,
      communication: 65
    }
  },
  {
    id: 'investment-banker',
    name: 'Investment Banker',
    description: 'Capital raising, deal execution, and financial transactions.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 92,
      logicalThinking: 85,
      emotionalRegulation: 80,
      creativity: 55,
      analyticalSkills: 90,
      communication: 85
    }
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    description: 'Evaluate financial data, build models, and support investment decisions.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 85,
      emotionalRegulation: 65,
      creativity: 50,
      analyticalSkills: 92,
      communication: 70
    }
  },
  {
    id: 'business-analyst',
    name: 'Business Analyst',
    description: 'Bridge business needs with data and process improvement.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 80,
      emotionalRegulation: 70,
      creativity: 55,
      analyticalSkills: 88,
      communication: 80
    }
  },
  {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    description: 'Brand strategy, campaigns, customer insights, and growth planning.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 65,
      emotionalRegulation: 70,
      creativity: 95,
      analyticalSkills: 70,
      communication: 92
    }
  },
  {
    id: 'digital-marketer',
    name: 'Digital Marketing Specialist',
    description: 'Performance marketing, content strategy, and audience targeting.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 65,
      emotionalRegulation: 65,
      creativity: 90,
      analyticalSkills: 75,
      communication: 85
    }
  },
  {
    id: 'hr-manager',
    name: 'HR / People Operations',
    description: 'Hiring, culture building, performance systems, and employee support.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 60,
      emotionalRegulation: 85,
      creativity: 55,
      analyticalSkills: 65,
      communication: 95
    }
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur',
    description: 'Start and scale a business; handle uncertainty and fast decisions.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 92,
      logicalThinking: 75,
      emotionalRegulation: 82,
      creativity: 95,
      analyticalSkills: 70,
      communication: 85
    }
  },
  {
    id: 'sales-manager',
    name: 'Sales / Business Development',
    description: 'Build relationships, pitch value, and close deals with targets.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 85,
      logicalThinking: 60,
      emotionalRegulation: 75,
      creativity: 65,
      analyticalSkills: 60,
      communication: 95
    }
  },
  {
    id: 'operations-manager',
    name: 'Operations / Supply Chain',
    description: 'Improve processes, efficiency, and execution across teams/vendors.',
    domain: 'commerce',
    requiredTraits: {
      stressTolerance: 80,
      logicalThinking: 75,
      emotionalRegulation: 70,
      creativity: 50,
      analyticalSkills: 85,
      communication: 75
    }
  },

  // ================= Humanities (Arts, Law, Social Sciences) =================

  {
    id: 'lawyer',
    name: 'Lawyer',
    description: 'Legal reasoning, client representation, negotiations, and argumentation.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 85,
      logicalThinking: 90,
      emotionalRegulation: 80,
      creativity: 65,
      analyticalSkills: 90,
      communication: 95
    }
  },
  {
    id: 'psychologist',
    name: 'Psychologist',
    description: 'Support mental wellbeing using assessment, counseling, and interventions.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 70,
      emotionalRegulation: 92,
      creativity: 60,
      analyticalSkills: 75,
      communication: 92
    }
  },
  {
    id: 'journalist',
    name: 'Journalist',
    description: 'Investigate and report stories; verify facts under deadlines.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 80,
      logicalThinking: 70,
      emotionalRegulation: 70,
      creativity: 85,
      analyticalSkills: 80,
      communication: 95
    }
  },
  {
    id: 'teacher',
    name: 'Teacher',
    description: 'Educate and mentor learners; plan lessons and manage classrooms.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 65,
      emotionalRegulation: 88,
      creativity: 80,
      analyticalSkills: 65,
      communication: 92
    }
  },
  {
    id: 'civil-services',
    name: 'Civil Services (UPSC/State PSC)',
    description: 'Public administration, policy implementation, and governance responsibilities.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 90,
      logicalThinking: 80,
      emotionalRegulation: 85,
      creativity: 55,
      analyticalSkills: 88,
      communication: 80
    }
  },
  {
    id: 'policy-analyst',
    name: 'Policy Analyst',
    description: 'Research, analyze, and propose policies for social and economic impact.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 70,
      logicalThinking: 80,
      emotionalRegulation: 70,
      creativity: 65,
      analyticalSkills: 90,
      communication: 75
    }
  },
  {
    id: 'social-worker',
    name: 'Social Worker',
    description: 'Support communities and individuals through programs and interventions.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 80,
      logicalThinking: 60,
      emotionalRegulation: 92,
      creativity: 60,
      analyticalSkills: 60,
      communication: 92
    }
  },
  {
    id: 'content-writer',
    name: 'Content Writer / Copywriter',
    description: 'Write persuasive and informative content for brands, media, or platforms.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 65,
      logicalThinking: 60,
      emotionalRegulation: 65,
      creativity: 92,
      analyticalSkills: 65,
      communication: 92
    }
  },
  {
    id: 'graphic-designer',
    name: 'Graphic Designer',
    description: 'Create visual communication for brands, campaigns, and digital media.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 60,
      logicalThinking: 55,
      emotionalRegulation: 65,
      creativity: 95,
      analyticalSkills: 60,
      communication: 75
    }
  },
  {
    id: 'ui-ux-designer',
    name: 'UI/UX Designer',
    description: 'Design user experiences for apps/websites using empathy and structure.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 65,
      logicalThinking: 70,
      emotionalRegulation: 70,
      creativity: 90,
      analyticalSkills: 70,
      communication: 88
    }
  },
  {
    id: 'public-relations',
    name: 'Public Relations (PR)',
    description: 'Manage brand reputation and media communication in sensitive situations.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 85,
      logicalThinking: 60,
      emotionalRegulation: 80,
      creativity: 70,
      analyticalSkills: 60,
      communication: 95
    }
  },
  {
    id: 'film-maker',
    name: 'Filmmaker / Video Producer',
    description: 'Plan, shoot, and produce video content with storytelling and coordination.',
    domain: 'humanities',
    requiredTraits: {
      stressTolerance: 75,
      logicalThinking: 60,
      emotionalRegulation: 70,
      creativity: 95,
      analyticalSkills: 60,
      communication: 85
    }
  }
];

export const getCareerById = (id: string): Career | undefined => {
  return careers.find(career => career.id === id);
};

export const getCareersByDomain = (domain: Domain): Career[] => {
  return careers.filter(career => career.domain === domain);
};

export const searchCareers = (query: string, domain?: Domain): Career[] => {
  let filtered = careers;

  if (domain) {
    filtered = filtered.filter(career => career.domain === domain);
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(career =>
      career.name.toLowerCase().includes(lowerQuery) ||
      career.description.toLowerCase().includes(lowerQuery)
    );
  }

  return filtered;
};
