export interface User {
  id: string;
  email: string;
  name: string;
  plan: 'basic' | 'standard' | 'premium';
  expiryDate: Date;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  hasImage?: boolean;
  imageUrl?: string;
  isScenario?: boolean;
}

export interface UserProgress {
  totalQuestions: number;
  correctAnswers: number;
  streak: number;
  achievements: Achievement[];
  timeSpent: number;
  level: number;
  experience: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface QuizSession {
  questions: Question[];
  currentQuestionIndex: number;
  answers: (number | null)[];
  startTime: Date;
  timeRemaining: number;
  isCompleted: boolean;
}