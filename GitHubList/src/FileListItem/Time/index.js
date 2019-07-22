import React from 'react';
import './style.css';

const Time = ({time}) => {
    return (
        <td className='time-container'>
            <p className='time'>{time}</p>
        </td>
    )
}

export default Time;