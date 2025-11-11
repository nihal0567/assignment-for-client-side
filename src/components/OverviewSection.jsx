const OverviewSection = ({ totalBalance, totalIncome, totalExpenses }) => {
  return (
    <div className="px-2.5  py-20 bg-sky-100 rounded-t-full rounded-b-full">
      <div className="text-4xl text-center font-bold text-[#9644d278]">Overview Section</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-2.5  py-20 bg-sky-100  ">
      {/* Total Balance */}
      <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-shadow">
        <div className="card-body text-center">
          <h2 className="text-lg font-medium opacity-90">মোট ব্যালেন্স</h2>
          <p className="text-3xl font-bold mt-2">
            ৳ {totalBalance?.toLocaleString('bn-BD') || '0'}
          </p>
          <p className="text-sm opacity-80 mt-1">এখন পর্যন্ত তোমার কাছে আছে</p>
        </div>
      </div>

      {/* Total Income */}
      <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl hover:shadow-2xl transition-shadow">
        <div className="card-body text-center">
          <h2 className="text-lg font-medium opacity-90">মোট আয়</h2>
          <p className="text-3xl font-bold mt-2">
            ৳ {totalIncome?.toLocaleString('bn-BD') || '0'}
          </p>
          <p className="text-sm opacity-80 mt-1">এই মাসে আয় হয়েছে</p>
        </div>
      </div>

      {/* Total Expenses */}
      <div className="card bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl hover:shadow-2xl transition-shadow">
        <div className="card-body text-center">
          <h2 className="text-lg font-medium opacity-90">মোট খরচ</h2>
          <p className="text-3xl font-bold mt-2">
            ৳ {totalExpenses?.toLocaleString('bn-BD') || '0'}
          </p>
          <p className="text-sm opacity-80 mt-1">এই মাসে খরচ হয়েছে</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OverviewSection;