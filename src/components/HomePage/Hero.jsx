import React from 'react'
import pic1 from '../../assets/Hero.jpg';
import Slider from 'react-slick';

const Hero = () => {

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true, // For smooth fading effect
  };

  const pictures = [
    { src: pic1 },
    { src: 'https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?cs=srgb&dl=pexels-bertellifotografia-573238.jpg&fm=jpg' },
    { src: 'https://images.pexels.com/photos/268791/pexels-photo-268791.jpeg?cs=srgb&dl=pexels-pixabay-268791.jpg&fm=jpg' },
  ];

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-[90%] h-[90%] rounded-2xl border shadow-xl flex animateUp'>
            <div className='w-full rounded-2xl h-full relative bg-black overflow-hidden'>
                {/* Slider Component */}
                <Slider {...sliderSettings} className='h-full w-full'>
                  {pictures.map((image, index) => (
                    <div key={index} className='w-full h-full'>
                      <img
                        src={image.src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-screen object-cover rounded-xl md:rounded-none md:rounded-l-xl opacity-60"
                      />
                    </div>
                  ))}
                </Slider>
                <div className='absolute m-auto inset-0 w-full h-full flex flex-col items-center justify-center z-30'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl text-center w-[80%] text-third uppercase font-poppins'>Where Elegance Meets Functionality – Premium Umbrellas, Crafted to Perfection.</h1>
                    <button className='border font-poppins bg-fourth text-black hover:bg-amber/80 text-[15px] md:text-lg py-2 px-7 rounded-full hover:text-white duration-200 mt-6 border-black uppercase'>Experience the Art of Shelter</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero