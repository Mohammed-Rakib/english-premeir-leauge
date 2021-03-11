import React from 'react';
import MaleImage from '../../Photo/male.png';
import FemaleImage from '../../Photo/female.png'
import './TeamCart.css';
import {  FaRegFlag, FaTwitter, FaInstagram} from "react-icons/fa";
import { GoLocation} from "react-icons/go";
import {RiFootballFill} from "react-icons/ri"
import { CgGenderMale} from "react-icons/cg";
const TeamCart = (props) => {
    const {strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender} = props.team;
    const gender = props.team.strGender;
    let image;
    if( gender === "Male"){
        image = <img className="img-fluid" src={MaleImage} alt=""/>;
    }else{
        image =  <img className="img-fluid" src={FemaleImage} alt=""/>;
    }
    return (
        <div>
            <div className="row  details-cart">
                <div className="col-md-6 col-12 left-col ">
                <img className="w-25 mb-3" src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                <h6> <GoLocation className="fontIcon"/> Founded: {intFormedYear}</h6>
                <h6> <FaRegFlag className="fontIcon"/>Country: {strCountry}</h6> 
                <h6> <RiFootballFill className="fontIcon"/> Sport Type: {strSport}</h6>
                <h6> <CgGenderMale className="fontIconL"/>Gender: {strGender}</h6>
                </div>
                <div className="col-md-6 col-12">
                    {image}
                </div>
            </div>
        </div>
    );
};

export default TeamCart;