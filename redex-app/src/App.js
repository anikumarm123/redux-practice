import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Home from './routerPractice/Home';
import Profile from './routerPractice/Profile';
import CartItem from './routerPractice/CartItem';
import {product} from './routerPractice/Context';
import Favorite from './routerPractice/Favorite';
import { useReducer } from 'react';
import { productReducer, products } from './routerPractice/reducer';


function App() {
   const [state,dispatch] = useReducer(productReducer,products)
  return (
    <div>
      <product.Provider value={{state,dispatch}}>
        <BrowserRouter>
        {state?.isAuthenticated?
        <Routes>
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='cartItem' element={<CartItem/>}></Route>
          <Route path='fav' element={<Favorite/>}></Route>
          <Route path='*' element={<Navigate to='profile'></Navigate>}></Route>
        </Routes>:<Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Navigate to='/'></Navigate>}></Route> 
       </Routes>}
        </BrowserRouter>
      </product.Provider>
    </div>
  );
}

export default App;

