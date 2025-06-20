import React from 'react';
import { Brain, Award, Clock, Shield, ArrowRight, Check, Star, Users, BookOpen, Trophy } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NeuroBoard Prep</h1>
                <p className="text-sm text-gray-600">Vascular Neurology and Neuroendovascular Surgery</p>
              </div>
            </div>
            <button
              onClick={onGetStarted}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Member Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Master Your Board Exams with
            <span className="text-blue-600 block">Expert-Level Questions</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive question bank designed specifically for vascular neurology and neuroendovascular surgery 
            board preparation. Over 500 challenging MCQs with detailed explanations.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Start Your Preparation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NeuroBoard Prep?</h3>
            <p className="text-lg text-gray-600">Advanced features designed for serious medical professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">500+ Expert Questions</h4>
              <p className="text-gray-600">Carefully curated MCQs covering all essential topics</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Timed Practice</h4>
              <p className="text-gray-600">3-minute timer per question to simulate exam conditions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Achievement System</h4>
              <p className="text-gray-600">Track progress with gamified learning milestones</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure Platform</h4>
              <p className="text-gray-600">Screenshot prevention and content protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h3>
            <p className="text-lg text-gray-600">Flexible pricing options to fit your preparation timeline</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Cramming Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Cramming</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">$199</div>
                <p className="text-gray-600 mb-6">1 Month Access</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    500+ Practice Questions
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Detailed Answer Explanations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Achievement System
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Progress Tracking
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Standard</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">$299</div>
                <p className="text-gray-600 mb-6">2 Months Access</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    500+ Practice Questions
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Detailed Answer Explanations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Achievement System
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Progress Tracking
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Extended Practice Time
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Premium</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">$399</div>
                <p className="text-gray-600 mb-6">4 Months Access</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    500+ Practice Questions
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Detailed Answer Explanations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Achievement System
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Progress Tracking
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Maximum Practice Time
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Best Value
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h3>
            <p className="text-lg text-gray-600">Trusted by medical professionals nationwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The questions were incredibly challenging and really prepared me for the actual board exam. 
                The explanations helped me understand concepts I was struggling with."
              </p>
              <p className="font-semibold text-gray-900">Board-Certified Vascular Neurologist</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The achievement system kept me motivated throughout my preparation. The clinical scenarios 
                were particularly valuable for understanding real-world applications."
              </p>
              <p className="font-semibold text-gray-900">Neuroendovascular Fellow</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent question bank with high-quality content. The timer feature helped me practice 
                time management, which was crucial for the exam."
              </p>
              <p className="font-semibold text-gray-900">Neurology Resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Can I switch plans later?</h4>
              <p className="text-gray-600">Yes, if you decide to extend your plan, just email our support team and we can add more time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Is there a money-back guarantee?</h4>
              <p className="text-gray-600">We offer a 7-day money-back guarantee for all our plans. If you're not satisfied, we'll provide a full refund.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Do you offer discounts?</h4>
              <p className="text-gray-600">Yes, we offer special discounts for residents and fellows. You will need to send an email from your program director or coordinator verifying your status. Contact our sales team for custom pricing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Can I save questions for reviewing at a later time?</h4>
              <p className="text-gray-600">No. We do not allow screenshot or copying of the questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Brain className="h-8 w-8 text-blue-400 mr-3" />
            <div>
              <h1 className="text-xl font-bold">NeuroBoard Prep</h1>
              <p className="text-sm text-gray-400">Vascular Neurology and Neuroendovascular Surgery</p>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 NeuroBoard Prep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;