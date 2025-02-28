import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // ✅ Import the external CSS file
import Header from "./Header";
import Footer from "./Footer";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
  <>
      <Header />
    <div className="admin-login"> {/* ✅ Added className */}
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
    <Footer />
    </>
  );
}

export default AdminLogin;
