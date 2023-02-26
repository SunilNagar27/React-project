import React,{ useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error,setError] = useState(false)

    const productHandler = async () => {
        const userId = JSON.parse(localStorage.getItem('users'))._id;

        if(!name || !price || !category || !company)
        {
            setError(true);
            return false;
        }

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
            { error && !name && <span className='invalid-input'>Enter Valid Name</span>}
            <input className='inputBox' value={price} onChange={(e) => {setPrice(e.target.value)}} type='text' placeholder='Enter Price' />
            { error && !price && <span className='invalid-input'>Enter Valid Price</span>}
            <input className='inputBox' value={category} onChange={(e) => {setCategory(e.target.value)}} type='text' placeholder='Enter category' />
            { error && !category && <span className='invalid-input'>Enter Valid category</span>}
            <input className='inputBox' value={company} onChange={(e) => {setCompany(e.target.value)}} type='text' placeholder='Enter Company' />
            { error && !company && <span className='invalid-input'>Enter Valid Company</span>}
            <button onClick={productHandler} className="BUTTON" type='button' > Add Product </button>
        </div>
    )
};

export default AddProduct;