import React from 'react';
import { CheckCircle } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="glass rounded-2xl p-12 max-w-lg w-full">
        <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Проект успешно запущен</h1>
        <p className="text-gray-400 text-lg">
          AI Competitor Parser работает корректно.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
