import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const AboutUs = () => {

    const [isFAQ, setIsFAQ] = useState();

    const faq = [
        {
            id: 1,
            question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, laborum ut recusandae pariatur nisi non aut quos ducimus vitae consequuntur.",
            answer: "test answer"
        },
        {
            id: 2,
            question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, laborum ut recusandae pariatur nisi non aut quos ducimus vitae consequuntur.",
            answer: "test answer"
        },
        {
            id: 3,
            question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, laborum ut recusandae pariatur nisi non aut quos ducimus vitae consequuntur.",
            answer: "test answer"
        },
        {
            id: 4,
            question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, laborum ut recusandae pariatur nisi non aut quos ducimus vitae consequuntur.",
            answer: "test answer"
        },
        {
            id: 5,
            question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, laborum ut recusandae pariatur nisi non aut quos ducimus vitae consequuntur.",
            answer: "test answer"
        },
    ]

  return (
    <div className='w-full min-h-screen bg-white'>
        <div className='w-full h-[450px] border relative'>
            <img src="https://thumbs.dreamstime.com/b/lifestyle-banner-depicting-blue-umbrella-rain-rainy-weather-351448263.jpg" className='w-full h-full object-cover' alt="" />
            <div className='absolute w-full h-full inset-0 flex flex-col justify-center text-white'>
                <h2 className='pl-20 text-lg font-medium font-roboto'>About Us</h2>
                <h1 className='pl-20 text-5xl font-poppins font-bold'>We are your best choice.</h1>
            </div>
        </div>
        <div className='w-full md:w-[90%] mx-auto h-full'>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Who We Are</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam adipisci, aliquam expedita error, quam quia ipsum doloribus omnis eligendi pariatur minima consequuntur dolorem iure magni architecto illo harum. Incidunt veritatis sed dolorum beatae culpa est ipsa hic minima ratione consectetur fugiat possimus at ab iusto odit molestiae, pariatur nemo.</p>
            </div>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Why We Are</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam adipisci, aliquam expedita error, quam quia ipsum doloribus omnis eligendi pariatur minima consequuntur dolorem iure magni architecto illo harum. Incidunt veritatis sed dolorum beatae culpa est ipsa hic minima ratione consectetur fugiat possimus at ab iusto odit molestiae, pariatur nemo.</p>
            </div>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Our Products and Materials We Use</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam adipisci, aliquam expedita error, quam quia ipsum doloribus omnis eligendi pariatur minima consequuntur dolorem iure magni architecto illo harum. Incidunt veritatis sed dolorum beatae culpa est ipsa hic minima ratione consectetur fugiat possimus at ab iusto odit molestiae, pariatur nemo.</p>
                <ul className='list-disc mt-3 pl-10 sm:pl-16 text-black/80 font-poppins text-[13px] md:text-[15px]'>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
            <div className='md:pl-10 mt-10 pb-10 w-[90%] md:w-full mx-auto'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Frequently Asked Questions</h1>
                {faq.map((question) => (
                    <div key={question.id}>
                        <div className='flex items-center justify-between w-full md:w-[70%] py-2 mt-2 md:pl-10 cursor-pointer ' onClick={() => (question.id !== isFAQ ? setIsFAQ(question.id) : setIsFAQ(0) ) }>
                            <p className='text-black/80 font-medium font-roboto text-[13px] sm:text-[14px] md:text-[16px] w-[90%] sm:w-full'>{question.question}</p>
                            <FaPlus className={`text-black/60 duration-300 ${question.id === isFAQ ? "rotate-45" : ""}`} />
                        </div>
                        <div className={`flex items-center justify-between w-[70%] pl-5 md:pl-14 duration-300  overflow-hidden ${question.id === isFAQ ? "h-[30px]" : "h-[0px]"}`}>
                            <p className='text-black/70 font-overpass'>{question.answer}</p>
                        </div>
                        <hr className='opacity-50 w-full md:w-[68%] md:ml-10' />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutUs