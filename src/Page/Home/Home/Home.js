import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../../Inventories/Inventories';
import DealOfTheDays from '../DealOfTheDays/DealOfTheDays';
import FeaturesProducts from '../FeaturesProducts/FeaturesProducts';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <div className="text-center m-4">
                <Link className='btn btn-outline-dark text-decoration-none fs-5 ' to='/manageInventories'>ManageInventories</Link>
            </div>
            <DealOfTheDays></DealOfTheDays>
            <FeaturesProducts></FeaturesProducts>
        </div>
    );
};

export default Home;