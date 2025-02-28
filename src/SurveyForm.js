import { useState } from "react";
import axios from "axios";
import "./SurveyForm.css";
import Header from "./Header";
import Footer from "./Footer";

function SurveyForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone_number: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone_number") {
      if (!/^\d*$/.test(value)) {
        alert("Phone number should contain only digits.");
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone_number.length !== 10) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/submit", formData);
      alert(response.data.message); 
      setFormData({
        name: "",
        gender: "",
        nationality: "",
        email: "",
        phone_number: "",
        address: "",
        message: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Phone number already registered");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Header />
    <div className="form-container">
      <h2 className="form-title">Survey Form</h2>
      <form onSubmit={handleSubmit} className="survey-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
     <Footer />
     </>
  );
}

export default SurveyForm;
