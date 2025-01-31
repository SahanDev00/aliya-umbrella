import React from 'react'
import item from '../../assets/item.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import item4 from '../../assets/item4.png'
import item5 from '../../assets/item5.png'
import item6 from '../../assets/item6.png'
import item7 from '../../assets/item7.png'

const SampleItems = () => {

  const items = [
    {
      id: 1,
      name: 'Sample item 1',
      pic: item,
      price: 200,
    },
    {
      id: 2,
      name: 'Sample item 2',
      pic: item2,
      price: 800,
    },
    {
      id: 3,
      name: 'Sample item 3',
      pic: item3,
      price: 600,
    },
    {
      id: 4,
      name: 'Sample item 4',
      pic: item4,
      price: 900,
    },
    {
      id: 5,
      name: 'Sample item 5',
      pic: item5,
      price: 2700,
    },
    {
      id: 6,
      name: 'Sample item 6',
      pic: item6,
      price: 2200,
    },
    {
      id: 7,
      name: 'Sample item 7',
      pic: item7,
      price: 1200,
    },
    {
      id: 8,
      name: 'Sample item 8',
      pic: item3,
      price: 1200,
    },
  ]

  return (
    <div className='bg-white w-full h-full pt-16 flex flex-col justify-center pb-10'>
      <div className='w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] mx-auto'>
          <h1 className='text-center text-4xl uppercase font-thin'>Take a look at our products</h1>
          <div className='w-[90px] h-[1px] mx-auto bg-black mt-2'/>
          <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto mt-16 gap-2'>
            {items.map((item, id) => (
              <div className='w-full h-[330px] hover:shadow-xl cursor-pointer flex flex-col p-1'>
                  <img src={item.pic} className='w-[200px] h-[200px] object-contain mx-auto' alt="" />
                  <h1 className='text-center py-2 font-semibold'>{item.name}</h1>
                  <p className='text-center pb-2'>Rs. {item.price}</p>
                  <button className='border border-fourth hover:bg-fourth w-[100px] mx-auto text-amber hover:text-white'>View</button>
              </div>
            ))}
          </div>
      </div>
      <button className='border border-fourth hover:bg-fourth w-[130px] mx-auto text-amber hover:text-white mt-5 px-3 py-2 hover:rounded-full duration-200'>View More</button>
    </div>
  )
}

export default SampleItems