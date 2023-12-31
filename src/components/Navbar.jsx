import { useState } from "react";
import "../styles/fonts.css";
import "../styles/Navbar.css";

function Navbar() {
    const [activeLink, setActiveLink] = useState(0);

    const handleNavClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className="w-full">
            {/* Bar with padding */}
            <div className="flex flex-wrap items-center justify-between p-4 mt-6 my-12">
                <h1 className="text-xl abhaya-libre-extrabold powdered-blue-text-animated mb-4 sm:w-1/2 mx-auto">Torben Conto</h1>
                {/* Nav Options */}
                <div className="flex w-full sm:w-1/2 abhaya-libre-medium text-md items-center justify-around">
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
    );
}

export default Navbar;
