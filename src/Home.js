import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      
        <img className="home_image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
      

      {/* product id,title,price,rating,image */}
      <div className='home_row'>
      <Product
      id="12345"
      title="The Lean Startup:How constant innovation Creates Radically Successful Bussinesses Paperback"
      price={11.96}
      rating={5}
      image="https://m.media-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg"/>

<Product
      id="1234"
      title="Kenwood kMix Stand Mixer of Banking, Stylish Kitchen MIxer with K-beater,Dough Hook and Whisk, 5Litre Glass bowl"
      price={239}
      rating={4}
      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61FJtVQh9bL._SX569_.jpg"/>


      </div>

      <div className='home_row'>
      <Product
      id="12345"
      title="Noise ColorFit Pro 4 Alpha Bluetooth Calling Smart Watch with 1.78 AMOLED Display,"
      price={199.99}
      rating={3}
      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61h+le2DUxL._AC_UY218_.jpg"/>

<Product
      id="12345"
      title="Amazon Echo(3rd generation)|Smartspeaker with alexa"
      price={98.9}
      rating={5}
      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61WUqJd4dfS._SX569_.jpg"/>

<Product
      id="12345"
      title="New Apple iPad Pro(12.9-inch, wifi,128gb)silver 4th generation"
      price={598}
      rating={5}
      image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81oFAZ9N6bL._SX679_.jpg"/>

      </div>

      <div className='home_row'>
      <Product
      id="12345"
      title="Samsung LC49RG90SSUXEN 49"
      price={500}
      rating={5}
      image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"/>
      </div>

    </div>

    
  )
}

export default Home;
