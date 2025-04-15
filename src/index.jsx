import "/src/style.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="div-app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/vans" element={<Vans />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
