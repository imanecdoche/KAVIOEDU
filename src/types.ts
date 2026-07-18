/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LevelKey = 'SD' | 'SMP' | 'SMA' | 'UMUM';

export interface VocabularyItem {
  id: string;
  word: string;
  partOfSpeech: string;
  pronunciation: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
  role: 'A' | 'B';
}

export interface ExpressionItem {
  phrase: string;
  usage: string;
  translation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ModuleSection {
  id: string;
  type: 'intro' | 'vocabulary' | 'dialogue' | 'expressions' | 'grammar';
  title: string;
  // Dynamic contents depending on section type
  introText?: string;
  vocabulary?: VocabularyItem[];
  dialogue?: DialogueLine[];
  expressions?: ExpressionItem[];
  grammarExplanation?: {
    pattern: string;
    description: string;
    examples: { form: string; translation: string }[];
    notes: string;
  };
}

export interface LearningUnit {
  id: string;
  number: number;
  title: string;
  description: string;
  focus: string;
  sections: ModuleSection[];
  quiz: QuizQuestion[];
}

export interface LevelConfig {
  key: LevelKey;
  name: string;
  badge: string;
  colorTheme: {
    primary: string; // Tailwind class
    secondary: string;
    accent: string;
    bg: string;
    hover: string;
    text: string;
  };
  audience: string;
  units: LearningUnit[];
}

// Token specifications for the design system inspector
export interface DesignSystemToken {
  name: string;
  class: string;
  description: string;
  exampleText: string;
}
