import React from 'react';
import { Trophy, Award, Star, Target, Zap, Brain, ArrowRight, Home } from 'lucide-react';
import { UserProgress } from '../types';

interface AchievementSystemProps {
  progress: UserProgress;
  onContinue: () => void;
  onHome: () => void;
}

const AchievementSystem: React.FC<AchievementSystemProps> = ({ progress, onContinue, onHome }) => {
  const getAchievements = () => {
    const achievements = [];
    
    // Question milestones
    if (progress.totalQuestions >= 10) {
      achievements.push({
        id: 'first_10',
        title: 'Getting Started',
        description: 'Completed your first 10 questions',
        icon: Target,
        rarity: 'common' as const,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100'
      });
    }
    
    if (progress.totalQuestions >= 50) {
      achievements.push({
        id: 'half_century',
        title: 'Half Century',
        description: 'Answered 50 questions',
        icon: Star,
        rarity: 'rare' as const,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100'
      });
    }
    
    if (progress.totalQuestions >= 100) {
      achievements.push({
        id: 'century',
        title: 'Century Milestone',
        description: 'Completed 100 questions',
        icon: Trophy,
        rarity: 'epic' as const,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100'
      });
    }
    
    // Accuracy achievements
    const accuracy = progress.totalQuestions > 0 ? (progress.correctAnswers / progress.totalQuestions) * 100 : 0;
    
    if (accuracy >= 70 && progress.totalQuestions >= 10) {
      achievements.push({
        id: 'good_student',
        title: 'Good Student',
        description: '70%+ accuracy',
        icon: Brain,
        rarity: 'common' as const,
        color: 'text-green-600',
        bgColor: 'bg-green-100'
      });
    }
    
    if (accuracy >= 85 && progress.totalQuestions >= 20) {
      achievements.push({
        id: 'excellent_student',
        title: 'Excellent Student',
        description: '85%+ accuracy',
        icon: Award,
        rarity: 'rare' as const,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-100'
      });
    }
    
    if (accuracy >= 95 && progress.totalQuestions >= 30) {
      achievements.push({
        id: 'master_student',
        title: 'Master Student',
        description: '95%+ accuracy',
        icon: Zap,
        rarity: 'legendary' as const,
        color: 'text-red-600',
        bgColor: 'bg-red-100'
      });
    }
    
    // Level achievements
    if (progress.level >= 2) {
      achievements.push({
        id: 'level_up',
        title: 'Level Up!',
        description: 'Reached Level 2',
        icon: Star,
        rarity: 'common' as const,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100'
      });
    }
    
    if (progress.level >= 5) {
      achievements.push({
        id: 'experienced',
        title: 'Experienced',
        description: 'Reached Level 5',
        icon: Trophy,
        rarity: 'rare' as const,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100'
      });
    }
    
    return achievements;
  };

  const achievements = getAchievements();
  const accuracy = progress.totalQuestions > 0 ? (progress.correctAnswers / progress.totalQuestions) * 100 : 0;

  const getRarityBadge = (rarity: string) => {
    const colors = {
      common: 'bg-gray-100 text-gray-800',
      rare: 'bg-purple-100 text-purple-800',
      epic: 'bg-yellow-100 text-yellow-800',
      legendary: 'bg-red-100 text-red-800'
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Trophy className="h-12 w-12 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Achievements Unlocked!</h1>
          <p className="text-lg text-gray-600">Congratulations on your progress</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{progress.totalQuestions}</div>
              <div className="text-sm text-gray-600">Questions Answered</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{Math.round(accuracy)}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{progress.level}</div>
              <div className="text-sm text-gray-600">Level</div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{progress.experience}</div>
              <div className="text-sm text-gray-600">Experience Points</div>
            </div>
          </div>
          
          {/* Experience Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Level {progress.level}</span>
              <span>Level {progress.level + 1}</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${((progress.experience % 1000) / 1000) * 100}%`
                }}
              />
            </div>
            <div className="text-center text-xs text-gray-500 mt-1">
              {progress.experience % 1000} / 1000 XP to next level
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        {achievements.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.bgColor} mr-3`}>
                        <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getRarityBadge(achievement.rarity)}`}>
                          {achievement.rarity.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={onHome}
            className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Return Home
          </button>
          
          <button
            onClick={onContinue}
            className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Learning
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementSystem;