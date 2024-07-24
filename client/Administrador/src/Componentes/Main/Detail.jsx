import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    return (
    
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
             </Link>
        </div>
    )
}