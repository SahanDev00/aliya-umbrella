import React from 'react'
import item from '../../assets/item.png'

const SampleItems = () => {
  return (
    <div className='bg-white w-full h-full pt-16'>
        <div className='w-[60%] h-[600px] mx-auto'>
            <h1 className='text-center text-4xl uppercase font-thin'>Take a look at our products</h1>
            <div className='w-[90px] h-[1px] mx-auto bg-black mt-2'/>
            <div className='w-full h-full grid grid-cols-4 mx-auto mt-6'>
                <div className='w-full h-[350px] border flex flex-col p-1'>
                    <img src={item} className='w-full object-contain' alt="" />
                    <h1>Sample Item Name</h1>
                    <p>Rs. 200</p>
                    <button className='border border-fourth hover:bg-fourth w-[100px]'>View</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SampleItems