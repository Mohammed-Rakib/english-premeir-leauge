import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamBanner from '../TeamBanner/TeamBanner';
import TeamCart from '../TeamCart/TeamCart';
import TeamDescription from '../TeamDescription/TeamDescription';

const TeamDetails = () => {
    const {idTeam} = useParams();
    console.log(idTeam); 
    const [team, setTeam] = useState([]);
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setTeam(data.teams))
    },[idTeam])
    console.log(team);
    return (
        <div>
            {
                team.map(team => <TeamBanner team={team} key={team.idTeam}></TeamBanner> )
            }
            <div className="container">
            {
                team.map( team => <TeamCart team={team} key={team.idTeam}></TeamCart>)
            }
            {
                team.map( team => <TeamDescription team={team} key={team.idTeam}></TeamDescription>)
            }
            </div>
        </div>
    );
};

export default TeamDetails;