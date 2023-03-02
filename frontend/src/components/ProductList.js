import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])



  const getProducts = async () => {
    let list = await fetch("http://localhost:5000/Products");
    list = await list.json();
    setProducts(list);
  }

  const removeProduct = async (id) => {
    console.warn(id);
    let result = await fetch(`http://localhost:5000/delete/${id}`, {
      method: 'Delete'
    });
    result = await result.json();
    console.warn(result);
    getProducts();
  }

  const searchHandler = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    }
    else {
      getProducts();
    }


  }

  return (
    <div className='product-list'>
      <h2>Products Lists</h2>
      <br />
      <input className='search-input' type='text' onChange={searchHandler} placeholder='Search Product' />
      <ul>
        <li>S_No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Remove</li>
      </ul>
      {
          products.map((item, index) =>
            <ul key={item._id}>
              <li>{index + 1}</li>
              <li>{item.name}</li>
              <li>${item.price}</li>
              <li>{item.category}</li>
              <li>{item.company}</li>
              <li><button className='Delete-button' onClick={() => removeProduct(item._id)} type='button' >Delete</button>
                <Link to={"/update/" + item._id} >    Update </Link></li>

            </ul>
          )
      }
    </div>
  )
}

export default Product;
