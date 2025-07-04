import React, { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#222",
    color: "white",
  };

  const pageStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "24px",
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <span onClick={() => handlePageChange("Home")} style={{ cursor: "pointer" }}>
          Home
        </span>
        <span onClick={() => handlePageChange("About")} style={{ cursor: "pointer" }}>
          About
        </span>
        <span onClick={() => handlePageChange("Contact")} style={{ cursor: "pointer" }}>
          Contact
        </span>
      </nav>

      {/* Page Content */}
      <div style={pageStyle}>
        {activePage === "Home" && <h1>🏠 Welcome to Home</h1>}
        {activePage === "About" && <h1>📘 About Us</h1>}
        {activePage === "Contact" && <h1>📞 Contact Us</h1>}
      </div>
    </div>
  );
}

export default App;
