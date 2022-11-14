import React from 'react';

const SearchIcon = (props) => {
  return (
    <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C7.29583 12 8.49572 11.5892 9.47653 10.8907L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L10.8907 9.47653C11.5892 8.49572 12 7.29583 12 6C12 2.68629 9.31371 0 6 0ZM2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6Z" fill={props.color}/>
    </svg>
  )
}

export default SearchIcon;