import React from 'react';
import MaleImage from '../../Photo/male.png';
import FemaleImage from '../../Photo/female.png'
import './TeamCart.css'
const TeamCart = (props) => {
    const {strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strTeamFanart4} = props.team;
    const gender = props.team.strGender;
    let image;
    if( gender === "Male"){
        image = <img className="img-fluid" src={strTeamFanart4} alt=""/>;
    }else{
        image =  <img className="img-fluid" src={FemaleImage} alt=""/>;
    }
    return (
        <div>
            <div className="row  details-cart">
                <div className="col-md-6 col-12 left-col ">
                <img className="w-25 mb-3" src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                <h6>Founded: {intFormedYear}</h6>
                <h6>Country: {strCountry}</h6> 
                <h6>Sport Type: {strSport}</h6>
                <h6>Gender: {strGender}</h6>
                </div>
                <div className="col-md-6 col-12">
                    {image}
                </div>
            </div>
        </div>
    );
};

export default TeamCart;