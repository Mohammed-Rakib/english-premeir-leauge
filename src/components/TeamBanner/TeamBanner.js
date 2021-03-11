import React from 'react';
import './TeamBanner.css'
const TeamBanner = (props) => {
    const {strTeamBanner} = props.team;
    return (
        <div className='teamBanner'>
            <img src={strTeamBanner} alt=""/>
        </div>
    );
};

export default TeamBanner;