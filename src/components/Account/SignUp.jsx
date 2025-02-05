import React from 'react'

const SignUp = ({onLogin}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="bg-white w-full p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black mb-4 font-roboto">
          For New Customers
        </h2>

        <form className="space-y-4">
          {/* Salutation Input */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-black font-karla">Salutation</label>
              <input
                type="text"
                placeholder="Mr./Mrs./Ms."
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>
            {/* First Name Input */}
            <div>
              <label className="block text-black font-karla">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Last Name Input */}
            <div>
              <label className="block text-black font-karla">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-black font-karla">Email</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Address Line 1 */}
            <div>
              <label className="block text-black font-karla">Address Line 1</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>

            {/* Address Line 2 */}
            <div>
              <label className="block text-black font-karla">Address Line 2</label>
              <input
                type="text"
                placeholder="Enter your address (Optional)"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* City Input */}
            <div>
              <label className="block text-black font-karla">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>

            {/* Telephone Mobile Input */}
            <div>
              <label className="block text-black font-karla">Mobile Number</label>
              <input
                type="tel"
                placeholder="+94712345678"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-black font-karla">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-black font-karla">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
            />
          </div>

          {/* SignUp Button */}
          <button className="w-full bg-fourth text-white py-2 rounded-md hover:bg-amber font-semibold">
            Sign Up
          </button>
        </form>
      </div>
      <p className='text-sm text-center font-semibold mt-5 font-poppins lg:hidden'>already a customer? <span className='underline cursor-pointer text-amber' onClick={onLogin}>Login</span></p>
    </div>
  )
}

export default SignUp
