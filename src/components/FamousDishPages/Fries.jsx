import React from 'react'
import FriesDetail from './FriesDetail'
import b1 from '../../assets/frenchfries.webp'
import b2 from '../../assets/chillifries.webp'
import b3 from '../../assets/wafflefries.webp'
import non from '../../assets/non-veg.webp'
import veg from '../../assets/veg.webp'
import Footer from '../Footer'

const Fries = ({isAuthenticated}) => {
    const food = [
        {
          img: b1,
          heading: "Standard French Fries",
          desc: "French fries, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. Fries are often salted and served with other items, including ketchup, mayonnaise",
          spicy: "Less",
          type: veg,
          price: "105" 
        },
        {
          img: b2,
          heading: "Chilli French Fries ",
          desc: "A dish of French fries that have been topped with chili and cheese, usually American or cheddar, and baked or otherwise heated until the cheese is melted.",
          spicy: "More",
          type: non,
          price: "130" 
        },
        {
          img: b3,
          heading: "Waffle Fries",
          desc: "These waffle fries are super crunchy, almost like shoestring potatoes, and served with a yummy homemade dipping sauce. A great snack for game night or as a side for burgers.",
          spicy: "More",
          type: veg,
          price: "190" 
        }
      ]
  return (
    <div>
      <div className='mt-[10%] ml-[5%] xs:mt-[25%]'>
        <p className='text-4xl lilita'>French <span className='text-[#eb5554] text-4xl lilita'>Fries</span></p>
        <div className='flex flex-col mt-[4%]'>
          {food.map((item, index) => (
            <FriesDetail key={index} food={item} isAuthenticated={isAuthenticated}/> 
          ))}
        </div>
      </div>
      <div className='mt-[70px]'>
        <Footer/>
      </div>
    </div>
  )
}

export default Fries
