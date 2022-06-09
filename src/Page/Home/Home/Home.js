import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../../Inventories/Inventories';
import DealOfTheDays from '../DealOfTheDays/DealOfTheDays';
import FeaturesProducts from '../FeaturesProducts/FeaturesProducts';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <DealOfTheDays></DealOfTheDays>
            <FeaturesProducts></FeaturesProducts>
        </div>
    );
};

export default Home;