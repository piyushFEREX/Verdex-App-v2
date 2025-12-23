# Career Compatibility Assessment App - Data Architecture

## 📁 Project Structure

```
/src
├── /data                    # Mock data layer
│   ├── careers.ts          # Career definitions & data
│   ├── domains.ts          # Domain information (PCB, PCM, Commerce, Humanities)
│   ├── questions.ts        # Assessment questions & answer options
│   ├── traits.ts           # Trait definitions & metadata
│   └── index.ts            # Centralized exports
│
├── /services               # API-like service layer
│   ├── careerService.ts    # Career-related operations
│   ├── assessmentService.ts # Assessment processing & calculations
│   └── index.ts            # Centralized exports
│
├── /context                # React Context API
│   ├── AssessmentContext.tsx # Global state management
│   └── index.ts            # Centralized exports
│
└── /app
    ├── App.tsx             # Main app with Provider
    └── /components         # UI components
        ├── WelcomeScreen.tsx
        ├── DomainSelection.tsx
        ├── CareerLibrary.tsx
        ├── AssessmentInstructions.tsx
        ├── QuestionScreen.tsx
        ├── LoadingAnalysis.tsx
        ├── CompatibilityResult.tsx
        ├── DetailedInsight.tsx
        └── NextSteps.tsx
```

## 🎯 Architecture Overview

### 1. Data Layer (`/src/data`)

**Purpose**: Centralized mock data definitions

**Files**:
- `careers.ts`: 16 careers across 4 domains with required trait profiles
- `domains.ts`: Domain metadata (PCB, PCM, Commerce, Humanities)
- `questions.ts`: 18 psychometric questions mapped to 6 traits
- `traits.ts`: Trait definitions (Stress Tolerance, Logical Thinking, etc.)

**Key Features**:
- Type-safe data structures
- Helper functions for querying data
- Easy to extend with more careers/questions

**Example Usage**:
```typescript
import { careers, getCareerById, searchCareers } from '../data';

// Get all careers
const allCareers = careers;

// Search careers
const results = searchCareers('engineer', 'pcm');

// Get specific career
const career = getCareerById('software-engineer');
```

### 2. Service Layer (`/src/services`)

**Purpose**: Simulate API calls and business logic

**Files**:
- `careerService.ts`: Career search, filtering, recommendations
- `assessmentService.ts`: Trait calculation, compatibility scoring

**Key Features**:
- Simulated network delays for realistic UX
- Scoring algorithms
- Answer validation
- Trait insights generation

**Example Usage**:
```typescript
import { fetchCareersByDomain, processAssessment } from '../services';

// Fetch careers (with simulated delay)
const careers = await fetchCareersByDomain('pcm');

// Process assessment
const result = await processAssessment(answers, requiredTraits);
// Returns: { userTraits, compatibilityScore, completedAt }
```

### 3. Context API (`/src/context`)

**Purpose**: Global state management

**Files**:
- `AssessmentContext.tsx`: Manages entire assessment flow

**State Managed**:
- Current screen navigation
- Selected domain & career
- User answers & calculated traits
- Compatibility score

**Key Features**:
- Centralized state
- Navigation helpers
- Async assessment processing
- Reset/retake functionality

**Example Usage**:
```typescript
import { useAssessment } from '../context';

function MyComponent() {
  const {
    currentScreen,
    selectedCareer,
    selectCareer,
    goToQuestions,
    submitAnswers,
    resetAssessment
  } = useAssessment();
  
  // Use state and actions...
}
```

## 🔄 Data Flow

1. **App Startup**
   - `App.tsx` wraps app with `AssessmentProvider`
   - Context initializes with welcome screen

2. **User Journey**
   ```
   Welcome → Domain Selection → Career Library → Instructions → 
   Questions → Loading → Results → Insights → Next Steps
   ```

3. **Assessment Processing**
   - User completes 18 questions
   - `submitAnswers()` called in context
   - Triggers `processAssessment()` service
   - Calculates traits & compatibility
   - Updates context state
   - Navigates to results

## 🛠️ Extending the App

### Add New Career
```typescript
// In /src/data/careers.ts
{
  id: 'new-career',
  name: 'New Career Name',
  description: 'Career description',
  domain: 'pcm',
  requiredTraits: {
    stressTolerance: 75,
    logicalThinking: 80,
    // ... other traits
  }
}
```

### Add New Question
```typescript
// In /src/data/questions.ts
{
  id: 18,
  text: "Your question text here",
  trait: "stressTolerance" // or other trait
}
```

### Add New Trait
1. Add to `TraitKey` type in `/src/data/traits.ts`
2. Add to `TraitInfo[]` array
3. Update all `TraitScores` interfaces
4. Update calculation logic in `assessmentService.ts`

## 📊 Type System

### Core Types
```typescript
// Domain types
type Domain = 'pcb' | 'pcm' | 'commerce' | 'humanities';

// Career type
interface Career {
  id: string;
  name: string;
  description: string;
  domain: Domain;
  requiredTraits: TraitScores;
}

// Trait scores
interface TraitScores {
  stressTolerance: number;
  logicalThinking: number;
  emotionalRegulation: number;
  creativity: number;
  analyticalSkills: number;
  communication: number;
}

// User answer
interface Answer {
  questionId: number;
  value: number; // 1-4 (Likert scale)
}
```

## 🔐 Benefits of This Architecture

1. **Separation of Concerns**
   - Data, logic, and UI are clearly separated
   - Easy to maintain and test

2. **Scalability**
   - Easy to add more careers, questions, or features
   - Ready for real API integration

3. **Type Safety**
   - Full TypeScript coverage
   - Catch errors at compile time

4. **Developer Experience**
   - Clear structure
   - Easy to understand data flow
   - Centralized state management

5. **Future-Ready**
   - Replace mock services with real API calls
   - Add database persistence
   - Integrate analytics

## 🚀 Converting to Real API

To convert mock services to real APIs:

```typescript
// Before (mock)
export const fetchCareers = async (): Promise<Career[]> => {
  await delay(300);
  return careers;
};

// After (real API)
export const fetchCareers = async (): Promise<Career[]> => {
  const response = await fetch('/api/careers');
  return response.json();
};
```

## 📝 Notes

- All data is currently in-memory (no persistence)
- Network delays are simulated for realistic UX
- Calculation algorithms can be customized in `assessmentService.ts`
- Context API is sufficient for this app size; consider Redux for larger apps
