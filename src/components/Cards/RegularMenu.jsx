import React from 'react'
import star from '../../assets/star.webp'
import rating from '../../assets/rating.webp'
import spice from '../../assets/chilli.webp';
import { useState } from 'react';
import up from '../../assets/up-arrow.webp'
import down from '../../assets/down.webp'
import { useCart } from '../../CartContext';
import Swal from 'sweetalert2';
import { motion,useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RegularMenu = ({famous, isAuthenticated}) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, user } = useCart();
  const {scrollYProgress} = useScroll()
  const navigate = useNavigate()

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleOrderNow = () => {
    if (isAuthenticated) {
      if(user){
      const itemToAdd = { ...famous, quantity, userEmail: user.email };
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
        Swal.fire('User information not found', 'Please log in again', 'info')
      }
    } else {
      Swal.fire('Please login or sign up to place an order', '', 'info');
    }
  };

  return (
    <div>
    <motion.div className='h-[363px] w-[270px] xs:h-[250px] xs:w-[240px] rounded-2xl relative bg-[#FDE9DE]'>
    <div className="absolute shadow-xl bg-no-repeat bg-cover top-[-40px] right-[-40px] rounded-full border-[10px] border-[#EB5554] w-[200px] h-[200px] xs:h-[150px] xs:w-[150px]" style={{backgroundImage:`url(${famous.img})`}}></div>
    <img className='w-[20px] h-[20px] absolute top-5 left-5' src={famous.type} alt="" />   
        <div className='flex flex-col'>
            <p className='lilita text-xl xs:text-[19px] mt-48 xs:mt-[100px] pl-3'>{famous.heading}</p>
            
            <div className='flex pl-3 gap-2 mt-2'>
                <img className='w-3 h-3 xs:w-2 xs:h-2' src={star} alt="" />
                <img className='w-3 h-3 xs:w-2 xs:h-2' src={star} alt="" />
                <img className='w-3 h-3 xs:w-2 xs:h-2' src={star} alt="" />
                <img className='w-3 h-3 xs:w-2 xs:h-2' src={star} alt="" />
                <img className='w-3 h-3 xs:w-2 xs:h-2' src={rating} alt="" />
                <p className='text-[10px] xs:text-[9px]'>({famous.rating})</p>
            </div>
            <div className='flex gap-2 mt-1 ml-2'>
                <img className='w-[25px] h-[25px] xs:w-[18px] xs:h-[18px]' src={spice} alt="" />
                <p className='text-gray-600 xs:text-[15px]'>{famous.spicy}</p>
            </div>
            <div className='flex items-center justify-between ml-3 mr-3 mt-8 xs:mt-[14px]'>
               <div className='flex gap-2 items-center'>
               <p className='lilita text-green-500 text-2xl xs:text-[20px]'>₹{famous.price}</p>
               <div className="relative inline-flex">
                <select
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="appearance-none rounded-xl border-[1px] border-[#EB5554] bg-white px-3 py-2 pr-8"
                >
                  {[...Array(10).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#EB5554]">
                  <img className='w-[20px] xs:hidden' src={up} alt="" />
                  <img className='hidden xs:flex xs:w-[25px]' src={down} alt="" />
                </div>
              </div>
               </div>
                <button onClick={handleOrderNow} className='w-[80px] text-white font-medium rounded-3xl h-[40px] bg-[#EB5554]'>Order</button>
            </div>
        </div>
    
    </motion.div>
   </div>
  )
}

export default RegularMenu
