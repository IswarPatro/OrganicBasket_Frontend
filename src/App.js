import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pagenotfound from "./pages/PageNotFound";
import Fruits from "./pages/Home/fruits";
import Veggies from "./pages/Home/veggies";
import Oils from "./pages/Home/oils";
import Kitchen from "./pages/Home/kitchen";
import Grocery from "./pages/Home/grocery";
import SnackStore from "./pages/Home/snackStore";
import Product from "./pages/Mainpage";
import Cart from "./pages/Cart";
import AllProducts from "./pages/Home/allProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/fresh_fruits" element={<Fruits />} />
          <Route path="/product/all_products" element={<AllProducts />} />
          <Route path="/product/fresh_veggies" element={<Veggies />} />
          <Route path="/product/grains" element={<Grocery />} />
          <Route path="/product/snack" element={<SnackStore />} />
          <Route path="/product/oils" element={<Oils />} />
          <Route path="/product/kitchen" element={<Kitchen />} />
          <Route path="/product/cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
