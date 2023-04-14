import './css/my_reset.css';
import './css/App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import productData from './productData';

import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Shop from './pages/Shop';

function App() {
  let [list] = useState(productData);
  console.log(list);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main list={list} />} />
        <Route path="Shop" element={<Shop list={list} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
