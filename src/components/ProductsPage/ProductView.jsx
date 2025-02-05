import React from 'react'
import { IoIosClose } from 'react-icons/io'

const ProductView = ({ product, onClose }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4'>
      <div className='w-full max-w-4xl bg-third rounded-lg shadow-lg relative overflow-hidden md:py-10'>
        {/* Close Button */}
        <IoIosClose 
          className='absolute right-2 md:right-4 top-2 md:top-4 size-10 cursor-pointer text-black hover:text-gray-700 transition' 
          onClick={onClose} 
        />

        <h1 className='text-3xl text-center font-overpass font-bold sm:text-4xl hidden md:block'>Product Description</h1>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:py-16 pt-10'>
          {/* Image */}
          <div className='flex items-center justify-center'>
            <img src={product.image} className='w-full max-w-[200px] md:max-w-[300px] object-contain' alt={product.name} />
          </div>

          {/* Details */}
          <div className='flex flex-col items-center justify-center text-center space-y-4'>
            <h1 className='text-2xl font-poppins sm:text-3xl'>{product.name}</h1>
            <p className='text-black/80 w-[90%] mx-auto font-poppins text-sm sm:text-base'>{product.description}</p>
            <p className='text-lg text-amber font-roboto sm:text-xl'>Rs. {product.price}</p>
            <button className='px-4 py-2 bg-amber/80 hover:bg-amber text-white rounded-md transition'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView
