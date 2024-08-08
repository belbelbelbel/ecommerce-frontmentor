import { Route, Routes } from 'react-router';
import './App.css';
import { Navbar } from './Routes/Navbar';
import { Women } from './Routes/Women';
import { Home } from './Routes/Home';
import { Men } from './Routes/Men';
import { About } from './Routes/About';
import { Contact } from './Routes/Contact';
import { Content } from './Routes/Content';
import { useState } from'react';
function App() {
  const [cart, setCart] = useState([])
  const [warning,setwarning] = useState(false)
  const handleaddToCart = (image) => {
    if(cart.some((carts) => carts.id === image.id)) {
      // setwarning(true)
      console.log("carts already exists")
    }
    else {
      setCart([...cart, image])
      console.log("Cart Added")
    }
  }
  const handleRemoveFromCart = (id) => {
    const removedCart = cart.filter((carts) => carts.id !== id)
    setCart(removedCart)
  }
  return (
    <div className="App">
      
      <Navbar size={cart.length} cart={cart}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/content' element={<Content/>}></Route>
        <Route path='/women' element={<Women handleaddToCart={handleaddToCart} handleRemoveFromCart={handleRemoveFromCart}  warning={warning} setwarning={setwarning}/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
