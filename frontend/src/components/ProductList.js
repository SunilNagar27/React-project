import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async () =>{
        let list = await fetch("http://localhost:5000/Products");
        list = await list.json();
        setProducts(list);
    }
    console.warn("products", products);

  return (
    <div className='product-list'>
      <h2>Products Lists</h2> 
      <ul>
        <li>S_No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
      </ul>
     {
      products.map((item,index) =>
      <ul key={item}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>${item.price}</li>
        <li>{item.category}</li>
        <li>{item.company}</li>
      </ul>
      )
     }
    </div>
  )
}

export default Product;
