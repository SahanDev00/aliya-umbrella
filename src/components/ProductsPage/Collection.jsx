import React from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <div className='w-full pt-28 bg-white'>
      <div className='w-[80%] mx-auto h-full pb-10'>
          <p className='text-black font-semibold font-karla flex justify-between'>
            <div>
              <Link to='/products'>
                  <span className='hover:underline cursor-pointer'>Store</span> {' > '}
              </Link> 
              <Link to='/collection'>
                  <span className='hover:underline cursor-pointer'>Collection</span>
              </Link>
            </div>
            <div>
              <Link to='/products'>
                  <span className='hover:underline cursor-pointer'>All Products</span>
              </Link>
            </div>
          </p>

          <div className='w-full h-full md:flex gap-4 md:mt-5'>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
            <Link to='/collection/beach-umbrellas'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
                <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                  <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Beach Umbrellas</h1>
                </div>
            </Link>
            </div>
            <div className='w-full md:w-2/3 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
              <Link to='/collection/classic-umbrellas'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
                <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                  <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Classic Umbrellas</h1>
                </div>
              </Link>
            </div>
            <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
              <Link to='/collection/children-umbrellas'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
                <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                  <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Children Umbrellas</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className='w-full h-full md:flex gap-4 md:mt-5'>
          <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
            <Link to='/collection/artistic-umbrellas'>
              <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
              <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Artistic Umbrellas</h1>
              </div>
            </Link>
          </div>
          <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
            <Link to='/collection/transparent-umbrellas'>
              <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
              <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Transparent Umbrellas</h1>
              </div>
            </Link>
          </div>
          <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
            <Link to='/collection/foldable-umbrellas'>
              <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
              <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Foldable Umbrellas</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className='w-full h-full md:flex gap-4 md:mt-5'>
          <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
            <Link to='/collection/automatic-umbrellas'>
              <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
              <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Automatic Umbrellas</h1>
              </div>
            </Link>
          </div>
          <div className='w-full md:w-2/6 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
            <Link to='/collection/camping-umbrellas'>
              <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
              <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Camping Umbrellas</h1>
              </div>
            </Link>
          </div>
          <div className='w-full md:w-2/3 border mt-3 md:mt-0 h-[150px] lg:h-[200px] relative'>
            <Link to='/collection/custom-made-umbrellas'>
              <img className='w-full h-full object-cover' src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3002,w_4500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_657494968_tpxvmj.jpg" alt="" />
              <div className='w-full h-full absolute inset-0 mx-auto flex items-center justify-center bg-black/40'>
                <h1 className='text-xl font-poppins text-white drop-shadow-lg shadow-black text-center md:text-2xl'>Custom Made Umbrellas</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection