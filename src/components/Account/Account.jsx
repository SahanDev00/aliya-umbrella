import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import Cookies from 'js-cookie';

const Account = () => {

  const [users, setUsers] = useState([]);

  const customerID = sessionStorage.getItem('customerId') || Cookies.get('customerId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const result = await axios.get(`https://adminaliyaumbrella.worldpos.biz/api/Customer/${customerID}`, {
          headers: {
            'APIKey': apiKey
          }
        })

        setUsers(result.data.data);
        console.log(result)

      } catch (err) {
          console.log(err)
      }
    }

    fetchData();
  }, [customerID])
  

  return (
    <div className='w-full min-h-[90vh] pt-28 bg-white'>
      <div className='w-[80%] mx-auto pt-5'>
          <div key={users.customerID} className='w-full mt-5'> 
              <h1 className='py-2 text-2xl uppercase font-roboto'>{users.firstName}'s account</h1>
              <div className='bg-third p-5 md:w-[400px] shadow font-karla mb-5 relative'>
                <FaRegEdit className='absolute right-2 top-2 cursor-pointer' />
                <p className='text-lg uppercase pb-2 font-poppins'>{users.firstName}'s Information</p>
                <p className='pl-3'><span className='font-medium'>Name:</span> Mr. {users.customerDisplay}</p>
                <p className='pl-3'><span className='font-medium'>Email:</span> {users.loginEmail}</p>
                <p className='pl-3'><span className='font-medium'>Mobile Number:</span> {users.telephoneMobile}</p>
                <p className='pl-3'><span className='font-medium'>Password:</span> **********</p>
              </div>
              <div className='bg-third p-5 md:w-[500px] shadow font-karla mb-5 relative'>
                <FaRegEdit className='absolute right-2 top-2 cursor-pointer' />
                <p className='text-lg uppercase pb-2 font-poppins'>Shipping Information</p>
                <p className='pl-3'><span className='font-medium'>Address Line 1:</span> {users.addressLine1}</p>
                <p className='pl-3'><span className='font-medium'>Address Line 2:</span> {users.addressLine2}</p>
                <p className='pl-3'><span className='font-medium'>City:</span> {users.city}</p>
                <p className='pl-3'><span className='font-medium'>Country:</span> {users.country}</p>
              </div>
            </div>
          <button className='px-5 py-2 border hover:border-amber hover:bg-third duration-100 mb-10 md:mb-0'>My Orders</button>
      </div>
    </div>
  )
}

export default Account