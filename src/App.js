import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import AdmissionEn from './Component/AdmissionEn';
import SidebarItem from './Component/SideComponent/SidebarItem';
import Sidebar from './Component/Sidebar/Sidebar';
import Admission from './pages/Admisssion';

const App = () => {
  return (
    <div className='App'>
     <BrowserRouter>
    <Sidebar>
     <Routes>
     
      <Route path='/' exact element={<Home/>} />
        {/* <Route path='/admission' exact element = {<AdmissionEn/>} />   */}
        
      <Route path='/admission' exact element={<Admission/>}/>
     </Routes>
     </Sidebar>
     </BrowserRouter>
    </div>
  );
}

export default App;
