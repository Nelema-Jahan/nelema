import React from 'react';
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h1 className='ContactHeading'>Get in <b>Touch</b></h1>
      <h2 style={{textAlign: 'center', marginBottom: '50px', fontSize: '1.3em', color: '#9067C6'}}>Any Questions? <b>Feel Free to Contact!</b></h2>
      <div className='ContactPage'>

        <div className='ContactDetails' style={{display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '600px', margin: '0 auto'}}>
          <div className='ContactItem' style={{
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px', 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, rgba(144, 103, 198, 0.1) 0%, rgba(144, 103, 198, 0.05) 100%)',
            border: '2px solid rgba(144, 103, 198, 0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(144, 103, 198, 0.3)';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{fontSize: '32px', color: '#9067C6'}}>
              <MdLocationOn size={32} />
            </div>
            <div>
              <h3 style={{margin: '0 0 5px 0', color: '#fff'}}>Location</h3>
              <span style={{color: '#b8a8d4'}}>Chattogram, Bangladesh</span>
            </div>
          </div>

          <div className='ContactItem' style={{
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px', 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, rgba(144, 103, 198, 0.1) 0%, rgba(144, 103, 198, 0.05) 100%)',
            border: '2px solid rgba(144, 103, 198, 0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(144, 103, 198, 0.3)';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{fontSize: '32px', color: '#9067C6'}}>
              <MdPhone size={32} />
            </div>
            <div>
              <h3 style={{margin: '0 0 5px 0', color: '#fff'}}>Phone</h3>
              <span style={{color: '#b8a8d4'}}>+88 01615 120840</span>
            </div>
          </div>

          <div className='ContactItem' style={{
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px', 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, rgba(144, 103, 198, 0.1) 0%, rgba(144, 103, 198, 0.05) 100%)',
            border: '2px solid rgba(144, 103, 198, 0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(144, 103, 198, 0.3)';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{fontSize: '32px', color: '#9067C6'}}>
              <MdEmail size={32} />
            </div>
            <div>
              <h3 style={{margin: '0 0 5px 0', color: '#fff'}}>Email</h3>
              <a href="mailto:nelema781@gmail.com" style={{color: '#b8a8d4', textDecoration: 'none'}}>nelema781@gmail.com</a>
            </div>
          </div>

          <div className='ContactItem' style={{
            display: 'flex', 
            alignItems: 'center', 
            gap: '20px', 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, rgba(144, 103, 198, 0.1) 0%, rgba(144, 103, 198, 0.05) 100%)',
            border: '2px solid rgba(144, 103, 198, 0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(144, 103, 198, 0.3)';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{fontSize: '32px', color: '#9067C6'}}>
              <FaLinkedin size={32} />
            </div>
            <div>
              <h3 style={{margin: '0 0 5px 0', color: '#fff'}}>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/nelema-jahan-b43463362" target='_blank' rel="noreferrer" style={{color: '#b8a8d4', textDecoration: 'none'}}>linkedin.com/in/nelema-jahan-b43463362</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
