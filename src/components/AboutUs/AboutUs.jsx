import React from 'react'
//import { FaPlus } from 'react-icons/fa'

const AboutUs = () => {

    //const [isFAQ, setIsFAQ] = useState();

    /* 
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
        */

  return (
    <div className='w-full min-h-screen pb-10 bg-white'>
        <div className='w-full h-[450px] border relative'>
            <img src="https://thumbs.dreamstime.com/b/lifestyle-banner-depicting-blue-umbrella-rain-rainy-weather-351448263.jpg" className='w-full h-full object-cover' alt="" />
            <div className='absolute w-full h-full inset-0 flex flex-col justify-center text-white'>
                <h2 className='pl-20 text-lg font-medium font-roboto'>About Us</h2>
                <h1 className='pl-20 text-5xl font-poppins font-bold'>We are your best choice.</h1>
            </div>
        </div>
        <h1 className='md:text-xl lg:text-3xl text-black/70 mt-5 font-overpass text-center w-[90%] mx-auto font-bold'>Welcome to Aliya Umbrella, where innovation meets sustainability. We are a newly opened umbrella company dedicated to crafting premium, eco-friendly umbrellas that combine style, durability, and a commitment to the planet.</h1>
        <div className='w-full md:w-[90%] mx-auto h-full'>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Who We Are</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>At Aliya Umbrella, we are dedicated to crafting premium, eco-friendly products that blend quality, functionality, and sustainability. Our focus is on delivering durable, stylish solutions like the Premium VIP Umbrella, designed to enhance your everyday life while minimizing environmental impact. With innovation and customer satisfaction at our core, Aliya Umbrella strives to provide products you can trust and feel good about using.</p>
            </div>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Why We Are</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>When you choose Aliya Umbrella, you’re choosing more than just an umbrella—you’re investing in quality, style, and sustainability. Our Premium VIP Umbrella is crafted with eco-friendly materials, featuring a durable fiberglass frame, 100% water-repellent Pongee fabric, and UV protection. Designed for comfort with a soft-touch silicone handle and windproof construction, it’s built to withstand any weather.</p>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>We prioritize innovation and customer satisfaction, ensuring every product delivers unmatched performance and elegance. Whether you’re braving a downpour or seeking shade on a sunny day, Aliya Umbrella offers reliability you can trust. Join us in making a sustainable choice—because you deserve the best, and so does the planet. Choose Aliya Umbrella for a smarter, stylish, and eco-conscious solution</p>
            </div>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Our Products and Materials We Use</h1>
                <ul className='list-disc mt-3 pl-10 sm:pl-16 text-black/80 font-poppins text-[13px] md:text-[15px]'>
                    <li>100% Water repellent umbrella cloth, lightweight, extra-large size</li>
                    <li>Extra-large size, Fiberglas Shaft and Ribs</li>
                    <li>Soft touch Silicon handle for easy grip, Breathable and sweat absorbent</li>
                    <li>Water repellent umbrella cloth, lightweight</li>
                    <li>Made of fabric Pongee with UV protection </li>
                    <li>Waterproof coating, Lot us leaf effect, shake and dry</li>
                    <li>Our Long Handle Umbrella is a Windproof Umbrella designed to remain open and to avoid breaking.</li>
                </ul>
            </div>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>30 Inch Size</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>The umbrella is large enough to cover you and your colleagues</p>
            </div>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>Automatic Opening</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>No need to struggle with opening the umbrella manually, simply press a button and it will open automatically.</p>
            </div>
            <div className='pl-5 sm:pl-10 mt-10'>
                <h1 className='text-xl md:text-2xl font-medium font-overpass'>High Quality Material</h1>
                <p className='font-poppins text-[14px] md:text-[16px] pl-5 text-black/70 w-[90%] lg:w-[80%] mt-1'>Made with high-quality fiber and EVA material, this umbrella is durable and long-lasting.</p>
            </div>
            {/*
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
             */}
        </div>
    </div>
  )
}

export default AboutUs