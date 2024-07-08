// Navbar.js
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../../../firebase'; // Import db from firebase.js
import { doc, getDoc } from 'firebase/firestore';
import user from '../../assets/user.webp';
import next from '../../assets/next.webp';
import menu from '../../assets/menu.webp';
import close from '../../assets/close.webp';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserName(`${userData.firstName} ${userData.lastName}`);
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUserName('');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='h-[120px] xs:h-[90px] items-center z-50 fixed top-0 bg-opacity-100 backdrop-filter backdrop-blur-lg w-screen flex justify-between'>
        <div className='ml-[4%]'>
          <img className='w-[120px] xs:w-[80px]' src={logo} alt="" />
        </div>
        <div className='xs:hidden'>
          <ul className='flex gap-8 text-xl text-gray-500'>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#EB5554]' : 'hover:text-[#EB5554]')}>Home</NavLink></li>
            <li><NavLink to="/cart" className={({ isActive }) => (isActive ? 'text-[#EB5554]' : 'hover:text-[#EB5554]')}>Cart</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#EB5554]' : 'hover:text-[#EB5554]')}>About Us</NavLink></li>
          </ul>
        </div>
        <div className='flex gap-5 items-center mr-[4%] xs:mr-[4%]'>
          {isLoggedIn ? (
            <>
              <div className='flex gap-5 mr-0 xs:hidden'>
                <button onClick={toggle}><img className='w-[35px]' src={user} alt="" /></button>
                {isOpen && (
                  <div className='h-[100px] flex items-center justify-around w-[170px] bg-white rounded-2xl'>
                    <button onClick={toggle}><img className='w-[24px]' src={next} alt="" /></button>
                    <div className='flex flex-col gap-3'>
                      <p className='text-[#eb5554] text-xl lilita'>{userName}</p>
                      <button className='w-[100x] pl-2 pr-2 h-[35px] border-2 border-[#eb5554] rounded-full' onClick={handleLogout}>Log Out</button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login" className='text-[#EB5554] font-semibold text-xl xs:text-[17px]'>Login</NavLink>
              <NavLink to="/signup" className='w-[90px] flex items-center justify-center h-[35px] xs:h-[25px] border xs:text-[15px] border-[#EB5554] border-solid rounded-3xl'>Sign Up</NavLink>
            </>
          )}
          <img onClick={toggle} className='hidden xs:flex w-[25px] mr-0 xs:mr-[10%]' src={menu} alt="" />
        </div>
        {isOpen && (
          <>
            <div>
            <div  className='hidden xs:flex flex-col gap-4 bg-[#FFF0E9] xs:h-screen fixed top-0 right-0 w-[250px] h-full overflow-y-auto pt-8 xs:rounded-xl transition-all duration-300 xs:z-50'>
            <button className='xs:ml-5 xs:mb-0' onClick={toggle}>
              <img className='xs:w-[20px]' src={close} alt="" />
            </button>
            <div className='w-full flex rounded-xl flex-col h-[20%] mb-[5%] bg-blue-400 relative mt-0'>
                {isLoggedIn ? (<><img className='w-[20px] absolute xs:bottom-[14%] text-xl xs:left-[7%]' src={user} alt="" /> <p className='absolute xs:bottom-[10%] lilita text-xl xs:left-[17%]'>{userName}</p></>) : (<p className='absolute xs:bottom-[10%] lilita text-xl xs:left-[10%]'>Guest</p>)}
            </div>
            <ul className='flex flex-row xs:flex-col gap-10 items-center'>
                <li>
                <NavLink onClick={toggle} to="/" className={({isActive})=>`font-semibold transition-transform duration-300 transform hover:scale-105 ${isActive ? "text-red-600 text-xl"  : "text-blue-600"} text-md `}
                >Home</NavLink> 
                </li>
                <li> <NavLink onClick={toggle} to="/cart" className={({isActive})=>`${isActive ? "text-red-600 text-xl" : "text-blue-600"} font-semibold transition-transform duration-300 transform hover:scale-105 text-md`}
                >Cart</NavLink> 
                </li>
                <li> <NavLink onClick={toggle} to="/about" className={({isActive})=>`${isActive ? "text-red-600 text-xl" : "text-blue-600"} font-semibold transition-transform duration-300 transform hover:scale-105 text-md`}
                >About Us</NavLink> </li>
                <li> <NavLink onClick={handleLogout} to="/about" className={({isActive})=>`${isActive ? "text-red-600 text-xl" : "text-blue-600"} font-semibold transition-transform duration-300 transform hover:scale-105 text-md`}
                >{isLoggedIn ? (<p className='text-blue-600'>LogOut</p>):(null)}</NavLink> </li>

            </ul>
        </div>
            </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
