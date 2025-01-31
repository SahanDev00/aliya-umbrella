import React, { useState } from 'react'
import logo from '../../assets/bigLogo.png'
import { LuUser } from 'react-icons/lu'
import { IoClose, IoMenu, IoSearch } from 'react-icons/io5'
import { GrCart } from 'react-icons/gr'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [search, setSearch] = useState(false);

    const toggleNavbar = () => {
        setNavbar(!navbar);
    };

    const toggleSearchbar = () => {
        setSearch(!search);
    };

  return (
    <div className='w-screen'>
        <div className={`fixed w-[85%] md:w-[90%] lg:w-3/4 xl:w-3/5 bg-white md:bg-third/80 border-black border-2 mt-5 z-50 right-0 left-0 mx-auto rounded-3xl md:backdrop-blur-md duration-300 shadow-md overflow-hidden ${navbar ? 'h-[400px]' : 'h-[80px]'}`}>
            <div className='w-full h-[80px] flex items-center justify-between'>
                <div className='h-full p-1'>
                    <img className='py-4 sm:p-3 md:p-0 h-full cursor-pointer' src={logo} alt="" /> 
                </div>
                <div className='h-full hidden sm:block'>
                    <ul className='flex h-full items-center gap-5 text-sm md:text-lg uppercase font-medium'>
                        <div className='group'>
                            <li className='cursor-pointer hover:text-amber'>Home</li>
                            <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                        </div>
                        <div className='group'>
                            <li className='cursor-pointer hover:text-amber'>Store</li>
                            <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                        </div>
                        <div className='group'>
                            <li className='cursor-pointer hover:text-amber'>About</li>
                            <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                        </div>
                        <div className='group'>
                            <li className='cursor-pointer hover:text-amber'>Contact</li>
                            <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                        </div>
                    </ul>
                </div>

                {/* icons */}
                <div className='flex gap-3 pr-4 text-black'>
                    <IoSearch onClick={toggleSearchbar} className='size-5 md:size-6 duration-300 hover:text-fourth cursor-pointer'/>
                    <LuUser  className='size-5 md:size-6 duration-300 hover:text-fourth cursor-pointer'/>
                    <GrCart className='size-5 md:size-6 duration-300 hover:text-fourth cursor-pointer'/>
                        {navbar ? 
                            <IoClose onClick={toggleNavbar} className='size-6 sm:hidden duration-300 hover:text-fourth cursor-pointer' />
                                :
                            <IoMenu onClick={toggleNavbar} className='size-6 sm:hidden duration-300 hover:text-fourth cursor-pointer' />
                        }
                </div>
            </div>

            <div className='sm:hidden w-full h-full mt-10'>
                <ul className='h-full w-full space-y-5 text-lg uppercase font-medium inset-0 text-center'>
                    <div className='group'>
                        <li className='cursor-pointer hover:text-amber'>Home</li>
                        <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                    </div>
                    <div className='group'>
                        <li className='cursor-pointer hover:text-amber'>Store</li>
                        <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                    </div>
                    <div className='group'>
                        <li className='cursor-pointer hover:text-amber'>About</li>
                        <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                    </div>
                    <div className='group'>
                        <li className='cursor-pointer hover:text-amber'>Contact</li>
                        <div className='w-0 group-hover:w-full h-[2px] bg-black duration-300 group-hover:bg-fourth'/>
                    </div>
                </ul>
            </div>
        </div>

        {/* searchbar */}
        {search && (
            <div className='fixed z-50 flex items-center bg-white/40 backdrop-blur-md w-[95%] md:w-[90%] h-[50px] rounded-2xl lg:w-3/4 xl:w-3/5 shadow-md mx-auto right-0 left-0 top-[12%] translate-y-4 transform float-up'>
                <input type="text" placeholder='Search an item...' className='w-[90%] h-full rounded-l-2xl pl-4 border-r-0 border-2 bg-white/60 text-black' />
                <button className='border-2 h-full w-[10%] rounded-r-2xl bg-third/60 hover:bg-amber duration-200 hover:text-white hover:border-black'>Search</button>
            </div>
        )}
    </div>
  )
}

export default Navbar
