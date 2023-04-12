import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from "react";
const Axios = axios.defaults;

interface postProps{
  title:string
  price:string
  products: []
}

 const baseURL = "https://fakestoreapi.com/products/1"


export function Home() {
  const [post,setPost] = useState<postProps>();
  
  
  useEffect(()=>{
    axios.get(baseURL).then((response) =>{
      setPost(response.data)
    })
  },[]);

  if(!post) return "No Products!"
  return (
    <>
      <Header />
      <MainContent/>
      <div>
        <h3>Get Products</h3>
        <ul>
          <li>
            <h4>{post.title}</h4>
            <p>{post.price}</p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}