import React from 'react'
import { Link, json, useLoaderData } from 'react-router-dom'
import User from '../components/User';

const ProductsPage = () => {
    const PRODUCTS = useLoaderData();

  return (
    <>
        {/* <h1>This is Products Page</h1> */}
        {
            PRODUCTS.map((product) =>(
                <Link to = {`/ProductsPage/${product.id}`} key={product.id}>
                    <div className='card'>
                        <h2>{product.title}</h2>
                        <User userID={product.userId}/>
                        <hr />
                    </div>
                </Link>
            ))
        }

    </>
  )
}

export default ProductsPage

export const loader = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw json({message : "Cannot get posts now."},{status : 500})
    }else{
        const products = await response.json();
        console.log(products);
        return products;
    }
}