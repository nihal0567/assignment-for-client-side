import { useEffect, useState } from "react";
import Loading from "./Loading";


const OverviewSection = () => {
  const [data, setData] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  })
  const [loading, setLoading] = useState(true);
  console.log(data)
 
  useEffect(() => {
    fetch("http://localhost:3000/collections-amount")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
        
      })
      
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="px-2.5  py-20 bg-sky-100 rounded-t-full rounded-b-full">
      <div className="text-4xl text-center font-bold text-[#9644d278]">Overview Section</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-2.5  py-20 bg-sky-100  ">
        {/* Total Balance */}
        <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <h2 className="text-lg font-medium opacity-90">Total Balance</h2>
            <p className="text-3xl font-bold mt-2">
              ৳ {
                data.totalBalance
              }
            </p>
            <p className="text-sm opacity-80 mt-1">You have right now</p>
          </div>
        </div>

        {/* Total Income */}
        <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <h2 className="text-lg font-medium opacity-90">Total Income</h2>
            <p className="text-3xl font-bold mt-2">
              ৳ {
                data.totalIncome
              }
            </p>
            <p className="text-sm opacity-80 mt-1">Earned this month</p>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="card bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <h2 className="text-lg font-medium opacity-90">Total Expenses</h2>
            <p className="text-3xl font-bold mt-2">
             ৳ {
              data.totalExpense
             }
            </p>
            <p className="text-sm opacity-80 mt-1">Expenses this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;