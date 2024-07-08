import React, { useRef } from 'react'
import distance from '../../assets/distance.webp'
import ratings from '../../assets/ratings.webp'
import play from '../../assets/discount.webp'
import arrow from '../../assets/arrow.webp'
import sandwich from '../../assets/sandwich.webp'
import KeyPoints from '../KeyPoints/KeyPoints'
import Rush from '../../assets/rush.png'
import free from '../../assets/free.webp'
import fresh from '../../assets/fresh.webp'
import MainCard from '../Cards/MainCard'
import burger from '../../assets/hamburger.webp'
import french from '../../assets/french.webp'
import pizza from '../../assets/pizza.webp'
import chickenburger from '../../assets/chickenburger.webp'
import chickenpizza from '../../assets/chickenpizza.webp'
import chickenfry from '../../assets/chickenfry.webp'
import shwarma from '../../assets/shwarma.webp'
import noodles from '../../assets/noodles.webp'
import sandwichmain from '../../assets/sandwichmain.webp'
import RegularMenu from '../Cards/RegularMenu'
import Poster3 from '../../assets/poster3.webp';
import Poster2 from '../../assets/poster2.webp';
import Poster4 from '../../assets/poster4.webp';
import Poster from '../../assets/poster.webp';
import Footer from '../Footer'
import veg from '../../assets/veg.webp';
import non from '../../assets/non-veg.webp';
import About from '../Cards/About'

const Landing = ({isAuthenticated}) => {

  const menus = useRef();
  const discounts = useRef();

  const scrollHandler = (eleRef) =>{
    eleRef.current.scrollIntoView({behavior: 'smooth', top: eleRef.current.offsetTop})
  }

  const Points = [
    {
      img: Rush,
      title: "Fast Delivery",
      info: "The Food will be delivered to your Home within 1-2 hours of your Ordering"
    },
    {
      img: fresh,
      title: "Fresh Delivery",
      info: "Your Food will be delivered 100% Fresh to your Home. We do not Deliver stale food"
    },
    {
      img: free,
      title: "Free Delivery",
      info: "Your Food Delivery is absolutely free. No Cost just Order and Enjoy"
    },
  ]

  const menu = [
    {
      img: burger,
      name: "Chicken Burger",
      button: "/burgers"
    },
    {
      img: french,
      name: "French Fries",
      button: "/fries"
    },
    {
      img: pizza,
      name: "Pizza",
      button: "/pizza"
    }
  ]

  const famous =[
    {
      img: chickenburger,
      heading: "Juicy Chicken Burger",
      rating: "100",
      price: "129",
      type: non,
      spicy: "Medium"
    },
    {
      img: chickenpizza,
      heading: "Chicken Pizza",
      rating: "72",
      price: "350",
      type: non,
      spicy: "Medium"
    },
    {
      img: chickenfry,
      heading: "Chicken Fry",
      rating: "320",
      price: "99",
      type: non,
      spicy: "More"
    },
    {
      img: shwarma,
      heading: "Shawarma",
      rating: "52",
      price: "120",
      type: non,
      spicy: "Less"
    },
    {
      img: noodles,
      heading: "Noodles",
      rating: "498",
      price: "75",
      type: veg,
      spicy: "Less"
    },
    {
      img: sandwichmain,
      heading: "Sandwich",
      rating: "623",
      price: "70",
      type: veg,
      spicy: "Less"
    },
  ]

  return (
    <div>
      <div className='flex flex-col bg-white xs:flex xs:items-center xs:justify-center justify-center relative items-center'>
      <div className='h-[690px] w-screen xs:h-[950px] bg-[#FFF0E9] xs:flex xs:flex-col flex justify-between relative'>
        <div className='ml-[6%] xs:ml-[0px] xs:mt-[90px] mt-[120px]'>
            <div className='flex xs:flex xs:items-center gap-4 flex-col'>
            <p className='text-7xl xs:text-4xl xs:mt-[250px] lilita mt-[50px] text-[#EB5554]'>All Fast Food is</p>
            <p className='text-7xl xs:text-5xl lilita text-[#EB5554]'>Available at Foodie</p>
            </div>
            <div className='flex xs:hidden gap-5 mt-8'>
                <div className='w-[50px] h-[50px] xs:w-[40px] xs:h-[40px] flex rounded-full items-center justify-center bg-yellow-300'>
                  <img className='w-[30px] h-[30px] xs:w-[20px] xs:h-[20px]' src={distance} alt="" />
                </div>
                <p className='w-[300px] xs:w-[] text-gray-500'>We are just a click Away When You Crave a Delicious Fast Food</p>
            </div>
            <div className='flex xs:flex-col xs:items-center xs:justify-center mt-14 gap-6 items-center'>
              <button onClick={()=>scrollHandler(menus)} className='flex items-center w-[150px] h-[50px] justify-between rounded-full bg-[#EB5554]'>
                <div className='w-[50px] h-[40px] border-4 border-[#eb5554] flex rounded-full items-center justify-center bg-yellow-300'>
                  <img className='w-[20px] h-[20px]' src={ratings} alt="" />
                </div>
                <p className='mr-7 lilita text-white'>Buy Now</p>
              </button>
              <button onClick={()=> scrollHandler(discounts)}>
                <div className='flex items-center gap-2'>
                <img className='w-[50px] h-[50px] xs:w-[40px] xs:h-[40px]' src={play} alt="" />
                <p className='text-xl lilita'>Get some Offers</p>
                </div>
              </button>
            </div>
        </div>
        <div className='transform xs:hidden rotate-[325deg] ml-[150px] mt-[120px]'>
          <img className='w-[150px]' src={arrow} alt="" />
        </div>
        <div className='mr-[7%] xs:flex xs:justify-center xs:items-center mt-[120px]'>
          <img className='w-[450px] xs:top-28 xs:absolute xs:w-[210px] relative' src={sandwich} alt="food" />
        </div>
      </div>


      {/* Here are the three main features of the foodie */}

      <div className='absolute w-[80%] xs:w-[70%] h-[200px] xs:h-[500px] flex xs:flex xs:flex-col gap-16 items-center shadow-2xl rounded-3xl justify-center bg-white bottom-[-110px] xs:bottom-[-250px]'>
        {Points.map((item, index) => (
          <KeyPoints Points={item} key={index}/>
        ))}
      </div>
      </div>


      {/* Best Delivered Categories in Foodie */}

      <div className='mt-[300px] xs:mt-[350px] flex justify-between ml-[6%] mr-[4%]'>
        <h2 className='text-6xl xs:text-4xl lilita w-[400px]'>Best <span class="text-[#EB5554] lilita">Delivered</span> Categories</h2>
        <p className='w-[320px] xs:w-[250px] xs:text-[14px] text-gray-500'>Here are some of our best distributed Categories. If you want you can Order from Here</p>
      </div>
      
      <div className='flex xs:flex-col items-center justify-center mt-24 xs:mt-24 gap-32 xs:gap-16'>
        {menu.map((item, index) => (
          <MainCard menu={item} key={index}/>
        ))}
      </div>


      {/* Here is the code to display the regular menus */}

      <div ref={menus} className='mt-[170px] xs:mt-[110px] flex xs:flex xs:flex-row flex-col justify-between ml-[6%] gap-5 mr-[4%]'>
        <h2 className='text-6xl lilita xs:text-4xl w-[400px]'>Our <span class="text-[#EB5554] lilita">Regular</span> Menu</h2>
        <p className='w-[320px] xs:w-[250px] xs:text-[14px] text-gray-500'>Here are some of our best distributed Categories. If you want you can Order from Here</p>
      </div>

      <div className='flex w-screen pl-[10%] pr-[10%] justify-center xs:gap-24 gap-32 mt-20 flex-wrap'>
        {famous.map((item, index) =>(
          <RegularMenu key={index} famous={item} isAuthenticated={isAuthenticated}/>
        ))}
      </div>
      

      <div ref={discounts} className='m-5'>
        <div className='w-screen gap-10 xs:gap-5 flex items-center justify-center mt-36 xs:mt-24'>
          <img className='w-[300px] xs:w-[150px]' src={Poster4} alt="" />
          <img className='w-[300px] xs:w-[150px]' src={Poster3} alt="" />
          <div className='flex flex-col gap-9'>
          <img className='w-[440px] xs:hidden' src={Poster2} alt="" />
          <img className='w-[440px] xs:hidden' src={Poster} alt="" />
          </div>
        </div>
      </div>

      <div className='mt-[70px]'>
        <Footer/>
      </div>
    </div>
  )
}

export default Landing
