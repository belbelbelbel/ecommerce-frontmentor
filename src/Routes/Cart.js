import React from 'react'
import "../Styles/Cart.css"
import { useState } from 'react'
export const Cart = ({ show, setshow, cart }) => {
  const [showLarge, setShowLarge] = useState("")
  console.log(cart[0])
  const handleLargeView = (image) => {
    console.log("Large view", image)
    setShowLarge(image)
  }
  return (
    <div className='flex items-center justify-center rounded-[1rem] mx-[2rem] w-[40rem] bg-opacity-[0.9]  h-[10rem] text-white font-medium bg-black top-[8vw] right-0 absolute z-50 shadow-sm'>
      <div className='flex gap-[2rem]'>
        {
          cart.length === 0 ? "Cart is empty" : cart.length > 0 && cart[0]?.map((items) => (
            <img src={items.src} width="120px" alt={items.id + 1} className='rounded-[1vw] cursor-pointer' onClick={() => handleLargeView(items)} />
          ))
        }
        {
          showLarge && (
            <div className='fixed inset-0 flex items-center justify-center bg-opacity-[0.5] bg-black w-screen h-screen' onClick={() => setShowLarge(false)}>
              <div className='w-[50%]'>
                <img src={showLarge.src} alt={showLarge.id + 1} />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
