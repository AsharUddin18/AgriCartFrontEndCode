import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Pagenofound } from "./pages/Pagenofound";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Menu />} />
          <Route path="*" element={<Pagenofound />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
