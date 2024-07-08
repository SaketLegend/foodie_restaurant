import React from 'react'
import PizzaDetail from './PizzaDetail'
import b1 from '../../assets/cheesepizza.webp'
import b2 from '../../assets/veggiepizza.webp'
import b3 from '../../assets/peppizza.webp'
import non from '../../assets/non-veg.webp'
import veg from '../../assets/veg.webp'
import Footer from '../Footer'

const Fries = ({isAuthenticated}) => {
    const food = [
        {
          img: b1,
          heading: "Cheese Pizza",
          desc: "Sometimes all you want at the end of the day is a simple cheese pizza. This recipe turns simple into sublime with the addition of an exceptional pizza dough, low-moisture mozzarella cheese.",
          spicy: "Less",
          type: veg,
          price: "205" 
        },
        {
          img: b2,
          heading: "Veggie Pizza",
          desc: "Nearly any vegetable, sliced into bite-sized pieces, tastes incredible atop this Veggie Pizza. A few of my family's favorite combinations: Red peppers, black olives, and scallions and shredded mozzarella. Pesto, leftover chicken, artichoke hearts, fresh basil leaves, and mozzarella cheese.",
          spicy: "More",
          type: veg,
          price: "220" 
        },
        {
          img: b3,
          heading: "Pepporoni Pizza",
          desc: "According to food historian and author John F. Mariani of “How Italian Food Conquered the World,” “pepperoni” was coined by Italian-Americans who, when eating experiencing the spicy sausage, were reminded of peperoncini, the hot and sweet Calabrian chilli pepper from southern Italy.",
          spicy: "More",
          type: non,
          price: "320" 
        }
      ]
  return (
    <div>
      <div className='mt-[10%] ml-[5%] xs:mt-[25%]'>
        <p className='text-[#eb5554] text-4xl lilita'>Pizza</p>
        <div className='flex flex-col mt-[4%]'>
          {food.map((item, index) => (
            <PizzaDetail key={index} food={item} isAuthenticated={isAuthenticated}/> 
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
