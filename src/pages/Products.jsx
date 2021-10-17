
import React from 'react';
import { Link} from 'react-router-dom';
const Products = ({products}) => 
{
    return (
        <div className='Products'>
        {
            products.map(e =>(
                <>
                <h1>{e.name}</h1>
                <Link to={`/product/${e.id}`}
                state={e}><button>View details</button></Link>
                </>
            ))
        }
        </div>
    )
}

export default Products;
