// src/components/Header/Logo.js
import React from 'react';
import logo from '../../assets/logo.png';
import './Logo.css';

const Logo = () => {
  return <img src={logo} alt="Logo" className="logo" />;
};

export default Logo;