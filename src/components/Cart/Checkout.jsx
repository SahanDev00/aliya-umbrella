import React, { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Cookies from 'js-cookie';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, totalPrice, onClose }) => {

  const { clearCart, calculateTotal  } = useCart(); 
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const customerId = Cookies.get('customerId') || sessionStorage.getItem('customerId');

  useEffect(() => {
    if (customerId) {
      // Fetch profile data from API
      const fetchProfileData = async () => {
        const apiURL = `https://adminaliyaumbrella.worldpos.biz/api/Customer`; // Adjust with dynamic ID as necessary

        try {
          const apiKey = process.env.REACT_APP_API_KEY;
          const response = await fetch(`${apiURL}/${customerId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'APIKey': apiKey,
            },
          });
          const result = await response.json();

          if (response.ok) {
            setProfileData(result.data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchProfileData();
    }
  }, [customerId]);

  //place order
  const items = cartItems.length;
  const total = calculateTotal();
  const handlePlaceOrder = async () => {
    const orderData = {
      orderID: "",  // Populate this with the order ID after placing the order
      customerID: customerId,  // Replace with actual customer ID if available
      customerName: `${profileData.firstName} ${profileData.lastName}`,
      shipAddressLine1: profileData.addressLine1 + profileData.addressLine2,
      shipAttTo: profileData.addressLine1 + profileData.addressLine2,
      shipCity: profileData.city,
      shipState: profileData.state,
      shipPostalCode: profileData.postalCode,
      shipCountry: profileData.country,
      itemCount: items,
      itemTotal: parseFloat(total),
      itemTotalDisplay: parseFloat(total),
      orderStatus: "P",  // Default status
      remarks: "",  // Optional remarks
      action: {
        OrderActionID: "",
        OrderID: "",  // Populate if needed
        ActionDate: new Date().toISOString(),
        ActionType: "P",
        Remarks: "",
        UserID: ""  // Set this to the logged-in user's ID
      }
    };
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch('https://adminaliyaumbrella.worldpos.biz/Api/Order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey
        },
        body: JSON.stringify(orderData),
      });
      console.log('orderdata',orderData)
      console.log(response)

      if (response.ok) {
        const responseData = await response.json(); // Parse the JSON response
        const orderID = responseData.data.orderID; // Get the order ID from the response

        for (const item of cartItems) {
          const orderItemData = {
            orderID: orderID,
            itemID: item.itemID, // Use the item ID from your cart item
            remarks: "", // Any optional remarks
            itemPrice: parseFloat(item.retailPrice),
            itemDiscount: 0,  // Set this if applicable
            itemQty: parseInt(item.quantity, 10),
            paymentStatus: "NP",  // Customize as needed
            transaction: "", // Customize as needed
            returnURL: "", // Customize the return URL
            itemCode: item.itemCode, // Add the item code if available
            itemName: item.name, // Item name from your cart item
            lineTotal: parseFloat(item.retailPrice) * parseInt(item.quantity, 10),
            itemPriceDisplay: item.retailPrice,
            itemDiscountDisplay: "-",
            remarksDisplay: "",
            lineTotalDisplay: (parseFloat(item.retailPrice) * parseInt(item.quantity, 10)).toFixed(2)
          };
                    // Send each item to the OrderItem API
                    const orderItemResponse = await fetch('https://adminaliyaumbrella.worldpos.biz/Api/OrderItem', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'APIKey': apiKey
                      },
                      body: JSON.stringify(orderItemData)
                    });
            
                    console.log(orderItemData)
                    if (!orderItemResponse.ok) {
                      alert(`Failed to place order item: ${item.name}`);
                    }
        }

        toast.success('Order placed successfully!', {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          clearCart();
          navigate('/')
        }, 2000);
        // Handle successful order placement, e.g., redirect or show a message
      } else {
        toast.error('Failed to place order!', {
          position: "top-right",
          autoClose: 2000,
        });
        // Handle failed order placement, e.g., show an error message
      }
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle network errors, e.g., show an error message
    }
  };

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
                <span className="text-black font-karla">{item.itemName} (x{item.quantity})</span>
                <span className="text-amber font-karla">Rs. {item.retailPrice * item.quantity}</span>
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
          <button onClick={handlePlaceOrder} className="px-5 py-2 bg-fourth text-white rounded-md font-semibold hover:bg-amber font-karla">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
