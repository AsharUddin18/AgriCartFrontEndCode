import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./pages/AuthContext"; // Import AuthProvider
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Pagenofound } from "./pages/Pagenofound";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { Cart } from "./pages/Cart";
import { AfterLogin } from "./pages/AfterLogin";
import Header from "./components/Layout/Header"; // Import Header component

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Header is displayed across all pages */}
        <Header />
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
          <Route path="/landing" element={<AfterLogin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
