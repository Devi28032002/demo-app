import React from 'react';
//  import './AdmissionEn.css'

 import { FaFilePdf, FaPrint, FaCopy, FaFileExcel } from 'react-icons/fa';
 
const AdmissionEn = () => {
  return (
    <div className='enquiryContainer'>
      <h1 className='enquiry-header'>Select Criteria</h1>
      <div className='form-container'>
      <div className='form-group'>
        <label>Class</label>
        <select>
          <option value=''>Select</option>
          <option value='1'>1st Class</option>
          <option value='2'>2nd Class</option>
          <option value='3'>3rd Class</option>
          <option value='4'>4th Class</option>
          <option value='5'>5th Class</option>
          <option value='6'>6th Class</option>
          <option value='7'>7th Class</option>
          <option value='8'>8th Class</option>
          <option value='9'>9th Class</option>
          <option value='10'>10th Class</option>
        </select>
      </div>
      <div className='form-group'>
        <label>Source</label>
        <select>
          <option value=''>Select</option>
          <option value='Adverticement'>Adverticement</option>
          <option value='online'>Online front-site</option>
          <option value='Google Ads'>Google Ads</option>
          <option value='Adverticement'>Adverticement</option>
        </select>
      </div>
      <div className='form-group'>
        <label>Enquiry From Date *</label>
        <input type='date' />
      </div>
      <div className='form-group'>
        <label>Enquiry To Date *</label>
        <input type='date' />
      </div>
      <div className='form-group'>
        <label>Status</label>
        <select>
          <option value=''>Select</option>
          <option value='active'>Active</option>
          <option value='passive'>Passive</option>
          <option value='won'>Won</option>
          <option value='mute'>Mute</option>
        </select>
      </div>
      </div>

      <div className='Adenquiry'>
        <h1 className='admisHeading'>Admission Enquiry</h1>
       <button className='addButton'>Add+</button> 
      </div>

      <div className='fileUpload'>
      <div className="navbar-search2">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="file-icons">
        <FaFilePdf className="file-icon" title="PDF" />
        <FaPrint className="file-icon" title="Print" />
        <FaCopy className="file-icon" title="Copy" />
        <FaFileExcel className="file-icon" title="Excel" />
      </div>
      </div>


    </div>
  );
}

export default AdmissionEn;
