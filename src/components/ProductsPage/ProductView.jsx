import React, { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { useCart } from '../Cart/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductView = ({ product, onClose }) => {

  const [images, setImages] = useState([]);
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(''); // State for main image

  useEffect(() => {
    const fetchImageData = async () => {
        try {
        const apiKey = process.env.REACT_APP_API_KEY;
          const response = await fetch(`https://adminaliyaumbrella.worldpos.biz/Api/ImageData/${product.itemID}`, {
            headers: {
              'APIKey': apiKey,
            },
          });
          const data = await response.json();
          if (data.success) {
            setImages(data.data); // Set the fetched image data
            // Set the first image as the default main image
            if (data.data.length > 0) {
              setMainImage(`https://adminaliyaumbrella.worldpos.biz/Uploads/${data.data[0].imageID}.png`);
            }
          } else {
            console.error('Error fetching image data:', data.errorMessage);
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
    };

    fetchImageData()
  }, [product.itemID]);


  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1,
    });
    toast.success(product.itemName + ' Added To The Cart!', {
      toastId: 1,
      position: "top-right",
      autoClose: 2000,
    });
  };

  

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4'>
      <div className='w-full max-w-4xl bg-third rounded-lg shadow-lg relative overflow-hidden md:py-10'>
        {/* Close Button */}
        <IoIosClose 
          className='absolute right-2 md:right-4 top-2 md:top-4 size-10 cursor-pointer text-black hover:text-gray-700 transition' 
          onClick={onClose} 
        />

        <h1 className='text-3xl text-center font-overpass font-bold sm:text-4xl hidden md:block'>Product Description</h1>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:py-16 pt-10'>
          {/* Image */}
          <div className='flex flex-col items-center justify-center'>
            <a target='_blank' rel="noreferrer" href={mainImage}>
              <img src={mainImage} className='w-full max-w-[200px] md:max-w-[300px] object-contain' alt={product.itemName} />
            </a>
            <div className='flex items-center justify-center mt-4 gap-5 flex-wrap'>
              {images.map((img, idx) => (
                    <img
                      key={img.imageID} 
                      src={`https://adminaliyaumbrella.worldpos.biz/Uploads/${img.imageID}.png`}  // Use imageID for thumbnail URL
                      className='w-[60px] sm:w-[100px] md:w-[100px] md:h-[100px] cursor-pointer object-contain' 
                      alt={`Gallery ${idx}`} 
                      onClick={() => setMainImage(`https://adminaliyaumbrella.worldpos.biz/Uploads/${img.imageID}.png`)} // Update main image on click
                    />
                ))}
            </div>
          </div>
          {/* Details */}
          <div className='flex flex-col items-center justify-center text-center space-y-4'>
            <h1 className='text-2xl font-poppins sm:text-3xl'>{product.itemName}</h1>
            <p className='text-black/80 w-[90%] mx-auto font-poppins text-sm sm:text-base'>{product.itemDescription}</p>
            <p className='text-lg text-amber font-roboto sm:text-xl'>Rs. {product.retailPrice}</p>
            {product.stockAvailable === 'A' ? (
              <button onClick={() => handleAddToCart(product)} className='px-4 py-2 bg-amber/80 hover:bg-amber text-white rounded-md transition'>
                Add to Cart
              </button>
            ) : (
              <button className='px-4 py-2 bg-red text-white rounded-md transition cursor-not-allowed'>
                Sold Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView
