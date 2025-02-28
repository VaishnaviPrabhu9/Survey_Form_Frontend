import { Link } from "react-router-dom";
import "./Home.css"; 
import Header from "./Header";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Header />
    <div className="home-container">
      <div className="overlay">
        <h1>Welcome to the Survey</h1>
        <p>Your opinions matter! Share your thoughts with us.</p>
        <div className="button-container">
          <Link to="/admin">
            <button className="btn">Admin Login</button>
          </Link>
          <Link to="/survey">
            <button className="btn">Fill Survey Form</button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;
