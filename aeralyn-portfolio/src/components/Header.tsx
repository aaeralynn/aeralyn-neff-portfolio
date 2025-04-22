import React from "react";
import "../styles/Header.css";

interface HeaderProps {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({
  currentSection,
  setCurrentSection,
}) => {
  return (
    <header>
      <nav>
        {["About Me", "Portfolio", "Contact", "Resume"].map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={currentSection === section ? "active" : ""}
          >
            {section}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
