import React, { useEffect, useState } from 'react'
import ProductView from '../ProductsPage/ProductView'
import axios from 'axios'
import { Link } from 'react-router-dom';

const SampleItems = () => {

      const [isViewOpen, setIsviewOpen] = useState(false);
      const [product, setProduct] = useState();
      const [items, setItems] = useState([]);
      const [productImages, setProductImages] = useState({}); // Store images by item IDs
  
      useEffect(() => {
          const fetchItems = async () => {
              try {
                  const apiKey = process.env.REACT_APP_API_KEY;
                  const response = await axios.get('https://adminaliyaumbrella.worldpos.biz/Api/Item?IsNew=Y', {
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


  return (
    <div className='bg-white w-full h-full pt-16 flex flex-col justify-center pb-10'>
      <div className='w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] mx-auto'>
          <h1 className='text-center text-4xl uppercase font-thin font-karla'>Take a look at our products</h1>
          <div className='w-[90px] h-[1px] mx-auto bg-black mt-2'/>
          <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto mt-16 gap-2'>
            {items.map((item, id) => (
              <div className='w-full h-[330px] hover:shadow-xl cursor-pointer flex flex-col p-1'>
                  <img src={productImages[item.itemID]} className='w-[200px] h-[200px] object-contain mx-auto' alt="" />
                  <h1 className='text-center py-2 font-semibold font-poppins'>{item.itemName}</h1>
                  <p className='text-center pb-2 font-roboto'>Rs. {item.retailPrice}</p>
                  {item.stockAvailable === 'A' ? (
                      <button className="border border-fourth hover:bg-fourth w-[100px] mx-auto text-amber hover:text-white font-karla" onClick={() => { setIsviewOpen(true); setProduct(item); }}>View</button>
                  ) : (
                      <button className="border border-red hover:bg-red w-[100px] mx-auto text-red hover:text-white font-karla" onClick={() => { setIsviewOpen(true); setProduct(item); }}>Sold Out</button>
                  )}
              </div>
            ))}
          </div>
      </div>
      <Link className='border text-center border-fourth hover:bg-fourth w-[130px] mx-auto text-amber hover:text-white mt-5 px-3 py-2 hover:rounded-full duration-200 font-karla' to='/products'>
        <button >View More</button>
      </Link>
      {isViewOpen && (
            <ProductView product={product} onClose={() => setIsviewOpen(false)}/>
        )}
    </div>
  )
}

export default SampleItems