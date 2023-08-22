import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, ProductDetail, Category } from "./pages/exportPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/categories" element={<Category />} />
        <Route path="*" element={"404 Not Found"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
