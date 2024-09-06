import React, { useState } from 'react';
import './index.css';

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="/images/Quantum Logo.jpg" className='logo' />
      </div>
      <div className = "navbar-details">
      <ul class="menu">
                <nav><a href="#home" class="menu">Home</a></nav>
                <nav><a href="#video" class="menu">Video</a></nav>
                <nav><a href="#writting" class="menu">Writting</a></nav>
                <nav><a href="#pedcast" class="menu">Podcast</a></nav>
                <nav><a href="#portfolio" class="menu">Portfolio</a></nav>
            </ul>
    </div>
    </div>




  );
}
export default Navbar;


