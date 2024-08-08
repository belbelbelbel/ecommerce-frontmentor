import React, { useState } from 'react'
import "../Styles/Women.css"
import { imgArray } from './Images'
import { Images } from './Images'
export const Women = ({handleaddToCart,warning,setwarning, handleRemoveFromCart}) => {
  const [ShowText, setShowText] = useState(false)
  const [price,setprice] = useState(0)

    const handleTogleText = () => {
      setShowText(!ShowText)
    }
const addbutton =()=> {
  setprice(price + 1)
}
const subbutton =()=> {
 if (price){
  setprice(price - 1);
 }
}

  return (
    <div className='container_women'>
      <Images />
      <div className='container_women3'>
        <div className='container_women3a'>
          <h4>Sneaker Company </h4>
          <h1>Fall Limited Edition <br />Sneaker</h1>
        </div>
        <div className='container_women3b'>
          <p>These low-profile sneakers are your perfect casual wear <p> companion.Featuring a durable rubber outer sole, they’ll</p>  <p> withstand everythingthe weather can offer</p> </p>
        </div>
        <div className='container_women4'>
          <div className='container_women4a'><div className='container_women4b'><h2>$125.00</h2><button> 50%</button></div>
            <span>$250.00</span>
          </div>
          <div className='container_women5'>
            <div className='container_women5a'>
              <button  onClick={subbutton}><img src="icon-minus.svg" alt="fgewf"/></button>
              <div>{price}</div>
              <button onClick={addbutton}><img src="icon-plus.svg" alt="fgewef" /></button>
            </div>
            <button className='container_women5b'>
              <div className='container_women5c'>
                <div className='conti'>
                  <img src="icon-cart.svg" alt="hhgmhkj" />
                </div>
                <div onClick={handleTogleText} className=''>
                  {
                    !ShowText ? <div onClick={() => handleaddToCart(imgArray)}>Add to Cart</div> : <div onClick={() => handleRemoveFromCart()}>Remove From Cart</div>
                  }
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
