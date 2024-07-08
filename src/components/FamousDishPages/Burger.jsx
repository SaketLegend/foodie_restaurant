import React from 'react'
import BurgerDetail from './BurgerDetail'
import b1 from '../../assets/chickenburger1.webp'
import b2 from '../../assets/chickenburger2.jpg'
import b3 from '../../assets/chickenburger3.webp'
import non from '../../assets/non-veg.webp'
import Footer from '../Footer'

const Burger = ({isAuthenticated}) => {

  const food = [
    {
      img: b1,
      heading: "Juicy Chicken Burger",
      desc: "Trying to eat lighter and healthier? Then try this Juicy Chicken Burger and satisfy all of your cravings for delicious burgers. These patties are made with ground chicken and one secret ingredient, spinach. This makes them super moist and juicy. Plus, you don’t need breadcrumbs to make these patties.",
      spicy: "Medium",
      type: non,
      price: "129" 
    },
    {
      img: b2,
      heading: "Chicken Teriyaki Burgers ",
      desc: "These Chicken Teriyaki Burgers are amazingly simple while also being ridiculously delicious. Caramelized burgers that are fried up in minutes, a pile of sesame slaw on top, and a perfectly toasted bun. YUM.",
      spicy: "Less",
      type: non,
      price: "151" 
    },
    {
      img: b3,
      heading: "Chipotle Cheddar Chicken Burgers",
      desc: "A new summer grilling favorite, Chipotle Cheddar Chicken Burgers. Smoky, slightly spicy, chipotle-seasoned chicken burgers grilled until crispy with melty cheddar cheese. The burgers are then sandwiched between toasted buns and topped with creamy, spicy-sweet, smoky mayo.",
      spicy: "More",
      type: non,
      price: "280" 
    }
  ]
  console.log("isAuthenticated in Burger component:", isAuthenticated);
  return (
    <div>
      <div className='mt-[10%] xs:mt-[25%] ml-[5%]'>
        <p className='text-4xl lilita'>Chicken <span className='text-[#eb5554] text-4xl lilita'>Burger</span></p>
        <div className='flex flex-col mt-[4%]'>
          {food.map((item, index) => (
            <BurgerDetail key={index} food={item} isAuthenticated={isAuthenticated}/> 
          ))}
        </div>
      </div>
      <div className='mt-[70px]'>
        <Footer/>
      </div>
    </div>
  )
}

export default Burger
