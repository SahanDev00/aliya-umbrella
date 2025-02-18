import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full relative py-10 font-overpass bg-third'>
      <div className='w-[90%] 2lg:w-[95%] 3lg:w-[90%] mx-auto flex flex-col md:flex-row justify-between px-6'>
        {/* About Us Section */}
        <div className='mb-8 md:mb-0 w-full md:w-[50%]'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>About Us</h2>
          <p className='text-black/80 md:w-[70%] font-poppins text-sm'>
          Welcome to Aliya Umbrella, where innovation meets sustainability. We are a newly opened umbrella company dedicated to crafting premium, eco-friendly umbrellas that combine style, durability, and a commitment to the planet.
          </p>
        </div>
        
        {/* Useful Links */}
        <div className='mb-8 md:mb-0 pr-7'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Useful Links</h2>
          <ul className='space-y-1'>
              <li className='text-black/80'>Contact Us</li>
              <li className='text-black/80'>Policies</li>
              <li className='text-black/80'>Shipping and Returns</li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div className='mb-8 md:mb-0'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Contact Us</h2>
          <p className='text-black/80 mb-1'>
            <span className='text-black'>Email:</span> example@gmail.com
          </p>
          <p className='text-black/80'>
            <span className='text-black'>Address:</span> No.259/40, Bandaranayakepura, Kalapaluwawa, Rajagiriya.
          </p>
          <p className='text-black/80 mb-1'>
            <span className='text-black'>Telephone:</span> 0771-222-666 
          </p>  
        </div>
        
        {/* Social Media Links */}
        <div className=''>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Follow Us</h2>
          <div className='flex space-x-4'>
            <a href='/' className='text-black/80'><FaFacebookF /></a>
            <a href='/' className='text-black/80'><FaTwitter /></a>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/aliya_umbrella/' className='text-black/80'><FaInstagram /></a>
            <a href='/' className='text-black/80'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className='border-t border-gray-300 mt-8 pt-4'>
        <p className='text-center text-gray-600 text-sm font-karla'>
          © 2025 Aliya - Umbrella. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
