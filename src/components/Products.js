import React from 'react';
import formatCurrency from '../util.js'
import { PRODUCTS } from '../shared/products';

export default function Products() {
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