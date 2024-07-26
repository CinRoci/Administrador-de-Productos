import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

export default props => {
    const { id } = props;
    const [product,setProduct]=useState();
    const [loaded, setLoaded]=useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
               
            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
          {loaded && (
            <>
            <ProductForm
                onSubmitProp={updateProduct}
                initialTile={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
            />
            <DeleteButton  productId={product._id} successCalllback={() => 
                props.history.push("/products")} />
            </>
          )}
        </div>
    )
}

