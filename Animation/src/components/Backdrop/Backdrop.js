import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const cssClasses = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClose"]
  console.log(cssClasses.join(' '));

  return (
    <div className={cssClasses.join(' ')}></div>
  )
};

export default backdrop;
