import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import EditProduct from './pages/products/edit';
import NewProduct from './pages/products/new';
import ProductDetails from './pages/products/[id]';


// LOGIN PAGE/ LANDING

function Home() {
  return (
    <div>
      <header className="App-header">
        <p>
          HOME
        </p>
      </header>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/edit" element={<EditProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
