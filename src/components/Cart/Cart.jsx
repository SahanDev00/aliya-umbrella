import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import image from '../../assets/item3.png'
import Checkout from './Checkout';

const Cart = () => {

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Static JSON Data (You can replace it with API data later)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 1200, quantity: 2, image: image },
    { id: 2, name: 'Product B', price: 850, quantity: 1, image: image },
    { id: 3, name: 'Product C', price: 1500, quantity: 3, image: image }
  ]);

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-full min-h-screen bg-white p-6 pt-32">
        <h1 className="text-4xl font-bold text-black text-center mb-6 uppercase font-roboto">
            Shopping Cart
        </h1>

        {/* Cart Items */}
        <div className="w-full max-w-4xl mx-auto p-5">
            {cartItems.length > 0 ? (
            cartItems.map((item) => (
                <div
                key={item.id}
                className="flex sm:flex-row flex-col items-center justify-between bg-white p-4 rounded-lg mb-4 drop-shadow-md"
                >
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md"
                />
                <div className="flex-1 sm:ml-4 text-center sm:text-left">
                    <h2 className="text-lg md:text-xl font-semibold text-black font-karla">{item.name}</h2>
                    <p className="text-amber text-[14px] md:text-[16px] font-karla">Rs. {item.price}</p>
                </div>
                <div className="flex items-center justify-center mt-3 md:mt-0">
                    <button
                    className="text-black px-2 py-1 rounded-md mr-2"
                    onClick={() => decreaseQuantity(item.id)}
                    >
                    <FaMinus className="size-2 text-black/50" />
                    </button>
                    <span className="text-lg md:text-xl font-bold">{item.quantity}</span>
                    <button
                    className="text-black px-2 py-1 rounded-md ml-2"
                    onClick={() => increaseQuantity(item.id)}
                    >
                    <FaPlus className="size-3 text-black/50" />
                    </button>
                </div>
                <p className="text-black font-semibold w-full sm:w-20 text-center font-karla mt-3 md:mt-0">
                    Rs. {item.price * item.quantity}
                </p>
                <button
                    className="text-red/90 text-lg p-2 hover:text-red mt-3 md:mt-0"
                    onClick={() => removeItem(item.id)}
                >
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
                <h2 className="text-2xl font-bold text-black font-overpass">Total: Rs. {totalPrice}</h2>
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                <button className="px-5 py-2 bg-fourth text-white rounded-md font-semibold hover:bg-amber" onClick={() => setIsCheckoutOpen(true)}>
                    Checkout
                </button>
                <button className="px-5 py-2 bg-primary text-black rounded-md font-semibold hover:bg-secondary">
                    Download Quotation
                </button>
                </div>
            </div>
            )}
        </div>
        {isCheckoutOpen && (
            <Checkout cartItems={cartItems} totalPrice={totalPrice} onClose={() => setIsCheckoutOpen(false)} />
        )}
    </div>

  );
};

export default Cart;
