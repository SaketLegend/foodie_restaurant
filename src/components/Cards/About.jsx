import React from 'react'
import wel from '../../assets/welcome2.webp'
import old from '../../assets/old.webp'
import cafe from '../../assets/cafe1.webp'
import avt1 from '../../assets/avt1.webp'
import avt2 from '../../assets/avt2.webp'
import Footer from '../Footer'

const About = () => {
  return (
    <div>
        <div className='mt-[10%] xs:mt-[25%] ml-[5%]'>
        <p className='text-4xl lilita'>About <span className='text-[#eb5554] text-4xl lilita'>Us</span></p>
        <div className='mt-[150px] xs:mt-[70px] flex gap-[100px] xs:gap-[10%] items-center justify-center'>
            <div className='w-[450px] h-[450px] rounded-full bg-[#FDE9DE] flex items-center justify-center overflow-hidden'>
                <img className='w-[400px] rounded-xl' src={wel} alt="" />
            </div>
            <div className='w-[500px] flex flex-col gap-5'>
                <p className='text-3xl lilita text-[#EB5554]'>
                Welcome to Foodie
                </p>
                <p className='text-xl lilita xs:w-[85%]'>At Foodie, we believe that every meal should be a delightful experience. Nestled in the heart of City, our restaurant is dedicated to bringing you the finest culinary creations crafted with love and the freshest ingredients.</p>
            </div>
        </div>

        <div className='mt-[100px] flex gap-[100px] items-center justify-center'>
            <div className='w-[500px] flex flex-col gap-5'>
            <p className='text-3xl lilita text-[#EB5554]'>
                Our History
                </p>
                <p className='text-xl xs:w-[130%] lilita'>Foodie was founded in 1992 by John Doe, a passionate food lover with a vision to create a place where people could come together and enjoy delicious, high-quality food in a warm and welcoming environment.</p>
            </div>
            <div className='w-[450px] xs:mr-[5%] h-[450px] rounded-full bg-[#FDE9DE] flex items-center justify-center overflow-hidden'>
                <img className='w-[400px] rounded-xl' src={old} alt="" />
            </div>
        </div>

        <div className='mt-[150px] xs:mt-[70px] flex gap-[100px] items-center justify-center'>
            <div className='w-[450px] h-[450px] rounded-full bg-[#FDE9DE] flex items-center justify-center overflow-hidden'>
                <img className='w-[400px] rounded-xl' src={cafe} alt="" />
            </div>
            <div className='w-[500px] xs:mr-[9%] flex flex-col gap-5'>
                <p className='text-3xl lilita text-[#EB5554]'>
                Our Quality
                </p>
                <p className='text-xl lilita xs:w-[120%]'>At Foodie, we believe that every meal should be a delightful experience. Nestled in the heart of City, our restaurant is dedicated to bringing you the finest culinary.</p>
            </div>
        </div>

        <div className='flex items-center flex flex-col mt-[100px] justify-center'>
            <p className='text-3xl lilita text-[#EB5554]'>What Our Customers Say</p>
            <div className='mt-[50px] xs:justify-center xs:items-center flex xs:flex-col flex-row gap-10'>
                <div className='w-[500px] xs:w-[80%] p-[20px] rounded-2xl flex items-center shadow-xl transform transition-transform duration-300 hover:scale-105 justify-center bg-[#FDE9DE] gap-6'>
                <img className='w-[70px] h-[70px]' src={avt1} alt="" />
                <p className='text-xl xs:text-[16px]'><span className='font-bold text-xl xs:text-[18px]'>Jane Doe:</span> Foodie is my go-to spot for a cozy dinner. The food is always amazing, and the service is impeccable.</p>
                </div>

                <div className='w-[500px] xs:w-[80%] p-[20px] rounded-2xl flex items-center shadow-xl transform transition duration-300 hover:scale-105 justify-center bg-[#FDE9DE] gap-6'>
                <img className='w-[80px] h-[80px]' src={avt2} alt="" />
                <p className='text-xl xs:text-[16px]'><span className='font-bold text-xl xs:text-[18px]'>Allena Smith:</span> The atmosphere at Foodie is so inviting, and the dishes are simply out of this world.</p>
                </div>
            </div>
        </div>

        <p className='flex items-center justify-center mt-[70px]'>Follow us on FaceBook and Instagram</p>
        <div className='mt-[70px]'>
        <Footer/>
      </div>
        </div>
    </div>
  )
}

export default About