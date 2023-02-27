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

    const removeProduct = async (id) =>{
      console.warn(id);
      let result = await fetch(`http://localhost:5000/delete/${id}`,{
        method:'Delete'
      });
      result = await result.json();
      console.warn(result);
      getProducts();
    }

  return (
    <div className='product-list'>
      <h2>Products Lists</h2> 
      <ul>
        <li>S_No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Remove</li>
      </ul>
     {
      products.map((item,index) =>
      <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>${item.price}</li>
        <li>{item.category}</li>
        <li>{item.company}</li>
        <li><button style={{backgroundColor: 'indianred', color:'white'}} onClick={() => removeProduct(item._id)} type='button' >Delete</button></li>
      </ul>
      )
     }
    </div>
  )
}

export default Product;