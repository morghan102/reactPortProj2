import React, { useState, useEffect } from 'react';
import formatCurrency from './util.js'
import { PRODUCTS } from '../shared/products';

export default function Products() {

    const [products, setProducts]=useState([]);
    // usestate() takes the initial state as an argument and returns an array with two items. The first item is a variable containing the state, which you will often use in your JSX. The second item in the array is a function that will update the state.

    // i gave up on the json data AGGGGHHHHHAGSHGJGDJAS
    // const getData=()=>{
    //   fetch('data.json'
    //   ,
    //   {
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //   }
    //   )
    //     .then(function(response){
    //       console.log(response)
    //       return response.json();
    //     })
    //     .then(function(myJson) {
    //       console.log(myJson);
    //       setProducts(myJson);
    //     });
    // }
    // useEffect(()=>{
    //   getData()
    // },[])

    return (
        <div>
            <ul className="products">
                {products.length > 0 && products.map(product => (
                    <li key={product._id}>
                        <div className="product">
                            <a href={"#" + product._id}>
                                <img src={product.image} alt={product.title} />
                                <p>
                                    {product.title}
                                </p>
                            </a>
                            <div className="productPrice">
                                <div>
                                    {formatCurrency(product.price)}
                                </div>
                                <button className="button primary">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}