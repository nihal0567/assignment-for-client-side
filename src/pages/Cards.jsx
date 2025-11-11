
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import NoTransactions from './NoTransactions';
import Loading from '../components/Loading';

const Cards = ({ card, data, setData, }) => {
   
    const { amount, category, date, description, email, name, situation, _id } = card
    console.log( _id );

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/collections/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        if (data.deletedCount) {
                            const remaining = data.filter(user=> user._id !== _id)
                            toast("deleted successfully")
                            setData(remaining)
                        }

                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });
    }

    if (data === undefined || data === null) {
        return <Loading />
    }

    return (
        <div className="relative group w-full max-w-sm mx-auto">
            {/* Glowing Border + Hover Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl
             blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative card bg-base-100 shadow-2xl border border-base-300 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/50">
                {/* Badge */}

                <div className="absolute top-4 right-4  z-10">
                    <div className="badge badge-lg py-5 badge-primary font-bold animate-pulse">{situation}</div>
                </div>

                <figure className="p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20">
                    <div className="avatar">
                        <div className="w-full ">
                            <div className="badge badge-lg text-center badge-primary font-bold animate-pulse">{category}</div>
                        </div>
                    </div>
                </figure>

                <div className="card-body p-6 text-center">
                    <h2 className="card-title text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                        {amount}
                    </h2>
                    <p className="text-base-content/70 line-clamp-1 mt-2">{description}</p>
                    <p className="text-base-content/70 line-clamp-1 mt-2">{date}</p>
                    <h4 className="text-base-content/70 line-clamp-1 mt-2">{email}</h4>
                    <h3 className="text-base-content/70 line-clamp-1 mt-2">{name}</h3>

                    {/* Action Buttons */}
                    <div className="flex justify-between sm:flex-row gap-4 mt-10">
                        <Link to={`/update-transaction/${_id}`}
                            className="w-full py-3.5 mt-6 rounded-xl btn-wide text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform 
                                    hover:scale-[1.02] transition-all duration-200"
                        >
                            Update
                        </Link>
                        <button onClick={handleDelete}
                            className="w-full py-3.5 mt-6 cursor-pointer rounded-xl btn-wide text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                        >
                            Delete
                        </button>
                    </div>

                    <div className="card-actions justify-center mt-8">
                        <Link to={`/transaction-detail-page/${_id}`} className="btn btn-wide btn-gradient btn-lg shadow-lg hover:shadow-cyan-500/50">
                            View Details Page
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Custom Gradient Button Style */}
            <style jsx>{`
        .btn-gradient {
          background: linear-gradient(45deg, #06b6d4, #ec4899);
          border: none;
          color: white;
        }
        .btn-gradient:hover {
          background: linear-gradient(45deg, #0891b2, #db2777);
        }
      `}</style>
        </div>
    );
};

export default Cards;