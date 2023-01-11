import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './Home/Home';
import Contact from './Contact/Contact'
import About from './About/About'
import Cart from './Cart/Cart';
import Contextdata from './Context/Contextdata';
function App() {

  return (
    <>
      <Contextdata>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About_us" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Contextdata>
    </>
  );
}

export default App;
