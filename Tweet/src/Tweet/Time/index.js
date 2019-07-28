import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Time = ({time}) => {
    return (
        <div className='time-container'>
        <p className='time'>{time}</p>
        </div>
    )
}

Time.propTypes = {
    time: PropTypes.string.isRequired,
}

export default Time;