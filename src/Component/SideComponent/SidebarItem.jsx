import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideComponent.css';
import { FaChevronDown,   FaAngleDoubleRight, FaChevronLeft } from 'react-icons/fa';


const SidebarItem = ({ icon: Icon, text, subItems }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
 

  return (
    <li className={subItems ? "has-subnav" : ""}>
      <div className="sidebar-item" onClick={toggleSubmenu}>
        <div className="sidebar-icon">
          <Icon />
        </div>
        <div className="sidebar-text">{text}</div>
        <span className="sidebar-arrow">
           {isSubMenuOpen ? <FaChevronDown /> : <FaChevronLeft />}
          </span>
      </div>
      {subItems && isSubmenuOpen && (
        <ul className="sidebar-submenu">
          {
          subItems.map((subItem, index) => (
            <li key={index}>
              <Link to={subItem.path} className="sidebar-subitem">
               <FaAngleDoubleRight className='sidebar-subitem-icon' />
                {subItem.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
