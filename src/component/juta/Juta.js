import React from 'react';
import'./Juta.css';

const Juta = (props) => {
    const {name ,img, seller,ratings}=props.product;
    const {handleaddtoCart}=props;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p><small>seller:{seller}</small></p>

            <p><small>Ratings:{ratings}</small></p>
          
           
           </div>
             <button onClick={()=>handleaddtoCart(props.product)} className='btn-cart'>
            <p>Add to cart</p>
           </button>
        </div>
    );
};

export default Juta;