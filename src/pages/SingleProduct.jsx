
import React from 'react';
import { useParams } from 'react-router-dom';
import {findBy} from "../helper/functions"
const SingleProduct = ({products}) => 
{
    const {productId} = useParams()
    const product = findBy(products, Number(productId))
    return (
        <div className='SingleProduct'>
        <h3>Name: {product.name}</h3>
        <h4>Price: {product.price}</h4>
        </div>
    )
}

export default SingleProduct;
