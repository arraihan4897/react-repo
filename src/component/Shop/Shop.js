import React, { useEffect, useState } from 'react';
import './Shop.css';

import Juta from '../juta/Juta';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    const handleaddtoCart= (product)=>{
        console.log(product);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Juta
                    key={product.id}
                    product={product}
                    handleaddtoCart={handleaddtoCart}></Juta>)
                }
            </div>
            <div className="cart-container"><h3>Order summery</h3> </div>
        </div>
    );
};

export default Shop;