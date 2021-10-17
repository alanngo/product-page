
import React from 'react';
import { Link } from "react-router-dom"
const Root = () =>
(
    <div className='Root'>
        <h1>Landing page</h1>
        <Link to="/products"><button><h1>View Products</h1></button></Link>
    </div>
)


export default Root;
