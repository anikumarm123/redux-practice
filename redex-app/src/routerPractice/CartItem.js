import { useContext } from "react";
import { product } from "./Context";

const CartItem = () => {

const { state,dispatch } = useContext(product) 
const cartList = state.CartItem

  const plusBtn =(data)=>{
    
    const check = cartList.some((inc)=>inc.id === data.id)
    if(check){
        const item = cartList.map((para)=>{
            if(para.id === data.id){
              return {...para,qty:para.qty+1}
            }
            else{
              return para
            }     
      })
      dispatch({type:'AddToCart',payload:item})  
    }
  }
  
const minusBtn = (minus)=>{
  if(minus.qty > 1){
  const check = cartList.some((inc)=>inc.id === minus.id)
  if(check){
      const item = cartList.map((para)=>{
          if(para.id === minus.id){
            return {...para,qty:para.qty-1}
          }
          else{
            return para
          }     
    })
    dispatch({type:'AddToCart',payload:item})  
  }
}
else{
  removeFun(minus)
}
}
const removeFun = (r)=>{
   const remove = cartList.filter((data)=> data.id !== r.id )
   dispatch({type:'AddToCart',payload:remove})  
}

  return (
    <div className='order'>
      <h1>Order Items</h1>
      <div className='orderitem'>
       {cartList.map((data,index)=>
        <div className='ordereachitem' key={index}> 
        <h2>{data.name}</h2>
         <img src={data.image}></img><br></br>
         <button onClick={()=>plusBtn(data)}>+</button>
         <span>Quandity : {data.qty}</span>
         <button onClick={()=>minusBtn(data)}>-</button><br></br>
         <button onClick={()=>removeFun(data)}>remove</button>
         </div>
    )}
      </div>
      
    </div>
  )
}

export default CartItem