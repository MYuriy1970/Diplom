import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Catalog from "./pages/catalog/Catalog";
import Authorization from "./pages/authorization/Authorization";
import Cart from "./pages/cart/Cart";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
      <div className="App">
        <HashRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/" element={<Navigate replace to="/catalog" />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
  );
}

export default App;
