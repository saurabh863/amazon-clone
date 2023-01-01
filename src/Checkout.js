import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';

function Checkout() {

    const [{cart}] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout_left'>

        <img className='checkout_ad' 
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''></img>
      
      {cart?.length===0 ? (
        <div>
          <h2>Your cart is empty</h2>
          <p>You have no items in your cart.
            To buy one or more items,click
            "add to cart" next to the items
          </p>
        </div>
      ) : (
        <div >
         <h2 className='checkout_title'>Your shopping cart</h2>
         {cart.map((item) =>(
         <CheckoutProduct 
         id={item.id}
         title={item.title}
         image={item.image}
         price={item.price}
         rating={item.rating}
         />
         ))}
        </div>
      )}
      </div>
      {cart.length>0 && (
        <div className='checkout_right'>
          <Subtotal />
          
           
          </div>
      )}
    </div>
  )
}

export default Checkout
