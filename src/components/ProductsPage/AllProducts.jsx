import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaAngleDown } from "react-icons/fa6";
import ProductView from './ProductView';

const AllProducts = () => {

    const [isGridFive, setIsGridFive] = useState(true);
    const [isViewOpen, setIsviewOpen] = useState(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [product, setProduct] = useState();
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState({});
    const [collapsedSections, setCollapsedSections] = useState({});
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

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const apiKey = process.env.REACT_APP_API_KEY;
                const response = await axios.get('https://adminaliyaumbrella.worldpos.biz/Api/CategoryMain', {
                    headers: { 'APIKey': apiKey },
                });

                setCategories(response.data.data || []); // ✅ Ensures it's always an array
            } catch (err) {
                setCategories([]); // ✅ Avoids undefined state
            }
        };
        fetchCategories();
    }, []);

    const toggleCollapse = (category) => {
        setCollapsedSections(prev => {
          const newSections = { ...prev };
          for (const key in newSections) {
            if (key !== category) {
              newSections[key] = false;
            }
          }
          newSections[category] = !newSections[category];
          return newSections;
        });
    
        if (!subCategories[category]) {
          // Fetch subcategories only if they are not already loaded
          const apiKey = process.env.REACT_APP_API_KEY;
          const url = `https://adminaliyaumbrella.worldpos.biz/API/CategorySub?CategoryMainID=${categories.find(cat => cat.categoryMainName === category)?.categoryMainID}`;
      
          fetch(url, {
            method: 'GET',
            headers: {
              'APIKey': apiKey,
            },
          })
          .then(response => response.json())
          .then(result => {
            if (result.success && Array.isArray(result.data)) {
              setSubCategories(prev => ({ ...prev, [category]: result.data }));
              console.log(subCategories)
            } else {
              throw new Error('Unexpected response format');
            }
          })
          .catch(error => {
            console.error('Error fetching subcategories:', error);
          });
        }
    }

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

      const handleSubCategoryClick = (subCategory) => {
    
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://senexadmin.worldpos.biz/Api/Item?CategorySubID=${subCategory.categorySubID}`;
      
        fetch(url, {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },
        })
        .then(response => response.json())
        .then(result => {
          if (result.success && Array.isArray(result.data)) {
            setItems(result.data);
          } else {
            throw new Error('Unexpected response format');
          }
        })
        .catch(error => {
          console.error('Error fetching items:', error);
        })
      };

  return (
    <div className='w-full min-h-screen bg-white relative'>
        <div className='w-[80%] mx-auto pt-28'>
            <div className='flex justify-between w-full items-center'>
                <p className='text-black font-semibold font-karla'>
                    <Link to='/collection'>
                        <span className='hover:underline cursor-pointer'>Store</span> {' > '}
                    </Link> 
                    <Link to='/products'>
                        <span className='hover:underline cursor-pointer'>All Products</span>
                    </Link>
                </p>
                <div className='lg:flex gap-3 hidden'>
                    <div className='flex gap-1 cursor-pointer' onClick={() => setIsGridFive(false)}>
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black/50' : 'bg-black'}`} />
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black/50' : 'bg-black'}`} />
                    </div>
                    <div className='flex gap-1 cursor-pointer' onClick={() => setIsGridFive(true)}>
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black' : 'bg-black/50'}`} />
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black' : 'bg-black/50'}`} />
                        <div className={`w-[3px] h-[20px] ${isGridFive ? 'bg-black' : 'bg-black/50'}`} />
                    </div>
                </div>
            </div>
            
            {/* all items */}
            <div className={`w-full grid gap-4 mt-10 duration-200 pb-10 sm:grid-cols-2 md:grid-cols-3 ${isGridFive ? ' lg:grid-cols-4 xl:grid-cols-5' : 'lg:grid-cols-3 xl:grid-cols-4'}`}>
                {items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className={`w-full relative p-2 flex flex-col items-center shadow-md md:shadow-none hover:shadow-xl duration-200 ${isGridFive ? 'h-[320px]' : 'h-[400px]'}`}>
                            <img src={productImages[item.itemID]} className={`w-[90%] mx-auto object-contain duration-200 ${isGridFive ? 'h-[200px]' : 'h-[260px]'}`} alt="" />
                            <h1 className="text-center py-2 font-semibold font-poppins">{item.itemName}</h1>
                            <p className="text-center pb-2 font-roboto">Rs. {item.retailPrice}</p>
                            {item.stockAvailable === 'A' ? (
                                <button className="border border-fourth hover:bg-fourth w-[100px] mx-auto text-amber hover:text-white font-karla" onClick={() => { setIsviewOpen(true); setProduct(item); }}>View</button>
                            ) : (
                                <button className="border border-red hover:bg-red w-[100px] mx-auto text-red hover:text-white font-karla" onClick={() => { setIsviewOpen(true); setProduct(item); }}>Sold Out</button>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="w-full col-span-full flex justify-center items-center py-10">
                        <p className="text-black/70 text-lg font-semibold font-karla">No items available yet. Check back later!</p>
                    </div>
                )}
            </div>
        </div>

        <div className={`fixed left-0 top-0 flex h-screen max-h-screen overflow-hidden p-2 z-50 border bg-amber duration-300 ${isFiltersOpen ? 'w-[350px] md:w-[400px]' : 'w-[10px] md:w-[30px]' }`}>
            <div className={`${isFiltersOpen ? 'w-[90%]' : 'w-0 hidden'}`}>
                <div className='w-full p-5'>
                    <h1 className='text-white text-2xl uppercase font-roboto'>Filter and Search</h1>
                    <div className='w-full h-full'>
                        {categories.map((category, index) => (
                            <div key={index} className="py-2 pl-4">
                                {/* Main Category */}
                                <div 
                                    className="flex items-center justify-between text-white font-karla cursor-pointer" 
                                    onClick={() => toggleCollapse(category.categoryMainName)}
                                >
                                    <p>{category.categoryMainName}</p>
                                    <FaAngleDown 
                                        className={`transition-transform duration-300 ${
                                            collapsedSections[category.categoryMainName] ? "rotate-180" : "rotate-0"
                                        }`}
                                    />
                                </div>

                                {/* Subcategories (shown only when collapsedSections[category.categoryMainName] is true) */}
                                {collapsedSections[category.categoryMainName] && (
                                    <div className="pl-6 mt-2">
                                        {subCategories[category.categoryMainName]?.map((subCategory, subIndex) => (
                                            <Link 
                                                to={`/products/${category.categoryMainID}/${subCategory.categorySubID}`}
                                                onClick={(event) => handleSubCategoryClick(event, subCategory)}
                                                key={`${index}-${subIndex}`}>
                                                <div key={subIndex} className="py-1 text-white font-karla text-sm">
                                                    <p>{subCategory.categorySubName}</p>
                                                    <hr />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-[10%] h-full flex items-center justify-center'>
                <h1 onClick={() => setIsFiltersOpen(!isFiltersOpen)} className='text-white -rotate-90 my-auto text-center font-mono cursor-pointer text-sm'>Filters</h1>
            </div>
        </div>

        {/*product view */}
        {isViewOpen && (
            <ProductView product={product} onClose={() => setIsviewOpen(false)}/>
        )}
    </div>
  )
}

export default AllProducts;