import React from 'react';

const ChevronDown = (props) => {
  return (
    <svg {...props} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L5 4.08579L8.29289 0.792894C8.68342 0.402369 9.31658 0.402369 9.70711 0.792893C10.0976 1.18342 10.0976 1.81658 9.70711 2.20711L5.70711 6.20711C5.51957 6.39464 5.26522 6.5 5 6.5C4.73479 6.5 4.48043 6.39464 4.29289 6.20711L0.292893 2.20711C-0.097631 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill={props.color} />
    </svg>
  )
}

export default ChevronDown;