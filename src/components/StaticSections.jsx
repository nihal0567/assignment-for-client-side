import React from 'react';

const StaticSections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-300 px-5 py-20 ">
      {/* Budgeting Tips */}
      <div className="card bg-base-100 shadow-lg border border-base-300">
        <div className="card-body">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h2 className="card-title text-2xl">Budgeting Tips</h2>
          </div>
          <ul className="space-y-3 text-base-content/80">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>Follow the 50/30/20 rule – 50% needs, 30% wants, 20% savings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>Write down your daily small expenses, you will save a lot of money in a month.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>Have an emergency fund – at least 3-6 months worth of expenses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>Pay off your credit card bill in full, no interest will be charged.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Financial Planning */}
      <div className="card bg-base-100 shadow-lg border border-base-300">
        <div className="card-body">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-success/10 rounded-xl">
              <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 012-2h8a2 2 0 012 2v6m-6-8V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6m6 8v3m-6-3v3" />
              </svg>
            </div>
            <h2 className="card-title text-2xl">Why is financial planning necessary?</h2>
          </div>
          <p className="text-base-content/80 leading-relaxed">
            Financial planning is not just about saving money, it's a roadmap to achieving your dreams.
            Buying a house, traveling abroad, educating your child, or retiring comfortably – everything is possible when you plan ahead.
            FinEase makes that path easy for you – see everything with one click, and keep control in your hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaticSections;