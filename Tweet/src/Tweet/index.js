import React from 'react';
import DisplayImage from './DisplayImage';
import DisplayName from './DisplayName';
import Time from './Time';
import Description from './Description';
import Options from './Options';
import nayana from '../assets/images/nayana.jpg';
import './style.css';

const Tweet = () => {
    return (
        <div className='tweet-container'>
            <DisplayImage src={nayana}/>
            <DisplayName name={`Nayana Shankar`} user={`@nayana`}/>
            <Time time={'.4d'}/>
            <Description description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}/>
            <Options/>
        </div>
    )
}

export default Tweet;
    