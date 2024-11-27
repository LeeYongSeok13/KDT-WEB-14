import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import "./styles/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import { useEffect, useState } from "react";
import ProductDetailPage from "./pages/ProductDetailPage";
import RouterPractice from "./components/RouterPractice";
import StudentPage from "./pages/StudentPage";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setProducts(data.slice(0, 10));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RouterPractice />}/>
          <Route path="/student/:id" element={<StudentPage />}/>  
        </Routes> 

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route path="/products/:id" element={<ProductDetailPage products={products} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
