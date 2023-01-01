import React from 'react';
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({id,title,image,price,rating}) {

  const [{ cart }, dispatch] = useStateValue();
  console.log("info", id, title, image, price, rating);
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };


  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className='checkoutProduct_info'>
       <p className='checkoutProduct_title'>{title}</p>

       <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>

        <button className="" onClick={removeFromCart}>
        Remove from Cart
      </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
