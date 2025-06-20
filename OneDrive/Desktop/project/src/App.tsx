import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SpecialtySelection from './components/SpecialtySelection';
import QuizInterface from './components/QuizInterface';
import AchievementSystem from './components/AchievementSystem';
import { User, UserProgress } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'specialty' | 'quiz' | 'achievements'>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<'vascular' | 'neuroendovascular' | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalQuestions: 0,
    correctAnswers: 0,
    streak: 0,
    achievements: [],
    timeSpent: 0,
    level: 1,
    experience: 0
  });

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentPage('specialty');
  };

  const handleSpecialtySelect = (specialty: 'vascular' | 'neuroendovascular') => {
    setSelectedSpecialty(specialty);
    setCurrentPage('quiz');
  };

  const handleReturnHome = () => {
    setCurrentPage('landing');
    setUser(null);
    setSelectedSpecialty(null);
  };

  const handleQuizComplete = (progress: UserProgress) => {
    setUserProgress(progress);
    setCurrentPage('achievements');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={() => setCurrentPage('login')} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onBack={() => setCurrentPage('landing')} />;
      case 'specialty':
        return <SpecialtySelection onSelect={handleSpecialtySelect} onBack={() => setCurrentPage('login')} />;
      case 'quiz':
        return (
          <QuizInterface
            specialty={selectedSpecialty!}
            user={user!}
            onExit={handleReturnHome}
            onComplete={handleQuizComplete}
            progress={userProgress}
            onProgressUpdate={setUserProgress}
          />
        );
      case 'achievements':
        return (
          <AchievementSystem
            progress={userProgress}
            onContinue={() => setCurrentPage('quiz')}
            onHome={handleReturnHome}
          />
        );
      default:
        return <LandingPage onGetStarted={() => setCurrentPage('login')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentPage()}
    </div>
  );
}

export default App;