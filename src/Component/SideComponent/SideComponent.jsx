import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './SideComponent.css';
import {
  FaTh,
  FaBuilding,
  FaAddressBook,
  FaUserGraduate,
  FaMoneyBill,
  FaBookOpen,
  FaClipboardList,
  FaShieldAlt,
  FaVideo,
  FaVideoSlash,
  FaDollarSign,
  FaBars,
} from 'react-icons/fa';

import SidebarItem from './SidebarItem';
// import AdmissionEn from '../AdmissionEn';
// import Home from '../Home';

// const Home = () => {
//   return (
//     <div>
//       <Link to="/admission" className="admission-link">
      
//       </Link>
//     </div>
//   );
// };

const App = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <img src="/logo-drig.png" alt="Logo"/>
        </div>
        <div className="current-session-quick-links">
          <p>Current Session: 2024-25</p>
          <Link to="/" className="current-session">
          <span className="subItems">
      <FaTh /> Quick Links
    </span>
          </Link>
        </div>

        <ul>
          <SidebarItem
            icon={FaBuilding}
            text="Multi Branch"
            subItems={[
              { text: 'Subitem 1', path: '/multi-branch/subitem1' },
              { text: 'Subitem 2', path: '/multi-branch/subitem2' }
            ]}
          />
          <SidebarItem
            icon={FaAddressBook}
            text="Front Office"
            subItems={[
              { text: 'Admission Enquiry', path: '/admission' },
              { text: 'Visitor Book', path: '/front-office/visitor-book' },
              { text: 'Phone Call Log', path: '/front-office/phone-call-log' },
              { text: 'Postal Dispatch', path: '/front-office/postal-dispatch' }
            ]}
          />
          <SidebarItem 
            icon={FaUserGraduate}  
            text="Student Information"
          />
          <SidebarItem
            icon={FaMoneyBill}
            text="Fees Collection"
          />
          <SidebarItem
            icon={FaBookOpen}
            text="Online Course"
          />
          <SidebarItem
            icon={FaClipboardList}
            text="Behaviour Records"
          />
          <SidebarItem
            icon={FaShieldAlt}
            text="Two Factor Authentication"
          />
          <SidebarItem
            icon={FaVideo}
            text="Gmeet Live Classes"
          />
          <SidebarItem
            icon={FaVideoSlash}
            text="Zoom Live Classes"
          />
          <SidebarItem
            icon={FaDollarSign}
            text="Income"
          />
        </ul>
      </div>

      <div className={`sidebar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* <div className="main-content">
        <Routes>
          <Route path="/admission" element={<AdmissionEn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div> */}

<main className={`main-content ${isOpen ? 'main-content-expanded' : 'main-content-collapsed'}`}>{children}</main> {/* Dynamically add classes based on isOpen state */}

    </>
  );
};

export default App;
