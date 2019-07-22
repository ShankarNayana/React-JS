import React from 'react';
import FolderIcon from '../../assets/icons/folder.svg';
import FileIcon from '../../assets/icons/file.svg';
import './style.css';

const FileName = ({name,type}) => {
    return (
        <td className='filename-container'>
            <img src={type==='folder' ? FolderIcon : FileIcon} className="folder-icon" alt='icon' />
            <p className='file-name'>{name}</p>
        </td>
    )
}

export default FileName;
