import React, { useState } from 'react';  
import axios from 'axios';  

const ProductForm = ({ onProductAdded }) => {  
    const [title, setTitle] = useState("");   
    const [price, setPrice] = useState("");  
    const [description, setDescription] = useState("");  
    const [error, setError] = useState(null);  
    const [success, setSuccess] = useState(false);  

    const onSubmitHandler = async (e) => {  
        e.preventDefault();  
        setError(null); // Reiniciar errores  
        setSuccess(false); // Resetea el estado de éxito  

        try {  
            const response = await axios.post('http://localhost:8000/api/product', {  
                title,  
                price,  
                description  
            });  
            console.log(response.data);  
           
            setSuccess(true); // Indicar que el producto se agregó con éxito  
            // Limpiar el formulario  
            setTitle("");  
            setPrice("");  
            setDescription("");  
        } catch (err) {  
            console.error(err);  
            setError("Error al crear el producto. Inténtalo de nuevo."); // Manejo de errores  
        }  
    }  

    return (  
        <form onSubmit={onSubmitHandler}> 
        {/* este formulario agrega los productos  por lo que el ususario ingresa */}
            <h1>Product Manager</h1>  
            {success && <p style={{ color: 'green' }}>Producto creado con éxito!</p>}  
            {error && <p style={{ color: 'red' }}>{error}</p>}  
            <p>  
                <label htmlFor='title'>Title</label><br/>  
                <input  
                    type="text"  
                    id="title"  
                    placeholder="Title"  
                    required  
                    onChange={(e) => setTitle(e.target.value)}  
                    value={title}  
                />  
            </p>  
            <p>  
                <label htmlFor='price'>Price</label><br/>  
                <input  
                    type="number"  
                    id="price"  
                    placeholder="Price"  
                    required  
                    onChange={(e) => setPrice(e.target.value)}  
                    value={price}  
                />  
            </p>  
            <p>  
                <label>Description</label><br/>  
                <textarea  
                    id="description"  
                    placeholder="Description"  
                    required  
                    onChange={(e) => setDescription(e.target.value)}  
                    value={description}  
                />   
            </p>  
            <input type="submit" value="Create"/>  
        </form>  
    );  
}  

export default ProductForm;