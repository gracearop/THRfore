// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

import Menu from "./components/MegaMenu";
import AppBreadcrumb from "./components/BreadCrumb";
import FooterMenu from "./components/Footer";

import Home from "./pages/Home";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OrderSummary from "./pages/OrderSummary";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* shared UI */}
            <AppBreadcrumb />
            <Menu />

            {/* route view */}
            <main className="page-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductGrid />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order-summary" element={<OrderSummary />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-history" element={<OrderHistory />} />
              </Routes>
            </main>

            <FooterMenu />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}
