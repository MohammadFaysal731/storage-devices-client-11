import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
        </div>
    );
};

export default Header;