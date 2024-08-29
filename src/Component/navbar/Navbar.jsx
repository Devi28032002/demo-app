import React from 'react'
import { FaSearch, FaTasks, FaCalendarAlt, FaWhatsapp, FaUser } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">EduTech</a>
      </div>
      <div className="navbar-actions">
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="button"><FaSearch /></button>
      </div>
      
        <select name="currency" className="navbar-select">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <select name="language" className="navbar-select">
          <option value="EN">EN</option>
          <option value="ES">Hindi</option>
        </select>
        <button type="button" className="navbar-icon"><FaTasks /></button>
        <button type="button" className="navbar-icon"><FaCalendarAlt /></button>
        <button type="button" className="navbar-icon"><FaWhatsapp /></button>
        <button type="button" className="navbar-icon"><FaUser /></button>
      </div>
    </nav>
  )
}

export default Navbar;
