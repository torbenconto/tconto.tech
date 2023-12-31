import { useState } from "react";

import "../fonts.css"
import "./Navbar.css"

function Navbar() {

  const [activeLink, setActiveLink] = useState(0);

  const handleNavClick = (index) => {
    setActiveLink(index);
  };


  return (
    <div className="w-full">
        {/* Bar with padding */}
        <div className="flex">
            <h1 className="w-1/2 text-xl abhaya-libre-extrabold powdered-blue-text-animated">Torben Conto</h1>
            {/* Nav Options */}
            <div className="w-1/2 flex justify-center">
              <div className="w-1/2 flex abhaya-libre-medium text-md items-center justify-around">
                {["Home", "About", "Projects", "Contact"].map((label, index) => (
                <a
                  key={index}
                  className={`nav-option ${activeLink === index ? "active" : ""}`}
                  onClick={() => handleNavClick(index)}
                >
                  {label}
                </a>
              ))}
              </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
