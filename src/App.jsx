import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {/* if show login is false they will show a fragments */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} /> */}

          <Route path="/vite-react-router/" element={<Home />} />
          <Route path="/vite-react-router/cart" element={<Cart />} />
          <Route path="/vite-react-router/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
