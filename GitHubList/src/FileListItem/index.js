import React from 'react';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';



const FileListItem = ({data}) => (
    <tr className='list'>
        <FileName name={data.name} type={data.type}/>
        <CommitMessage message={data.message}/>
        <Time time={data.time}/>
    </tr>
);
        

export default FileListItem;