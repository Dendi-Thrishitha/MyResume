import React from 'react';
import Header from '../components/Header';
import './Contact.css';
import right from "../assets/arrow_icon.png";
import left from "../assets/right_img.png";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formValues.name || !formValues.email || !formValues.message) {
      alert("All fields are required!");
      return;
    }

    setResult("Sending...");
    const formData = new FormData();
    formData.append("access_key", "735ec05e-7540-4da9-91d9-a694ca727dcd");
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("message", formValues.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormValues({ name: "", email: "", message: "" });
        setTimeout(() => {
          alert("Form Submitted Successfully");
        }, 2000);
      } else {
        console.error("Error", data);
        alert(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-inputs"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-inputs"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-inputs"
            value={formValues.message}
            onChange={handleInputChange}
            required
          />
          <button type="button" onClick={handleSubmit}>
            Submit <img src={right} alt="" />
          </button>
        </div>
        <div className="contact-right">
          <img src={" "} alt="" /> 
        </div>
      </div>
    </div>
  );
}
