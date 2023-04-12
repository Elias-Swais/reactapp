import React, { useState } from 'react'

import './MainContent.css'



function MainContent(){
    const [product,setProduct] = useState('')
    const [price = Math.random(), setPrice] = useState('')
    const [error,setError] = useState("")
    
    const handleProductChange = (event: any) =>{
        setProduct(event.target.value)
    }
    const handlePriceChange = (event: any) =>{
        if(product.length < 5){
            setError("The product should be atleast 5 characters long")
            return
        }
        setPrice(event.target.value)
    };  



    return(
        <>
        <h1>Shopping Form</h1>
        <form>
            <label>
                Product Name: <input type="text" value={product} onChange={handleProductChange}/>
            </label>
            <label>
                Product Price: {" "}
                <input type="text"  value ={price} onChange={handlePriceChange}/>
            </label>
            <p>{error}</p>
            <button type ="submit">Add Product</button>
        </form>
        <p>
        < span className="productColor">{product && "Your Product's name is " +`${product}`}</span>
      
        
        <br />
        <span className="priceColor">{price && "Your price is "+`${price} , good luck affording that :P `}</span>
        
      </p>
        </>
    );
      
    
}

export default MainContent;