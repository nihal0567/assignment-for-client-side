import { Bar, Pie } from "recharts";


const ReportPage = () => {

    const categoryData = {
        labels: ["Rent", "Food", "Utilities", "Entertainment", "Transport", "Other"],
        datasets: [
            {
                label: "Spending by Category",
                data: [96000, 15000, 9000, 7000, 5000, 4000], 
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#8BC34A",
                    "#FF9800",
                    "#9C27B0",
                ],
            },
        ],
    };

    const monthlyData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "Monthly Spending",
                data: [],
                backgroundColor: "#36A2EB",
            },
        ],
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">💰 Financial Summary Dashboard</h1>

            <div className="bg-white shadow-xl rounded-2xl p-6 mb-10 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-center">Spending by Category</h2>
                <Pie data={categoryData} />
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl">
                <h2 className="text-xl font-semibold mb-4 text-center">Monthly Spending Totals</h2>
                <Bar data={monthlyData} />
            </div>
        </div>
    );
}

export default ReportPage;