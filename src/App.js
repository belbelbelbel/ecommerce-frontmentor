import { Route, Routes } from 'react-router';
import './App.css';
import { Navbar } from './Routes/Navbar';
import { Women } from './Routes/Women';
import { Home } from './Routes/Home';
import { Men } from './Routes/Men';
import { About } from './Routes/About';
import { Contact } from './Routes/Contact';
import { Content } from './Routes/Content';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/content' element={<Content/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
