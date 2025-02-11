import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductView from './ProductView';

const ProductsPage = () => {
    const { categoryName, subCategoryID } = useParams();
    const [isGridFive, setIsGridFive] = useState(true);
    const [isViewOpen, setIsviewOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [productImages, setProductImages] = useState({});
    const [product, setProduct] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const apiKey = process.env.REACT_APP_API_KEY;
                const url = `https://adminaliyaumbrella.worldpos.biz/API/Item?CategoryMainID=${categoryName}&CategorySubID=${subCategoryID || ''}`;
                const response = await axios.get(url, {
                    headers: { 'APIKey': apiKey },
                });

                setItems(response.data.data || []);
            } catch (err) {
                setItems([]); // Prevents undefined state
            }
        };

        fetchItems();
    }, [categoryName, subCategoryID]);

    // Fetch product images
    const fetchImageData = async (itemID) => {
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const response = await axios.get(`https://adminaliyaumbrella.worldpos.biz/Api/ImageData/${itemID}`, {
                headers: { 'APIKey': apiKey },
            });

            if (response.data.success && response.data.data.length > 0) {
                setProductImages((prevImages) => ({
                    ...prevImages,
                    [itemID]: `https://adminaliyaumbrella.worldpos.biz/Uploads/${response.data.data[0].imageID}.png`,
                }));
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    useEffect(() => {
        items.forEach((item) => {
            fetchImageData(item.itemID);
        });
    }, [items]);

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
                            <div key={item.itemID} className={`w-full relative p-2 flex flex-col items-center shadow-md md:shadow-none hover:shadow-xl duration-200 ${isGridFive ? 'h-[320px]' : 'h-[400px]'}`}>
                                <img src={productImages[item.itemID]} className={`w-[90%] mx-auto object-contain duration-200 ${isGridFive ? 'h-[200px]' : 'h-[260px]'}`} alt={item.itemName} />
                                <h1 className="text-center py-2 font-semibold font-poppins">{item.itemName}</h1>
                                <p className="text-center pb-2 font-roboto">Rs. {item.retailPrice}</p>
                                {item.stockAvailable === 'A' ? (
                                    <button className="border border-fourth hover:bg-fourth w-[100px] mx-auto text-amber hover:text-white font-karla" onClick={() => { setIsviewOpen(true); setProduct(item); }}>
                                        View
                                    </button>
                                ) : (
                                    <button className="border border-red hover:bg-red w-[100px] mx-auto text-red hover:text-white font-karla" onClick={() => { setIsviewOpen(true); setProduct(item); }}> 
                                        Sold Out
                                    </button>
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
            {/*product view */}
            {isViewOpen && (
                <ProductView product={product} onClose={() => setIsviewOpen(false)}/>
            )}
        </div>
    );
};

export default ProductsPage;
