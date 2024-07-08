// App.js
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTopOnPageChange from './components/ScrollToTopOnPageChange';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Burger from './components/FamousDishPages/Burger';
import Fries from './components/FamousDishPages/Fries';
import Pizza from './components/FamousDishPages/Pizza';
import ProtectedRoute from './ProtectedRoutes';
import { auth } from '../firebase';
import AppLayout from './AppLayout';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import About from './components/Cards/About';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const isAuthenticated = user !== null;
  

  return (
    <CartProvider>
    <BrowserRouter>
      <ScrollToTopOnPageChange />
        <Routes>
          <Route path='/' element={<AppLayout><Landing isAuthenticated={isAuthenticated}/></AppLayout>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element = {<AppLayout><About/></AppLayout>}/>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/burgers' element={<AppLayout><Burger isAuthenticated={isAuthenticated}/></AppLayout>} />
            <Route path='/fries' element={<AppLayout><Fries isAuthenticated={isAuthenticated} /></AppLayout>} />
            <Route path='/pizza' element={<AppLayout><Pizza isAuthenticated={isAuthenticated} /></AppLayout>} />
            <Route path='/cart' element={<AppLayout><Cart/></AppLayout>}/>
          </Route>
          
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
