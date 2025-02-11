import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import Checkout from './Checkout';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useCart } from './CartContext';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { cartItems, updateQuantity, calculateTotal, removeFromCart } = useCart();
  const [productImages, setProductImages] = useState({}); // Store images by item IDs

  // Format Price to 2 decimal places
  const formatPrice = (retailPrice) => parseFloat(retailPrice).toFixed(2);

  // Generate PDF for Cart
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Quotation', 14, 28);
    // doc.addImage(logo, "PNG", 5, 5, 45, 0); // Add your company logo

    const tableColumn = ['Product', 'Quantity', 'Price', 'Total'];
    const tableRows = [];

    cartItems.forEach(item => {
      if (item.itemName && item.retailPrice && item.quantity) {
        const itemData = [
          item.itemName,
          item.quantity,
          `$${formatPrice(item.retailPrice)}`,
          `$${(parseFloat(item.retailPrice) * item.quantity).toFixed(2)}`
        ];
        tableRows.push(itemData);
      }
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });

    const total = calculateTotal();
    doc.text(`Total: $${formatPrice(total)}`, 14, doc.previousAutoTable.finalY + 10);

    doc.save('quotation.pdf');
  };

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
            cartItems.forEach(cartItem => {
                fetchImageData(cartItem.itemID);
            });
    },[cartItems])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

        // Function to check if the user is logged in
    const customerDetails = Cookies.get('customerId') || sessionStorage.getItem('customerId');

  return (
    <div className="w-full min-h-screen bg-white p-6 pt-32">
      <h1 className="text-4xl font-bold text-black text-center mb-6 uppercase font-roboto">
        Shopping Cart
      </h1>

      {/* Cart Items */}
      <div className="w-full max-w-4xl mx-auto p-5">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.itemID} className="flex sm:flex-row flex-col items-center justify-between bg-white p-4 rounded-lg mb-4 drop-shadow-md">
              <img src={productImages[item.itemID]} alt={item.name} className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md" />
              <div className="flex-1 sm:ml-4 text-center sm:text-left">
                <h2 className="text-lg md:text-xl font-semibold text-black font-karla">{item.itemName}</h2>
                <p className="text-amber text-[14px] md:text-[16px] font-karla">Rs. {item.retailPrice}</p>
              </div>
              <div className="flex items-center justify-center mt-3 md:mt-0">
                    <button
                        onClick={() => updateQuantity(item.itemID, -1)}
                        className="bg-black/50 text-white py-1 px-2 rounded font-overpass text-xs sm:text-[16px]"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2 text-black/70 font-overpass text-sm sm:text-[16px]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.itemID, 1)}
                        className="bg-black/50 text-white py-1 px-2 rounded font-overpass text-xs sm:text-[16px]"
                      >
                        +
                    </button>
              </div>
              <p className="text-black font-semibold w-full sm:w-20 text-center font-karla mt-3 md:mt-0">
                Rs. {item.retailPrice * item.quantity}
              </p>
              <button className="text-red/90 text-lg p-2 hover:text-red mt-3 md:mt-0" onClick={() => removeFromCart(item.itemID)}>
                <FaTrash />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-black text-lg font-poppins">Your cart is empty.</p>
        )}

        {/* Total Price & Buttons */}
        {cartItems.length > 0 && (
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold text-black font-overpass">Total: Rs. {calculateTotal()}</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                {customerDetails ? (
                    <button
                        className="px-5 py-2 bg-fourth text-white rounded-md font-semibold hover:bg-amber"
                        onClick={() => setIsCheckoutOpen(true)}
                    >
                        Checkout
                    </button>
                ) : (
                    <Link to='/sign-up'>
                        <button
                            className="px-5 py-2 bg-fourth text-white rounded-md font-semibold hover:bg-amber"
                        >
                            Login to Checkout
                        </button>
                    </Link>
                )}
              <button
                className="px-5 py-2 bg-primary text-black rounded-md font-semibold hover:bg-secondary"
                onClick={generatePDF}
              >
                Download Quotation
              </button>
            </div>
          </div>
        )}
      </div>

      {isCheckoutOpen && (
        <Checkout cartItems={cartItems} totalPrice={calculateTotal()} onClose={() => setIsCheckoutOpen(false)} />
      )}
    </div>
  );
};

export default Cart;
