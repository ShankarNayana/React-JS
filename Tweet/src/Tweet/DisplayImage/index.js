import React from 'react';
import './style.css';


const DisplayImage = ({src}) => {
    return (
        <div className='displayimage-container'> 
       <img src={src} className='display-image' alt='me'/> 
       </div>      
    )
}

export default DisplayImage;