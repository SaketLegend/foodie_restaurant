import React from 'react'
import spicy from '../../assets/chilli.webp';
import up from '../../assets/down.webp';
import { useState } from 'react';
import { useCart } from '../../CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FriesDetail = ({food, isAuthenticated}) => {
    const [quantity, setQuantity] = useState(0);
    const{ addToCart, user } = useCart();
    const navigate = useNavigate();

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
      };
    
      const handleOrderNow = () => {
        if (isAuthenticated) {
          if(user){
          const itemToAdd = { ...food, quantity, userEmail: user.userEmail };
          addToCart(itemToAdd);
          Swal.fire({
            title: 'Added to Cart',
            text: 'Selected dish added to cart successfully',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Continue Shopping',
            cancelButtonText: 'View Cart',
            showDenyButton: false,
            denyButtonText: 'Open Cart'
          }).then((result) => {
            if (result.isConfirmed) {
              // Handle continue shopping
              console.log('Continue Shopping clicked');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // Navigate to the cart page
              navigate('/cart');
              console.log('View Cart clicked');
            }
          });
          }
          else{
            Swal.fire('User informaton not found', 'Please login again','info')
          }
        } else {
          Swal.fire('Please login or sign up to place an order', '', 'info');
        }
      };

      const getShortDescription = (desc) => {
        if (desc.length > 50) {
          return desc.substring(0, 50) + '...';
        }
        return desc;
      };
    
      return (
        <div>
      <div className='flex mt-14 xs:mt-10'>
        <div className="shadow-xl relative xs:hidden bg-no-repeat bg-cover rounded-full border-[10px] border-[#EB5554] w-[240px] h-[200px]" style={{backgroundImage:`url(${food.img})`}}></div>
         <div className='bg-[#fff0e9] w-[90%] relative xs:w-[90%] mr-[4%] ml-[3%] flex justify-around rounded-xl'>
          <div className="shadow-xl hidden xs:flex bg-no-repeat bg-cover rounded-full xs:border-[7px] border-[#EB5554] xs:w-[120px] xs:h-[120px] xs:top-[15px] xs:left-[5%] xs:absolute w-[240px] h-[200px]" style={{backgroundImage:`url(${food.img})`}}></div>
        <div className='flex pl-7 pt-4 xs:mt-[40%] flex-col gap-3 xs:w-[70%] w-[75%]'>
            <p className='lilita text-[#eb5554] text-2xl'>{food.heading}</p>
            <p className='text-gray-500 hidden xs:block'>{getShortDescription(food.desc)}</p>
            <p className='text-gray-500 xs:hidden'>{food.desc}</p>
            <div className='flex gap-10'>
              <div className="relative inline-flex">
                <select
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="appearance-none rounded-xl xs:mb-[20%] border-[1px] border-[#EB5554] bg-white px-3 py-2 pr-8"
                >
                  {[...Array(10).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex xs:px-2 xs:mb-[9px] items-center px-2 text-[#EB5554]">
                  <img className='w-[20px]' src={up} alt="" />
                </div>
              </div>
              <div className='flex xs:absolute xs:top-[15%] xs:right-[7%] items-center xs:gap-1 gap-2'>
                <img className="w-[30px] xs:w-[22px]" src={spicy} alt="" />
                <p className='xs:text-[15px]'>{food.spicy}</p>
                <img className='w-[30px] xs:w-[25px] ml-10 xs:ml-5' src={food.type} alt="" />
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-16 items-center flex-col ml'>
            <p className='text-green-600 mt-4 font-semibold text-xl xs:mt-[150%]'>₹ {food.price}</p>
            <button 
              onClick={handleOrderNow} 
              className='w-[130%] xs:absolute xs:w-[55%] text-white rounded-full mt-4 h-[20%] xs:h-[10%] xs:bottom-[5%] xs:right-[7%] bg-[#eb5554]'
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
      );
}

export default FriesDetail
