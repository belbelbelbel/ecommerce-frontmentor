import React, { useState } from 'react'
import "../Styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Cart } from './Cart'
export const Navbar = ({size,cart}) => {
  const [show, setshow] = useState(true)
  const navigate = useNavigate()
  const handlehome = () => {
    navigate("/")
  }
  const handletoggle = () => {
    setshow(!show)
  }
  return (
    <div>
      {
        show ? "" : <Cart setshow={setshow} show={show} cart={cart}/>
      }
      <div className="navbar_container">
        <div className='navbar_container2'>
          <div>
            {/* logo */}
            <img src="logo.svg" alt="imageloog" onClick={handlehome} />
          </div>
          <div className='navbar_container3'>
            <NavLink activeClassName="active" to="/content">Collection</NavLink>
            <NavLink activeClassName="active" to="/men">Men</NavLink>
            <NavLink activeClassName="active" to="/women">Women</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className='navbar_container4'>
          <div className='cart'>


            <div className='flex items-center'>
              <img src="icon-cart.svg" alt="hhgmhkj" onClick={handletoggle} />
              <div className='top-[-1vw] relative px-[7px] rounded-[2vw] border-2 border-orange-500' >{size}</div>
            </div>
          </div>
          <div className="profilepic" >
            <img src="9187475.png" alt="gdfwaer" width="45px" />
          </div>
        </div>
      </div>
    </div>
  )
}
