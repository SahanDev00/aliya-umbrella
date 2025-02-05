import React from 'react'
import { IoIosClose } from 'react-icons/io'

const Checkout = ({ cartItems, totalPrice, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-[90%] sm:max-w-lg bg-white rounded-lg shadow-lg p-6 relative">
        <IoIosClose
          className="absolute right-5 top-5 text-3xl cursor-pointer text-black hover:text-black/80"
          onClick={onClose}
        />
        <h1 className="text-2xl font-bold text-black text-center mb-4 font-karla">Checkout</h1>

        {/* Cart Items Summary */}
        <div className="max-h-60 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 border-b font-overpass">
                <span className="text-black font-karla">{item.name} (x{item.quantity})</span>
                <span className="text-amber font-karla">Rs. {item.price * item.quantity}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-black text-lg font-poppins">No items in cart.</p>
          )}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mt-4 text-lg font-bold text-black font-karla w-[80%] mx-auto">
          <span>Total:</span>
          <span className="text-amber">Rs. {totalPrice}</span>
        </div>

        {/* Checkout Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <button className="px-5 py-2 bg-fourth text-white rounded-md font-semibold hover:bg-amber font-karla">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
