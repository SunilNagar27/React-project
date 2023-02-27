import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    
 

    const productHandler = async () => {
        console.warn(name,price,category,company);
    };

    return (
        <div className='login'>
            <h2>Update Product</h2>
            <input className='inputBox' value={name} onChange={(e) =>{ setName(e.target.value)}} type='text' placeholder='Enter Name' />
            
            <input className='inputBox' value={price} onChange={(e) => {setPrice(e.target.value)}} type='text' placeholder='Enter Price' />
            
            <input className='inputBox' value={category} onChange={(e) => {setCategory(e.target.value)}} type='text' placeholder='Enter category' />
            
            <input className='inputBox' value={company} onChange={(e) => {setCompany(e.target.value)}} type='text' placeholder='Enter Company' />

            <button onClick={productHandler} className="BUTTON" type='button' > Update Product </button>
        </div>
    )
};

export default UpdateProduct;