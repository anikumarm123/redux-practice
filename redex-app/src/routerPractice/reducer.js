export const products = {
     ListItems:[
          {id:1, name: "Dhosai", image: require("../image/item-1.jpg"),price:'$60',offer:'$40'},
          {id:2, name: "Boori", image: require("../image/item-2.jpg"),price:'$50',offer:'$40'},
          {id:3, name: "Idly", image: require("../image/item-3.jpg"),price:'$60',offer:'$50'},
          {id:4, name: "Mutton", image: require("../image/item-4.webp"),price:'$160',offer:'$130'},
          {id:5, name: "Protta", image: require("../image/item-5.jpg"),price:'$120',offer:'$80'},
          {id:6, name: "Chiken", image: require("../image/item-6.jpg"),price:'$140',offer:'$120'},
        ],
     CartItem:[] ,  
     Favorite:[],
     isAuthenticated:false
}
export const productReducer=(state=products,action)=>{
     switch(action.type){
        case "AddToCart":{
          return{
             ...state,
             CartItem:action.payload
          };
        }
        case 'Favorite':{
          return{
               ...state,
               Favorite:action.payload
          }
        }
        case 'Login':{
          return{
            ...state,
            isAuthenticated:action.payload
          }
        }
        default:{ 
          return state
        }
     }
     
}
