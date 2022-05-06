import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../../Inventories/Inventories';
import DealOfTheDays from '../DealOfTheDays/DealOfTheDays';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <DealOfTheDays></DealOfTheDays>
        </div>
    );
};

export default Home;