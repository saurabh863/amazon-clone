import React, { useEffect } from "react";
import './App.css';
import  { Route, Routes} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";







function App() {
  const [{user} ,dispatch] = useStateValue();

  useEffect(()=>{
  const unsubscribe= auth.onAuthStateChanged((authUser)=>{
    if(authUser){

      dispatch({
        type:"SET_USER",
        user:authUser
      })

    } else{
     dispatch({
      type:"SET_USER",
        user:null
     })
    }
   })
   return ()=>{
    unsubscribe();
   }
  },[])
  return (
    
    <div className="app">
  
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/checkout" element={<Checkout/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
    </Routes>
       
       
       
       
    </div>
  
  );
}

export default App;
