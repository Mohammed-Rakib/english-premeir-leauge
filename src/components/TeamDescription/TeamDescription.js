import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa";
import './TeamDescription.css'
const TeamDescription = (props) => {
    const {strDescriptionEN, strTwitter, strYoutube, strFacebook, strInstagram} = props.team;
    return (
        <div>
            <div className="container p-2 description ">
            <p>{strDescriptionEN}</p>
            </div>
            <div className="social-meadia mb-4">
           <a href={strFacebook}> < FaFacebookF className="icon" /> </a>
           <a href={strInstagram}> <FaInstagram className="icon"/> </a>
           <a href={strTwitter}> <FaTwitter className="icon"/> </a>
           <a href={strYoutube}> <FaYoutube className="icon"/> </a>
            </div>
        </div>
    );
};

export default TeamDescription;