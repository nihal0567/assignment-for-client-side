import { FaFaceSmile } from "react-icons/fa6";

export default function NoTransactions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fadeIn">
         
        <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center animate-bounce">
          <FaFaceSmile className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>

        {/* টাইটেল */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
          No Transactions Yet
        </h2>

        {/* ডেসক্রিপশন */}
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed px-4">
          You haven't added any transactions yet. Start adding 
          <span className="font-medium text-green-600 dark:text-green-400"> your income </span> 
          or 
          <span className="font-medium text-red-600 dark:text-red-400"> expenses </span> 
          to track your finances better!
        </p>

        {/* CTA বাটন */}
        <button className="
          group inline-flex items-center gap-2 px-6 py-3 
          bg-gradient-to-r from-green-500 to-emerald-600 
          hover:from-green-600 hover:to-emerald-700 
          text-white font-semibold text-sm md:text-base 
          rounded-full shadow-lg 
          transform transition-all duration-300 
          hover:scale-105 hover:shadow-xl 
          focus:outline-none focus:ring-4 focus:ring-green-300
          dark:focus:ring-green-800
        ">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          Add Your First Transaction
        </button>

        <div className="flex justify-center gap-1 mt-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-green-400 dark:bg-green-600 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}