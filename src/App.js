import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AdminLogin from "./AdminLogin";
import SurveyForm from "./SurveyForm";
import AdminDashboard from "./AdminDashboard"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/survey" element={<SurveyForm />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
