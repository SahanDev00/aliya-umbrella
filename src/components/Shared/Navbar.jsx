import React, { useState } from 'react'
import logo from '../../assets/bigLogo.png'
import { LuUser } from 'react-icons/lu'
import { IoClose, IoMenu, IoSearch } from 'react-icons/io5'
import { FaWhatsapp } from "react-icons/fa";
import { GrCart } from 'react-icons/gr'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const Navigate = useNavigate()

    const handleSearch = () => {
        if (searchQuery.trim()) {
            Navigate(`/products/${searchQuery.trim()}`);
        }
    };

    const toggleNavbar = () => {
        setNavbar(!navbar);
    };

    const toggleSearchbar = () => {
        setSearch(!search);
    };

    const isActive = (path) => {
        return location.pathname === path;
      };

    // Check if the user is logged in by looking for customerDetails in cookies or sessionStorage
    const isLoggedIn = () => {
        const customerDetails = Cookies.get('customerId') || sessionStorage.getItem('customerId');
        return !!customerDetails;
    };
  
    const handleProfileClick = () => {
        if (isLoggedIn()) {
            Navigate('/account');
        } else {
            Navigate('/sign-up');
        }
    };

  return (
    <div className='w-screen'>
        <div className={`fixed w-[85%] md:w-[90%] lg:w-3/4 xl:w-3/5 bg-white font-overpass lg:bg-third/80 border-black border-2 mt-5 z-50 right-0 left-0 mx-auto rounded-3xl lg:backdrop-blur-md duration-300 shadow-md overflow-hidden ${navbar ? 'h-[400px]' : 'h-[80px]'}`}>
            <div className='w-full h-[80px] flex items-center justify-between'>
                <div className='h-full p-1'>
                    <img className='py-4 sm:p-3 md:p-0 h-full cursor-pointer' src={logo} alt="" /> 
                </div>
                <div className='h-full hidden sm:block'>
                    <ul className='flex h-full items-center gap-5 text-sm md:text-lg uppercase font-medium'>
                        <div className='group'>
                            <Link to='/'>
                                <li className={`cursor-pointer hover:text-amber ${isActive('/') ? 'text-amber' : ''}`}>Home</li>
                                <div className={`w-0 group-hover:w-full h-[2px] duration-300 group-hover:bg-fourth ${isActive('/') ? 'w-full bg-amber' : 'bg-black '}`}/>
                            </Link>
                        </div>
                        <div className='group'>
                            <Link to='/products'>
                                <li className={`cursor-pointer hover:text-amber ${isActive('/products') || isActive('/collection') ? 'text-amber' : ''}`}>Store</li>
                                <div className={`w-0 group-hover:w-full h-[2px] duration-300 group-hover:bg-fourth ${isActive('/products') || isActive('/collection') ? 'w-full bg-amber' : 'bg-black '}`}/>
                            </Link>
                        </div>
                        <div className='group'>
                            <Link to='/about'>
                                <li className={`cursor-pointer hover:text-amber ${isActive('/about') ? 'text-amber' : ''}`}>About</li>
                                <div className={`w-0 group-hover:w-full h-[2px] duration-300 group-hover:bg-fourth ${isActive('/about') ? 'w-full bg-amber' : 'bg-black '}`}/>
                            </Link>
                        </div>
                        <div className='group'>
                            <Link to='/contact'>
                                <li className={`cursor-pointer hover:text-amber ${isActive('/contact') ? 'text-amber' : ''}`}>Contact</li>
                                <div className={`w-0 group-hover:w-full h-[2px] duration-300 group-hover:bg-fourth ${isActive('/contact') ? 'w-full bg-amber' : 'bg-black '}`}/>
                            </Link>
                        </div>
                    </ul>
                </div>

                {/* icons */}
                <div className='flex gap-3 pr-4 text-black'>
                    <IoSearch onClick={toggleSearchbar} className={`size-5 md:size-6 duration-300 hover:text-fourth cursor-pointer ${search ? 'text-amber' : ''}`}/>
                    <LuUser onClick={handleProfileClick} className={`size-5 md:size-6 duration-300 hover:text-fourth cursor-pointer ${isActive('/account') ? 'text-amber' : ''}`}/>
                    <Link to='/cart'>
                        <GrCart className={`size-5 md:size-6 duration-300 hover:text-fourth cursor-pointer ${isActive('/cart') ? 'text-amber' : ''}`}/>
                    </Link>
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
                        <Link to='/'>
                            <li className={`cursor-pointer hover:text-amber ${isActive('/') ? 'text-amber' : ''}`}>Home</li>
                            <div className={`w-0 group-hover:w-[100px] mx-auto h-[2px] duration-300 group-hover:bg-fourth ${isActive('/') ? 'w-full bg-amber' : 'bg-black '}`}/>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link to='/products'>
                            <li className={`cursor-pointer hover:text-amber ${isActive('/products') || isActive('/collection') ? 'text-amber' : ''}`}>Store</li>
                            <div className={`w-0 group-hover:w-[100px] mx-auto h-[2px] duration-300 group-hover:bg-fourth ${isActive('/products') || isActive('/collection') ? 'w-full bg-amber' : 'bg-black '}`}/>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link to='/about'>
                            <li className={`cursor-pointer hover:text-amber ${isActive('/about') ? 'text-amber' : ''}`}>About</li>
                            <div className={`w-0 group-hover:w-[100px] mx-auto h-[2px] duration-300 group-hover:bg-fourth ${isActive('/about') ? 'w-full bg-amber' : 'bg-black '}`}/>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link to='/contact'>
                            <li className={`cursor-pointer hover:text-amber ${isActive('/contact') ? 'text-amber' : ''}`}>Contact</li>
                            <div className={`w-0 group-hover:w-[100px] mx-auto h-[2px] duration-300 group-hover:bg-fourth ${isActive('/contact') ? 'w-full bg-amber' : 'bg-black '}`}/>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>

        <div className='fixed border border-green bg-third w-[50px] h-[50px] p-1 cursor-pointer flex items-center justify-center rounded-full bottom-3 right-3 z-50 text-green'>
            <a href="https://wa.me/94771222666">
                <FaWhatsapp className='size-7 text-green'/>
            </a>
        </div>

        {/* Search Bar */}
        {search && (
            <div className='fixed z-50 flex items-center bg-white/40 w-[85%] md:w-[90%] lg:w-3/4 xl:w-3/5 h-[50px] rounded-2xl shadow-md mx-auto right-0 left-0 mt-28 translate-y-4 transform float-up'>
                <input
                    type="text"
                    placeholder='Search an item...'
                    className='w-[80%] md:w-[90%] h-full rounded-l-2xl pl-4 border-r-0 border-2 bg-white/60 text-black'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Handle Enter key press
                />
                <button
                    className='border-2 h-full w-[20%] md:w-[10%] rounded-r-2xl bg-third/60 hover:bg-amber duration-200 hover:text-white hover:border-black'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        )}
    </div>
  )
}

export default Navbar
