import React, { useState } from 'react';
import { BiUpArrow } from "react-icons/bi";

const MoveToTop = () => {
  const [visible, setVisible] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) setVisible(true);
    else setVisible(false);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button className='MoveToTop' onClick={scrollToTop} title="Back to top">
        <BiUpArrow />
      </button>
    )
  );
};

export default MoveToTop;
