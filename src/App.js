import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './Home/Home';
import Contact from './Contact/Contact'
import About from './About/About'
import Cart from './Cart/Cart';
import Contextdata from './Context/Contextdata';
import Detail from './Detail/Detail';
import CartContext from './Context/CartContext';
function App() {

  return (
    <>
      <CartContext>
        <Contextdata>
          <Navbar />
          <Routes>
            <Route path="/Shop/:id" element={<Detail />} />
            <Route path="/Shop" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About_us" element={<About />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Contextdata>
      </CartContext>
    </>
  );
}

export default App;
