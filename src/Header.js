import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Survey App</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/survey">Survey Form</Link>
        <Link to="/admin">Admin Login</Link>
      </nav>
    </header>
  );
}

export default Header;
