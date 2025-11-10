import React from 'react';

const OnHover = () => {
  return (
    <div className=" bg-sky-100 flex items-center justify-center rounded-b-full p-5 ">

      <div className="group relative mt-5 bg-purple-600 text-white rounded-3xl shadow-2xl max-w-4xl w-full ">

        <div className="p-10 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold">What do we do.</h2>
        </div>

        <div className="px-5 py-7 transition-all duration-700 ease-out ">
          <p className="text-base md:text-lg leading-relaxed mb-4">
            We offer a comprehensive finance tracking platform to help individuals and businesses manage their finances effectively. Our tools enable users to monitor income, expenses, and investments in real-time, providing a clear and organized financial overview.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-5">
            With advanced budgeting features and personalized financial insights, users can make informed decisions and plan for their future. We prioritize user privacy and data security, ensuring that all financial information is protected. Whether aiming to save, manage debt, or gain better control over finances, our platform supports your financial goals and offers peace of mind.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OnHover;