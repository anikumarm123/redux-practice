import React from 'react'
import { useContext } from "react";
import { product } from "./Context";

function Favorite() {
    const { state,dispatch } = useContext(product) 
    const favoriteList = state.Favorite

const removeFun=(data)=>{
    const fovItem = favoriteList.filter((item)=>item.id !== data.id)
    dispatch({type:'Favorite',payload:fovItem})  
}
  return (
    <div className='order'>
      <h1>Favorite Items</h1>
      <div className='orderitem'>
       {favoriteList.map((data,index)=>
        <div className='ordereachitem' key={index}> 
        <h2>{data.name}</h2>
         <img src={data.image}></img><br></br>
         <button onClick={()=>removeFun(data)}>remove</button>
         </div>
    )}
      </div>
      
    </div>
  )
}

export default Favorite