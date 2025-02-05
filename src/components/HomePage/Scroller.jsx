import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item from '../../assets/item.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import item4 from '../../assets/item4.png'
import item5 from '../../assets/item5.png'
import item6 from '../../assets/item6.png'
import item7 from '../../assets/item7.png'
import ProductView from '../ProductsPage/ProductView';

const Scroller = () => {

  const [isViewOpen, setIsviewOpen] = useState(false);
  const [product, setProduct] = useState();

  const items = [
    {
      id: 1,
      name: 'Sample item 1',
      image: item,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 200,
    },
    {
      id: 2,
      name: 'Sample item 2',
      image: item2,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 800,
    },
    {
      id: 3,
      name: 'Sample item 3',
      image: item3,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 600,
    },
    {
      id: 4,
      name: 'Sample item 4',
      image: item4,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 900,
    },
    {
      id: 5,
      name: 'Sample item 5',
      image: item5,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 2700,
    },
    {
      id: 6,
      name: 'Sample item 6',
      image: item6,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 2200,
    },
    {
      id: 7,
      name: 'Sample item 7',
      image: item7,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 1200,
    },
    {
      id: 8,
      name: 'Sample item 8',
      image: item3,
      description: 'kahfdkjsahfijsahfaifisanjfal',
      price: 1200,
    },
  ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024, // Below 1024px
              settings: {
                slidesToShow: 3, // Show 3 slides
              },
            },
            {
              breakpoint: 768, // Below 768px
              settings: {
                slidesToShow: 2, // Show 2 slides
              },
            },
            {
              breakpoint: 480, // Below 480px
              settings: {
                slidesToShow: 2, // Show 1 slide
              },
            },
          ],
    };

  return (
    <div className='w-full mt-10 overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[320px] 2xl:h-[430px]'>
        <Slider {...settings} className='w-full h-[200px]'>
            {items.map((item) => (
                <div className='w-full lg:h-[250px] xl:h-[300px] 2xl:h-[400px] p-2 cursor-grab active:cursor-grabbing relative group'>
                    <img src={item.image} className='w-full h-[250px] lg:h-[250px] xl:h-[300px] 2xl:h-[400px] object-contain' alt="" />
                    <div className='absolute inset-0 w-full h-full flex items-center opacity-0 group-hover:opacity-100 duration-300'>
                        <button className='border border-black/60 bg-fourth/50 w-[100px] h-[30px] mx-auto text-black/80 absolute bottom-5 right-0 left-0 font-karla' onClick={() => {setIsviewOpen(true); setProduct(item);}}>View Item</button>
                    </div>
                </div>
            ))}
        </Slider>
        {isViewOpen && (
            <ProductView product={product} onClose={() => setIsviewOpen(false)}/>
        )}
    </div>
  )
}

export default Scroller