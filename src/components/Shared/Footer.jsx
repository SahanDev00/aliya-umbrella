import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full relative py-10 font-overpass bg-third'>
      <div className='w-[90%] 2lg:w-[95%] 3lg:w-[90%] mx-auto flex flex-col md:flex-row justify-between px-6'>
        {/* About Us Section */}
        <div className='mb-8 md:mb-0 w-full md:w-[50%]'>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>About Us</h2>
          <p className='text-gray-600 md:w-[70%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur recusandae esse vel repellat voluptatibus vitae voluptatum dolores deleniti ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quam delectus expedita porro adipisci veniam consequuntur doloremque natus, dolor molestias!
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
            Email: example@gmail.com
          </p>
          <p className='text-black/80'>
            Address: Sri Lanka
          </p>
          <p className='text-black/80 mb-1'>
            Telephone: 0712345675
          </p>  
        </div>
        
        {/* Social Media Links */}
        <div className=''>
          <h2 className='text-xl font-bold text-gray-700 mb-4 font-roboto'>Follow Us</h2>
          <div className='flex space-x-4'>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaFacebookF /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaTwitter /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaInstagram /></a>
            <a href='/' className='text-gray-600 hover:text-gray-800'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className='border-t border-gray-300 mt-8 pt-4'>
        <p className='text-center text-gray-600 text-sm font-karla'>
          © 2025 Aliya Umbrella. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
