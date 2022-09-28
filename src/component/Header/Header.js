import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'; 

const HEADER = () => {
    return (
        <nav className='hnav'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">HOME</a>
                <a href="/orders">ORDERS</a>
                <a href="/inventory">INVENTORY</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default HEADER;