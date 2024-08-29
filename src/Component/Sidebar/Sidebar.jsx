import React, { useState } from 'react';
import {
    FaTh,
    FaBuilding,
    FaAddressBook,
    FaUserGraduate,
    FaMoneyBill,
    FaBookOpen,
    FaBars,
} from "react-icons/fa";
 import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false); // State to handle sidebar open/close
    const [activeIndex, setActiveIndex] = useState(null); // State to handle active submenu

    const toggle = () => setIsOpen(!isOpen); // Toggle sidebar open/close
    const toggleSubmenu = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle submenu open/close
    };

    const menuItem = [
        {
            path: "/admission",
            name: "Admission",
            icon: <FaTh />,
            subItem: [
                { text: 'Subitem 1', path: '/admission/subitem1' },
                { text: 'Subitem 2', path: '/admission/subitem2' }
            ]
        },
        {
            path: "/about",
            name: "About",
            icon: <FaBuilding />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaAddressBook />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaUserGraduate />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaMoneyBill />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaBookOpen />
        }
    ];

    return (
        <div className="container"> {/* Updated to apply flex container */}
            <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}> {/* Dynamically add classes based on isOpen state */}
                <div className="top_section">
                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <img src="/logo-drig.png" alt="Logo" style={{ width: '100%',height:'30%' }} />
                    </h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} /> {/* Toggle sidebar on click */}
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <div key={index}>
                            <NavLink to={item.path} className="link" activeclassname="active" onClick={() => toggleSubmenu(index)}>
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                            {item.subItem && activeIndex === index && (
                                <div style={{ display: isOpen ? "block" : "none", marginLeft: "20px" }}>
                                    {item.subItem.map((sub, subIndex) => (
                                        <NavLink to={sub.path} key={subIndex} className="link" activeclassname="active">
                                            <div className="link_text">{sub.text}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
            <main className={`main-content ${isOpen ? 'main-content-expanded' : 'main-content-collapsed'}`}>{children}</main> {/* Dynamically add classes based on isOpen state */}
        </div>
    );
};

export default Sidebar;
