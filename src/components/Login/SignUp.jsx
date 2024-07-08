import React, { useState } from 'react';
import back from '../../assets/login.webp';
import img from '../../assets/loginimg.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase'; 
import { setDoc, doc } from 'firebase/firestore';
import { useCart } from '../../CartContext';
import Swal from 'sweetalert2';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });

      setUser(user);

      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
      Swal.fire('Error Ocuured','Please try again','error');
    }
  }

  return (
    <div>
      <div className='h-screen w-screen relative xs:flex xs:items-center xs:justify-center flex' style={{backgroundImage:`url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='ml-[60%] xs:ml-0 flex flex-col overflow-hidden relative rounded-xl justify-center items-center right-0 xs:w-[60%] xs:h-[70%] xs:bg-opacity-70 xs:backdrop-filter xs:backdrop-blur-lg w-[40%] h-screen bg-white'>
            <img className='absolute top-[-230px] w-full' src={img} alt="" />
            <img className='absolute bottom-[-250px] w-full' src={img} alt="" />
            <p className='lilita text-[#EB5554]  mb-5 text-4xl'>Sign Up</p>
            <div className='w-[65%] xs:w-[89%] xs:h-[70%] flex items-center justify-center flex-col h-[55%] rounded-xl bg-[#FFF0E9]'>
                <div className='w-full mt-4 flex xs:mt-2 justify-around xs:ml-4 xs:mr-4 xs:gap-0'>
                    <input className='w-[40%] xs:mt-[10%] mt-6 xs:h-[38px] xs:text-[15px] h-[45px] border-2 border-[#EB5554] text-[#EB5554] rounded-lg pl-2' type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input className='w-[40%] h-[45px] mt-6 xs:mt-[10%] xs:h-[38px] xs:text-[15px] border-2 border-[#EB5554] text-[#EB5554] rounded-lg pl-2' type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <input className='w-[90%] ml-0 xs:ml-0 xs:text-[15px] mt-5 h-[45px] border-2 border-[#EB5554] text-[#EB5554] rounded-lg pl-2' type="text" placeholder='E-Mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='w-[90%] xs:ml-0 ml-0 mt-5 h-[45px] border-2 border-[#EB5554] text-[#EB5554] rounded-lg pl-2' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='w-[90%] xs:ml-0 ml-0 mt-10 h-[45px] lilita text-white text-xl rounded-full bg-[#EB5554]' onClick={handleSubmit}>Sign Up</button>
                <div className='flex items-center justify-center w-full gap-2 mt-16'>
                <p className='lilita text-[#EB5554]'>Already Signed Up</p>
                <NavLink to="/login" className='lilita'>Login</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
