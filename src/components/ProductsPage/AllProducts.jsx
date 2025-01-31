import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/item3.png'

const AllProducts = () => {

    const [isGridFive, setIsGridFive] = useState(true);

    const items = [
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
        {
            id: 1,
            name: 'Item Sample Name 1',
            price: 1200,
            desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus earum tenetur magni repellat animi ab accusantium architecto soluta ex,lectus similique!',
            image: image
        },
    ]

  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='w-[80%] mx-auto pt-28'>
            <div className='flex justify-between w-full items-center'>
                <p className='text-black font-semibold font-karla'>
                    <Link to='/collection'>
                        <span className='hover:underline cursor-pointer'>Store</span> {' > '}
                    </Link> 
                    <Link to='/products'>
                        <span className='hover:underline cursor-pointer'>All Products</span>
                    </Link>
                </p>
                <div className='lg:flex gap-3 hidden'>
                    <div className='flex gap-1 cursor-pointer' onClick={() => setIsGridFive(false)}>
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black/50' : 'bg-black'}`} />
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black/50' : 'bg-black'}`} />
                    </div>
                    <div className='flex gap-1 cursor-pointer' onClick={() => setIsGridFive(true)}>
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black' : 'bg-black/50'}`} />
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black' : 'bg-black/50'}`} />
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black' : 'bg-black/50'}`} />
                    </div>
                </div>
            </div>
            
            {/* all items */}
            <div className={`w-full grid gap-4 mt-10 duration-200 pb-10 sm:grid-cols-2 md:grid-cols-3 ${isGridFive ? ' lg:grid-cols-4 xl:grid-cols-5' : 'lg:grid-cols-3 xl:grid-cols-4'}`}>
                {items.map((item) => (
                    <div key={item.id} className={`w-full p-2 flex flex-col items-center shadow-md md:shadow-none hover:shadow-xl duration-200 ${isGridFive ? 'h-[320px]' : 'h-[400px]'}`}>
                        <img src={item.image} className={`w-[90%] mx-auto object-contain duration-200 ${isGridFive ? 'h-[200px]' : 'h-[260px]'}`} alt="" />
                        <h1 className='text-center py-2 font-semibold font-poppins'>{item.name}</h1>
                        <p className='text-center pb-2 font-roboto'>Rs. {item.price}</p>
                        <button className='border border-fourth hover:bg-fourth w-[100px] mx-auto text-amber hover:text-white font-karla'>View</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllProducts