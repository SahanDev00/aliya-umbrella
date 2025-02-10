import React from 'react'

const Login = ({onSignUp}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
        <div className="bg-third/60 w-full max-w-md p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-black mb-4 font-roboto">
            For Existing Customers
            </h2>

            <form className="space-y-4">
            {/* Email Input */}
            <div>
                <label className="block text-black font-karla">Email</label>
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fourth"
                />
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

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2 text-black font-karla">
                <input type="checkbox" className="accent-fourth" />
                <span>Remember Me</span>
                </label>
                <p className="text-amber hover:underline">
                Forgot Password?
                </p>
            </div>
            {/* Login Button */}
            <button className="w-full bg-fourth text-white py-2 rounded-md hover:bg-amber font-semibold">
                Login
            </button>
            </form>
        </div>
        <p className='text-sm text-center font-semibold mt-5 font-poppins lg:hidden'>havent signed up yet? <span className='underline cursor-pointer text-amber' onClick={onSignUp}>Sign Up</span></p>
    </div>
  )
}

export default Login
