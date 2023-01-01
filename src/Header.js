import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import  SearchIcon  from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
const [{cart ,user}] = useStateValue();

const login = ()=>{
  if(user){
    auth.signOut();
  }
}

  return (
    <nav className='header'>
      <Link to="/">
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''></img>
      </Link>
  
  {/* Search bar */}

     <div className='header_search'>
      <input type="text" className='header_searchInput' />
      <SearchIcon  className='header_searchIcon'/>
      </div>

      {/*4 links   */}

    <div className='header_nav'>
      {/* 1st link */}

   <Link to={!user && "/login"} className='header_link'>
    <div onClick={login} className='header_option'>
      <span className='header_option1'>Hello {user && user.email}</span>
         <span className='header_option2'>{user ? "Sign Out" : "Sign In"}</span>
    </div>
   </Link>

   {/* 2nd link */}

   <Link to="/" className='header_link'>
    <div className='header_option'>
      <span className='header_option1'>Returns</span>
         <span className='header_option2'>& Orders</span>
    </div>
   </Link>

   {/* 3rd link */}

   <Link to="/" className='header_link'>
    <div className='header_option'>
      <span className='header_option1'>Your</span>
         <span className='header_option2'>Prime</span>
    </div>
   </Link>

   <Link to="/checkout" className='header_link'>
    <div className='header_optionBasket'>
      <ShoppingBasketIcon />
      <span className='header_option2 header_basketCount'>{cart?.length}</span>
    </div>
   </Link>

    </div>

    </nav>
  )
}

export default Header
