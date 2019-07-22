import React from 'react';
import './style.css'

const CommitMessage = ({message}) => {
    return (
        <td className='commitmessage-container'>
            <p className='commit-message'>{message}</p>
        </td>
    )
}

export default CommitMessage;