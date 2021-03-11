import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Team = () => {
    const [teams, serTeams] = useState([]);
    const team = teams.slice(0,12);
    useEffect( () => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => serTeams(data.teams))
    },[])
    return (
        <div  className="container cart my-5">
            <div className="row">
                {
                    team.map(team => <Cart team={team} key={team.idTeam}></Cart>)
                }
            </div>
            
        </div>
    );
};

export default Team;