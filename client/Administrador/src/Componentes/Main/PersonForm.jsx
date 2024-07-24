import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor='title'>Title</label><br/>
                <input type="text" id="title" placeholder="Title" required onChange = {(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label htmlFor='price'>Price</label><br/>
                <input type="number" id="price" placeholder="Price" required onChange = {(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <textarea id="description" placeholder="Description" required onChange = {(e)=>setDescription(e.target.value)} value={description}/> 
            </p>
            <input type="submit" placeholder='Create'/>
        </form>
    )
}
