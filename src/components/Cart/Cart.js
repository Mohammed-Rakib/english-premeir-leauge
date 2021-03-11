import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const {strTeam, strTeamBadge, strSport, idTeam} = props.team;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card m-3">
            <img className='p-5 m-2' src={strTeamBadge} alt=""/>
            <div className="card-body">
            <h3>{strTeam}</h3>
            <p>Sports type: {strSport}</p>
            <a href={`/team/${idTeam}`} className="btn btn-outline-secondary">Explore  <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
            </div>
        </div>
    );
};

export default Cart;