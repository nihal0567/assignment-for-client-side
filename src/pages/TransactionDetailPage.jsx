
import { Link, useLoaderData } from "react-router";

const TransactionDetailPage = () => {
    const data = useLoaderData()
    const transaction = data.result;

    const { amount, category, date, description, email, name, type, _id } = transaction
    


    return (
        <div className="min-h-screen py-10 bg-gradient-to-l to-indigo-900 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">


                {/* Main Card */}
                <div className="relative group">
                    {/* Glowing Border */}


                    <div className="relative card bg-base-100/90 backdrop-blur-2xl shadow-2xl border border-white/20 rounded-3xl overflow-hidden">
                        <div className="card-body p-8">

                            {/* Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                                        Transaction Details
                                    </h1>

                                </div>

                            </div>

                            {/* 3D Card Preview */}
                            <div className="relative my-10 perspective-1000">
                                <div className="transform-gpu hover:rotate-y-6 hover:-rotate-x-6 transition duration-500">
                                    <div className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-pink-600 rounded-2xl p-8
                   text-white shadow-2xl border border-white/30">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="w-14 h-10 bg-yellow-400 rounded-lg shadow-lg mb-6"></div>
                                                <p className="text-3xl font-bold tracking-wider">{type}</p>
                                                <p className="text-sm opacity-80 mt-2">{amount}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm opacity-80">Date</p>
                                                <p className="text-lg font-semibold">{date}</p>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex justify-between items-end">
                                            <p className="text-lg font-medium truncate max-w-xs">{category}</p>
                                            <span className="text-4xl font-bold opacity-20">BANK</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300">
                                    <p className="text-sm text-base-content/70">Name </p>
                                    <p className="text-lg font-semibold mt-1">{name}</p>
                                </div>

                                <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300">
                                    <p className="text-sm text-base-content/70">Email </p>
                                    <p className="text-lg font-semibold mt-1">{email}</p>
                                </div>

                                <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300">
                                    <p className="text-sm text-base-content/70">Description</p>
                                    <p className="text-lg font-semibold mt-1">{description}</p>
                                    <p className="text-sm text-base-content/60">{ }</p>
                                </div>

                                <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-6 border border-base-300">
                                    <p className="text-sm text-base-content/70">Total Amount of this category</p>
                                    <p className="text-lg font-semibold mt-1">{amount}</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between sm:flex-row gap-4 mt-10">
                                <Link to={`/update-transaction/${_id}`}
                                    className="w-full py-3.5 mt-6 rounded-xl btn-wide text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform 
                                    hover:scale-[1.02] transition-all duration-200"
                                >
                                    Update
                                </Link>
                                <Link 
                                    className="w-full py-3.5 mt-6 rounded-xl btn-wide text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
          .perspective-1000 { perspective: 1000px; }
          .transform-gpu { transform: translateZ(0); }
          .hover\\:rotate-y-6:hover { transform: rotateY(6deg) rotateX(-6deg); }
          .hover\\:-rotate-x-6:hover { transform: rotateY(6deg) rotateX(-6deg); }
          .btn-gradient {
            background: linear-gradient(45deg, #06b6d4, #ec4899);
            border: none;
          }
          .btn-gradient:hover {
            background: linear-gradient(45deg, #0891b2, #db2777);
            box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
          }
        `}</style>
            </div>
        </div>
    );
};

export default TransactionDetailPage;