import React from 'react';

const Hamburger = (props) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6663 4.66699H3.33301" stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.6663 8.25684H3.33301" stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.6663 11.8457H3.33301" stroke={props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Hamburger;