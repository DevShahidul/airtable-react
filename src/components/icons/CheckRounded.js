import React from 'react';

const CheckRounded = (props) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.2071 7.20711C11.5976 6.81658 11.5976 6.18342 11.2071 5.79289C10.8166 5.40237 10.1834 5.40237 9.79289 5.79289L7 8.58579L6.20711 7.79289C5.81658 7.40237 5.18342 7.40237 4.79289 7.79289C4.40237 8.18342 4.40237 8.81658 4.79289 9.20711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.2071 7.20711Z" fill={props.color}/>
    </svg>
  )
}

export default CheckRounded;