import React from 'react';
import { ArrowLeft, Brain, Zap, Activity } from 'lucide-react';

interface SpecialtySelectionProps {
  onSelect: (specialty: 'vascular' | 'neuroendovascular') => void;
  onBack: () => void;
}

const SpecialtySelection: React.FC<SpecialtySelectionProps> = ({ onSelect, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="mr-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">NeuroBoard Prep</h1>
                <p className="text-xs text-gray-600">Specialty Selection</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Specialty</h2>
            <p className="text-lg text-gray-600">Select the question bank that matches your board exam focus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => onSelect('vascular')}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 cursor-pointer transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vascular Neurology</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive question bank covering stroke management, cerebrovascular disease, 
                  and vascular neurology board exam topics.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex justify-between">
                      <span>Questions:</span>
                      <span className="font-semibold">500+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clinical Scenarios:</span>
                      <span className="font-semibold">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <span className="font-semibold">Expert Level</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Vascular Neurology Questions
                </button>
              </div>
            </div>

            <div
              onClick={() => onSelect('neuroendovascular')}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-200 hover:border-purple-400 cursor-pointer transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Neuroendovascular Surgery</h3>
                <p className="text-gray-600 mb-6">
                  Specialized questions focusing on interventional procedures, angiography, 
                  and neuroendovascular surgery board examination content.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600 space-y-2">
                    <div className="flex justify-between">
                      <span>Questions:</span>
                      <span className="font-semibold">500+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clinical Scenarios:</span>
                      <span className="font-semibold">150+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <span className="font-semibold">Expert Level</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Neuroendovascular Questions
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Both question banks contain the same high-quality content tailored to your specialty focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtySelection;