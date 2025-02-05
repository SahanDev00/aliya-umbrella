import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Home from "./Pages/Home";
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Collection from './components/ProductsPage/Collection';
import Profile from './Pages/Profile';
import CartPage from './Pages/CartPage';
import UserLogin from './Pages/UserLogin';

function App() {
  return (
    <div className="bg-third/50">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/account' element={<Profile/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/sign-up' element={<UserLogin/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
