import React from 'react';
import { useCart } from './CartContext';
import spicy from './assets/chilli.webp';

const Cart = () => {
  const { cart, setCart, user } = useCart();

  const userCart = cart.filter((cartItem) => cartItem.userEmail === user?.email);

  const removeFromCart = (itemHeading) => {
    setCart(userCart.filter((cartItem) => cartItem.heading !== itemHeading));
  };

  return (
    <div className='mt-[10%] xs:mt-[30%] ml-[5%] xs:ml-[8%]'>
      <p className='text-4xl lilita mb-7'>Cart <span className='text-[#eb5554] text-4xl lilita'>Page</span></p>
      {userCart.length === 0 ? (
        <p className="text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg mr-4 p-5">
          <ul>
            {userCart.map((item, index) => (
              <li key={index} className="flex items-center mt-2 justify-between py-4">
                <div className="shadow-xl xs:hidden bg-no-repeat bg-cover rounded-full border-[10px] border-[#EB5554] w-[200px] h-[200px]" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className='bg-[#fff0e9] w-[75%] xs:w-[100%] h-[270px] h-[200px] mr-[7%] ml-[1%] xs:relative flex items-center justify-around rounded-xl'>
                <div className="shadow-xl xs:absolute xs:ml-2 hidden xs:flex bg-no-repeat bg-cover rounded-full xs:top-[13%] xs:left-[2%] border-[5px] border-[#EB5554] w-[200px] h-[200px] xs:w-[90px] xs:h-[90px]" style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div className='flex pl-7 flex-col gap-3 w-[50%]'>
                    <p className='lilita text-[#eb5554] xs:absolute xs:top-[17%] xs:right-[9%] xs:w-[50%] xs:text-[25px] text-[30px]'>{item.heading}</p>
                    <div className='flex mt-[25px] xs:mt-[80%] gap-8'>
                      <p className='text-[18px] xs:absolute xs:top-[58%] xs:right-[20%] xs:text-[15px] font-medium'>Quantity: {item.quantity ? item.quantity : 1}</p>
                      <p className='text-[15px] xs:absolute xs:bottom-[20%] xs:left-[7%] font-medium text-green-600'>Price: ₹ {item.price}</p>
                    </div>
                    <div className='flex gap-2 xs:absolute xs:top-[58%] xs:left-[5%] '>
                      <img className='w-[25px] xs:w-[20px] h-[20px]' src={spicy} alt="" />
                      <p className='text-[18px] xs:text-[15px] font-medium'>{item.spicy}</p>
                      <img className='w-[25px] h-[25px] xs:w-[20px] xs:h-[20px] ml-5' src={item.type} alt="" />
                    </div>
                  </div>
                  <div className='flex justify-center gap-14 items-center flex-col ml'>
                    <div className='flex xs:absolute xs:bottom-[8%] xs:right-[55%] mt-4 gap-3'>
                      <p className='font-semibold xs:text-[20px] text-2xl'>Total:</p>
                      <p className='text-green-600 xs:text-[20px]  font-semibold text-2xl'>₹ {item.quantity ? item.price * item.quantity : item.price}</p>
                    </div>
                    <button onClick={() => {
                      removeFromCart(item.heading)
                    }} 
                      className='flex items-center xs:absolute xs:bottom-[7%] xs:right-[5%] w-[100px] h-[40px] text-white justify-center rounded-full bg-[#EB5554]'>Cancel
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
