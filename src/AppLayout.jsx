// AppLayout.js
import React from 'react';
import Navbar from './components/NavBar/Navbar';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
