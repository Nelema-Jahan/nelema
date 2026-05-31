import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='ResumePage'>
      <div className='ResumeContainer'>
        <div className='ResumeHeader'>
          <div>
            <h1>NELEMA JAHAN</h1>
            <p className='ResumeTitle'>aspiring full stack developer | Software Engineering Student</p>
          </div>
          <button className='DownloadBtn' onClick={downloadResume}>
            <FaDownload /> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
