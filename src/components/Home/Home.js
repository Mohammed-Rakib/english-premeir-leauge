import React from 'react';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';
import './Home.css'
const Home = () => {

    return (
        <div className="home">
            <Banner></Banner>
            <Team/>
            
        </div>
    );
};

export default Home;