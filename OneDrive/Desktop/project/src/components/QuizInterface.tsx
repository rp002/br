import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Clock, Brain, Award } from 'lucide-react';
import { Question, User, UserProgress, QuizSession } from '../types';
import { vascularQuestions, neuroendovascularQuestions } from '../data/questions';

interface QuizInterfaceProps {
  specialty: 'vascular' | 'neuroendovascular';
  user: User;
  onExit: () => void;
  onComplete: (progress: UserProgress) => void;
  progress: UserProgress;
  onProgressUpdate: (progress: UserProgress) => void;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({
  specialty,
  user,
  onExit,
  onComplete,
  progress,
  onProgressUpdate
}) => {
  const [quizSession, setQuizSession] = useState<QuizSession>(() => {
    const questions = specialty === 'vascular' ? vascularQuestions : neuroendovascularQuestions;
    return {
      questions: questions.slice(0, 50), // Show 50 questions per session
      currentQuestionIndex: 0,
      answers: new Array(50).fill(null),
      startTime: new Date(),
      timeRemaining: 180, // 3 minutes in seconds
      isCompleted: false
    };
  });

  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [sessionStartTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setQuizSession(prev => {
        if (prev.timeRemaining <= 1) {
          // Time's up - auto advance to next question
          handleNextQuestion();
          return {
            ...prev,
            timeRemaining: 180 // Reset timer for next question
          };
        }
        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setQuizSession(prev => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestionIndex] = answerIndex;
      return {
        ...prev,
        answers: newAnswers
      };
    });
    setShowAnswerKey(true);
  };

  const handleNextQuestion = () => {
    if (quizSession.currentQuestionIndex < quizSession.questions.length - 1) {
      setQuizSession(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        timeRemaining: 180
      }));
      setShowAnswerKey(false);
    } else {
      // Quiz completed
      completeQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (quizSession.currentQuestionIndex > 0) {
      setQuizSession(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
        timeRemaining: 180
      }));
      setShowAnswerKey(quizSession.answers[quizSession.currentQuestionIndex - 1] !== null);
    }
  };

  const completeQuiz = () => {
    const correctAnswers = quizSession.answers.reduce((count, answer, index) => {
      return answer === quizSession.questions[index].correctAnswer ? count + 1 : count;
    }, 0);

    const timeSpent = Math.floor((Date.now() - sessionStartTime) / 1000);
    const newProgress: UserProgress = {
      ...progress,
      totalQuestions: progress.totalQuestions + quizSession.questions.length,
      correctAnswers: progress.correctAnswers + correctAnswers,
      timeSpent: progress.timeSpent + timeSpent,
      experience: progress.experience + (correctAnswers * 10),
      level: Math.floor((progress.experience + (correctAnswers * 10)) / 1000) + 1
    };

    onProgressUpdate(newProgress);
    onComplete(newProgress);
  };

  const currentQuestion = quizSession.questions[quizSession.currentQuestionIndex];
  const currentAnswer = quizSession.answers[quizSession.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">
                {specialty === 'vascular' ? 'Vascular Neurology' : 'Neuroendovascular Surgery'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 mr-1" />
                <span className="font-mono font-bold">{formatTime(quizSession.timeRemaining)}</span>
              </div>
              
              <div className="text-sm text-gray-600">
                Question {quizSession.currentQuestionIndex + 1} of {quizSession.questions.length}
              </div>
              
              <button
                onClick={onExit}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                title="Exit Quiz"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((quizSession.currentQuestionIndex + 1) / quizSession.questions.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Question */}
          <div className="mb-8">
            <div className="flex items-start mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                {currentQuestion.difficulty.toUpperCase()}
              </span>
              {currentQuestion.isScenario && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  CLINICAL SCENARIO
                </span>
              )}
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-4 leading-relaxed">
              {currentQuestion.question}
            </h2>
            
            {currentQuestion.hasImage && currentQuestion.imageUrl && (
              <div className="mb-6">
                <img
                  src={currentQuestion.imageUrl}
                  alt="Question figure"
                  className="max-w-full h-auto rounded-lg shadow-sm border"
                />
              </div>
            )}
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={currentAnswer !== null}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  currentAnswer === index
                    ? index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-red-500 bg-red-50 text-red-800'
                    : currentAnswer !== null && index === currentQuestion.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                } ${currentAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center">
                  <span className="font-semibold mr-3 text-gray-600">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Answer Key */}
          {showAnswerKey && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Answer Explanation</h3>
              <p className="text-blue-800 leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePreviousQuestion}
              disabled={quizSession.currentQuestionIndex === 0}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Previous
            </button>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Category: {currentQuestion.category}
              </div>
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={!showAnswerKey && currentAnswer === null}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {quizSession.currentQuestionIndex === quizSession.questions.length - 1 ? 'Complete' : 'Next'}
              <ChevronRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* User Stats Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 w-48">
        <div className="text-center">
          <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-sm text-gray-600 mb-1">Level {progress.level}</div>
          <div className="text-xs text-gray-500 mb-3">
            {progress.experience} XP
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Accuracy:</span>
              <span className="font-semibold">
                {progress.totalQuestions > 0 
                  ? Math.round((progress.correctAnswers / progress.totalQuestions) * 100)
                  : 0}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Questions:</span>
              <span className="font-semibold">{progress.totalQuestions}</span>
            </div>
            <div className="flex justify-between">
              <span>Correct:</span>
              <span className="font-semibold text-green-600">{progress.correctAnswers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;