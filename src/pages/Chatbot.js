import React, { useState } from "react";
import "../styles/style.css";

const Chatbot = () => {
  const [showText, setShowText] = useState(false);

  // Function to handle the CV download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Path to the PDF in the public folder
    link.download = "Thrishitha_Resume_2025.pdf"; // The name for the downloaded file
    link.click(); // Trigger the download
  };

  return (
    <div className="chatbot-container">
      
      <div
        className="chatbot-icon"
        onClick={handleDownload}
        onMouseEnter={() => setShowText(true)} // Show text when mouse enters
        onMouseLeave={() => setShowText(false)} // Hide text when mouse leaves
      >
        💬
      </div>

      
      {showText && <div className="chatbot-text">Click to get My CV</div>}
    </div>
  );
};

export default Chatbot;
