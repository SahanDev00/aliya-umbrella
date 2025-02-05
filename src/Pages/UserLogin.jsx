import React from 'react'
import Login from '../components/Account/Login'
import SignUp from '../components/Account/SignUp'
import { useState } from 'react'

const UserLogin = () => {

    const [isAlreadyCustomer, setIsAlreadyCustomer] = useState(true);

  return (
    <div className='w-full bg-white pt-28'>
        <h1 className='text-center text-4xl uppercase font-karla pt-4'>Welcome to <span className='text-amber'>Aliya Umbrella</span></h1>
        <h2 className='text-center text-black/80 font-poppins text-sm mt-2'>Please fill the form below to continue shopping</h2>
        <div className='w-[80%] md:w-[90%] xl:w-[80%] lg:grid-cols-2 mx-auto hidden lg:grid'>
            <div className='w-full h-full'>
                <Login onSignUp={() => setIsAlreadyCustomer(false)}/>
            </div>
            <div className='w-full h-full'>
                <SignUp onLogin={() => setIsAlreadyCustomer(true)}/>
            </div>
        </div>
        <div className='w-[80%] grid lg:grid-cols-2 mx-auto lg:hidden '>
            {isAlreadyCustomer ? (
                <div className='w-full h-full'>
                    <Login onSignUp={() => setIsAlreadyCustomer(false)}/>
                </div>
            ) : (
                <div className='w-full h-full'>
                    <SignUp onLogin={() => setIsAlreadyCustomer(true)}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default UserLogin