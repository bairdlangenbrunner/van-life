import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">#vanlife</Link>
        <div className="div-navbar-rhs">
          <Link to="/about">about</Link>
          <Link to="/vans">vans</Link>
        </div>
      </nav>
    </header>
  );
}
