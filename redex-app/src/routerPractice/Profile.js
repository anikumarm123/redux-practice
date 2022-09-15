import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { product } from './Context'



const Profile = () => {
   
   const cartNav = useNavigate()

  const { state,dispatch } = useContext(product)
  const listItem = state.ListItems
   
  const CartFun =(data)=>{
  const cartItem = state.CartItem
  const checkDuplicat = cartItem.some((item)=>item.id === data.id)
  
  if(checkDuplicat === false){
  dispatch({type:'AddToCart',payload:[...cartItem,{...data,qty:1}]})
  }
 }
const fav =(data)=>{
  const favorite = state.Favorite
  const checkDuplicat = favorite.some((item)=>item.id === data.id)
  if(checkDuplicat === false){
    dispatch({type:'Favorite',payload:[...favorite,data]})  
  }
  
}
const viewCart =()=>{
  cartNav('/cartItem')
}
const viewFav =()=>{
  cartNav('/fav')
}
  return (
    
    <div className='view' >
      <button className='viewbtn' onClick={()=>viewCart()}>View<i className="fa fa-shopping-cart" ></i>  Items</button>
      <button className='viewbtn' onClick={()=>viewFav()}>View<i className="fa fa-heart"></i> items</button>
      <div className='mainflx'>
         {listItem.map((data,index)=>
            <div className='eachdata' key={index}> 
            <h1>{data.name}</h1>
             <img src={data.image}></img><br></br>
             <button onClick={()=>CartFun(data)}><i className="fa fa-shopping-cart" ></i></button>
             <button onClick={()=>fav(data)}><i className="fa fa-heart"></i></button>  
            </div>
         )
         }
         </div>
    </div>
  )
}

export default Profile