import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductView from '../ProductsPage/ProductView';
import axios from 'axios';

const Scroller = () => {

  const [isViewOpen, setIsviewOpen] = useState(false);
  const [product, setProduct] = useState();
  const [items, setItems] = useState([]);
  const [productImages, setProductImages] = useState({}); // Store images by item IDs

  useEffect(() => {
      const fetchItems = async () => {
          try {
              const apiKey = process.env.REACT_APP_API_KEY;
              const response = await axios.get('https://adminaliyaumbrella.worldpos.biz/Api/Item', {
                  headers: { 'APIKey': apiKey },
              });

              setItems(response.data.data || []); // ✅ Ensures it's always an array
          } catch (err) {
              setItems([]); // ✅ Avoids undefined state
          }
      };
      fetchItems();
  }, []);

  const fetchImageData = async (itemID) => {
      try {
          const apiKey = process.env.REACT_APP_API_KEY;
          const response = await fetch(`https://adminaliyaumbrella.worldpos.biz/Api/ImageData/${itemID}`, {
          headers: {
              'APIKey': apiKey,
          },
          });
          const data = await response.json();

          if (data.success && data.data.length > 0) {
              setProductImages(prevImages => ({
                  ...prevImages,
                  [itemID]: `https://adminaliyaumbrella.worldpos.biz/Uploads/${data.data[0].imageID}.png`
              }));
          }
          } catch (error) {
              console.error('Fetch error:', error);
          }
      };
      useEffect(() => {
          items.forEach(item => {
              fetchImageData(item.itemID);
          });
    },[items])


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
                    <img src={productImages[item.itemID]} className='w-full h-[250px] lg:h-[250px] xl:h-[300px] 2xl:h-[400px] object-contain' alt="" />
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