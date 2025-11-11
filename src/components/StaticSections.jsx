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
            <h2 className="card-title text-2xl">বাজেটিং টিপস</h2>
          </div>
          <ul className="space-y-3 text-base-content/80">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>৫০/৩০/২০ নিয়ম মেনে চলো – ৫০% চাহিদা, ৩০% ইচ্ছা, ২০% সঞ্চয়</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>প্রতিদিনের ছোট খরচ লিখে রাখো, এক মাসে অনেক টাকা বাঁচবে</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>জরুরি তহবিল রাখো – কমপক্ষে ৩-৬ মাসের খরচের সমান</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span>ক্রেডিট কার্ডের বিল পুরোটা শোধ করো, সুদ দিতে হবে না</span>
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
            <h2 className="card-title text-2xl">কেন আর্থিক পরিকল্পনা দরকার?</h2>
          </div>
          <p className="text-base-content/80 leading-relaxed">
            আর্থিক পরিকল্পনা মানে শুধু টাকা বাঁচানো নয়, এটা তোমার স্বপ্ন পূরণের রোডম্যাপ। 
            বাড়ি কেনা, বিদেশ ভ্রমণ, সন্তানের পড়াশোনা কিংবা আরামে অবসর – সবকিছুই সম্ভব যখন তুমি আগে থেকে পরিকল্পনা করো। 
            FinEase তোমাকে সেই পথটা সহজ করে দিচ্ছে – এক ক্লিকে সব দেখতে পাও, আর নিয়ন্ত্রণ থাকে তোমার হাতে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaticSections;