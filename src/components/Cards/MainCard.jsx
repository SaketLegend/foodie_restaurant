import React from 'react'
import arrow from "../../assets/next.webp"
import { NavLink } from 'react-router-dom'

const MainCard = ({menu}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <img className='h-[230px] w-[230px] xs:h-[150px] xs:w-[150px]' src={menu.img} alt="" />
      <p className='lilita text-2xl xs:text-xl mt-5'>{menu.name}</p>
      <NavLink to={menu.button} className='flex xs:items-center xs:justify-center'>
        <p className='text-[#EB5554] xs:text-[14px]'>Order Now</p>
        <img className='w-7 h-7 xs:w-5 xs:h-5' src={arrow} alt="" />
      </NavLink>
    </div>
  )
}

export default MainCard
