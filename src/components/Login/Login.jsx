import React, { useState } from 'react';
import back from '../../assets/login.webp';
import img from '../../assets/loginimg.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useCart } from '../../CartContext'; // Import useCart

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setUser } = useCart();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);

      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        navigate("/signup");
      } else if (error.code === "auth/network-request-failed") {
        setErrorMessage("Check your network connection");
      } else if (error.code === "auth/invalid-credential") {
        setErrorMessage("Please create a new account by signing up");
      } else if (error.code === "auth/too-many-requests") {
        setErrorMessage("Too many requests. You can create a new account and try again");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div>
      <div className='h-screen w-screen relative xs:flex xs:items-center xs:justify-center flex' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='ml-[60%] xs:ml-0 flex flex-col overflow-hidden relative rounded-xl justify-center items-center right-0 xs:w-[60%] xs:h-[70%] xs:bg-opacity-70 xs:backdrop-filter xs:backdrop-blur-lg w-[40%] h-screen bg-white'>
          <img className='absolute top-[-230px] w-full' src={img} alt="" />
          <img className='absolute bottom-[-250px] w-full' src={img} alt="" />
          <p className='lilita text-[#EB5554] mb-5 text-4xl'>Login</p>
          <div className='w-[65%] xs:w-[89%] xs:h-[70%] flex items-center justify-center flex-col h-[55%] rounded-xl bg-[#FFF0E9]'>
            <input
              className='w-[90%] mt-16 h-[45px] xs:h-[38px] xs:text-[15px] border-2 border-[#EB5554] text-[#EB5554] rounded-lg pl-2'
              type="text"
              placeholder='E-Mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='w-[90%] mt-5 h-[45px] border-2  xs:h-[38px] xs:text-[15px] border-[#EB5554] text-[#EB5554] rounded-lg pl-2'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='w-[90%] mt-10 h-[45px] xs:h-[38px] lilita text-white text-xl rounded-full bg-[#EB5554]'
              onClick={handleLogin}
            >
              Login
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            <div className='flex items-center justify-center w-full gap-2 mt-12'>
              <p className='lilita text-[#EB5554] xs:text-[15px]'>For New Users</p>
              <NavLink to="/signup" className='lilita xs:text-[15px]'>Sign Up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
