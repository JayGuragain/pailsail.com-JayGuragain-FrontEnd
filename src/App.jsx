import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Shop from ".Components/Pages/Shop";
import Shop from "./Shop";
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./pages/ShopCategory.jsx";
import Cart from "./pages/Cart";

import Product from "./pages/Product";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />} // Changed to "men"
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />} // Changed to "women"
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />} // Changed to "kid"
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
