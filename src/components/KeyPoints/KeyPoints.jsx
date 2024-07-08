import React from 'react'

const KeyPoints = ({Points}) => {
  return (
    <div>
      <div className='flex items-center xs:gap-2 gap-5'>
        <div className='w-[70px] xs:w-[50px] xs:ml-[2%] xs:h-[50px] flex justify-center items-center rounded-full h-[70px] bg-yellow-400'>
            <img className='w-[40px] ml xs:w-[30px]' src={Points.img} alt="" />
        </div>
        <div className='w-[250px] xs:p-[5px]'>
            <p className='text-2xl lilita xs:text-xl'>{Points.title}</p>
            <p className='text-gray-500 xs:text-[15px]'>{Points.info}</p>
        </div>
      </div>
    </div>
  )
}

export default KeyPoints
