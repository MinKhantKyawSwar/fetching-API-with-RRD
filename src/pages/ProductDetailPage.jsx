import React from 'react'
import { useNavigate, json, useLoaderData } from 'react-router-dom'
import User from '../components/User'

const ProductDetailPage = () => {
    const post = useLoaderData();
    const {title, body, userId} = post;

    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate("/ProductsPage")
    }
  return (
    <>
        <h1>{title}</h1>
        <User userID = {userId}/>
        <p>{body}</p>
        <button onClick={goBackHandler}> Go back to Posts</button>
    </>
  )
}

export default ProductDetailPage

export const loader = async({request, params}) => {
  console.log(params);
  const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
 
  if (!response.ok){
    throw json({message : "Cannot find your post."}, {status : 404})
  }else {
    const post = await response.json();
    console.log(post)
    return post;
  }
}
