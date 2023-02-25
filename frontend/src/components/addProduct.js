import React,{ useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const productHandler = async () => {
        const userId = JSON.parse(localStorage.getItem('users'))._id;
        console.warn(name, price, category,userId,company);

        let data = await fetch("http://localhost:5000/add-product",{
            method: 'post',
            body: JSON.stringify({name, price, category, userId, company}),
            headers: {
                'Content-type': 'application/JSON'
            },
        })
        data = await data.json();
        console.warn(data);
    };

    return (
        <div className='login'>
            <h2>Add Product</h2>
            <input className='inputBox' value={name} onChange={(e) =>{ setName(e.target.value)}} type='text' placeholder='Enter Name' />
            <input className='inputBox' value={price} onChange={(e) => {setPrice(e.target.value)}} type='text' placeholder='Enter Price' />
            <input className='inputBox' value={category} onChange={(e) => {setCategory(e.target.value)}} type='text' placeholder='Enter category' />
            <input className='inputBox' value={company} onChange={(e) => {setCompany(e.target.value)}} type='text' placeholder='Enter Company' />
            <button onClick={productHandler} className="BUTTON" type='button' > Add Product </button>
        </div>
    )
};

export default AddProduct;