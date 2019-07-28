import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const DisplayName = ({name,user}) => {
    return (
        <div className='displayname-container'>
        <p className='display-name'>{name}</p>
        <p className='display-user'>{user}</p>
        </div>
    )
}

DisplayName.propTypes = {
    name:PropTypes.string.isRequired,
    user:PropTypes.string.isRequired,
}

export default DisplayName;