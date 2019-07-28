import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Description = ({description}) => {
    return (
        <div className='description-container'>
        <p className='description'>{description}</p>
        </div>
    )
}

Description.propTypes = {
    description: PropTypes.string.isRequired,
}

export default Description;