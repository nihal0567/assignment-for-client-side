import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const UpdateTransactionPage = () => {
  const dataCollection = useLoaderData()
  const data = dataCollection.result
  
  const { user } = use(AuthContext)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  //   const [existingValue, setExistingValue] = useState("")


  useEffect(() => {
    if (user) {
      setEmail(user.email || "")
      setName(user.displayName || "")
    }
  }, [user])

  const updateTransaction = (e) => {
    e.preventDefault()

    const formData = {
      situation: e.target.situation.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
      description: e.target.description.value,
      date: new Date(),
      email: e.target.email.value,
      name: e.target.name.value
    }
    console.log({ formData });

    fetch(`http://localhost:3000/collections/${data._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast('Update Successfully')

      })
      .catch(err => {
        console.log(err);
      })

  }



  return (
    <div className="my-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="card bg-base-100 shadow-2xl rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 text-center">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Update Transaction
            </h1>
            <p className="mt-2 opacity-90">Track your income and expenses effortlessly</p>
          </div>

          {/* Form Body */}
          <div className="card-body p-8 lg:p-10">
            <form onSubmit={updateTransaction} className="space-y-7">
              {/* Type Selection */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    <i className="fas fa-tag mr-2"></i> Type
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center justify-center p-6 bg-green-50 border-2 border-green-200 
                    rounded-2xl cursor-pointer hover:bg-green-100 transition-all has-[:checked]:bg-green-500
                     has-[:checked]:border-green-600 has-[:checked]:text-white">
                    <input type="radio" name="situation" defaultChecked={data.situation=== "Income"} className="hidden" />
                    <div className="text-center">
                      <div className="text-4xl mb-2">Down Arrow</div>
                      <span className="block font-medium text-lg">Income</span>
                    </div>
                  </label>

                  <label className="flex items-center justify-center p-6 bg-red-50 border-2 border-red-200 rounded-2xl cursor-pointer hover:bg-red-100 transition-all has-[:checked]:bg-red-500 has-[:checked]:border-red-600 has-[:checked]:text-white">
                    <input type="radio" name="situation" defaultChecked={data.situation=== "Expense"} className="hidden" />
                    <div className="text-center">
                      <div className="text-4xl mb-2">Up Arrow</div>
                      <span className="block font-medium text-lg">Expense</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    <i className="fas fa-list-ul mr-2"></i> Category
                  </span>
                </label>
                <select defaultValue={data?.category || ""} name='category' className="select select-bordered w-full rounded-2xl h-14 text-base font-medium focus:border-indigo-500 focus:outline-none ">
                  <option disabled value="" >Select a category</option>
                  <option value="Salary">Salary</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Investment">Investment</option>
                  <option value="Food & Dining">Food & Dining</option>
                  <option value="Transport">Transport</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Bills & Utilities">Bills & Utilities</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    <i className="fas fa-dollar-sign mr-2"></i> Amount
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="00"
                  defaultValue={data.amount}
                  name='amount'
                  step="01"
                  min="0"
                  className="input input-bordered w-full rounded-2xl h-14 text-lg font-semibold text-indigo-700 focus:border-indigo-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-gray-700">
                    <i className="fas fa-pen mr-2"></i> Description (Optional)
                  </span>
                </label>
                <textarea
                  placeholder="Add a note..."
                  defaultValue={data.description}
                  name='description'
                  rows={3}
                  className="textarea textarea-bordered w-full rounded-2xl resize-none focus:border-indigo-500"
                />
              </div>



              {/* User Info - Read Only */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-2 border-gray-200">
                <div>
                  <label className="label">
                    <span className="label-text text-gray-500 font-medium">Email</span>
                  </label>
                  <input
                    name='email'
                    value={email}
                    type="email"
                    readOnly
                    className="input input-bordered w-full rounded-2xl bg-gray-100 cursor-not-allowed text-gray-600"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-gray-500 font-medium">Name</span>
                  </label>
                  <input
                    name='name'
                    value={name}
                    type="text"
                    readOnly
                    className="input input-bordered w-full rounded-2xl bg-gray-100 cursor-not-allowed text-gray-600"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type='submit'

                  className="btn btn-primary w-full h-14 text-lg font-bold rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTransactionPage;