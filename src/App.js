import React, { useState, useRef } from "react";
import "./App.css";
import Logo from "./LOGO.png";
import { HamburgerIcon, AiIcon, DevIcon, UxIcon, XrIcon } from "./IconsHeader";

const Products = [
  {
    id: "AI",
    name: "Solutions",
    description: [
      "Artificial Inteligence",
      "Sentiment Analysis",
      "Process Optimization",
      "Forecasting ",
    ],
    href: "#",
    icon: AiIcon,
  },
  {
    id: "Dev",
    name: "Industries",
    description: [
      "Planning",
      "Implementation",
      "Reviews & Testing",
      "Development ",
    ],
    href: "#",
    icon: DevIcon,
  },
  {
    id: "UX",
    name: "Resources",
    description: [
      "Research & Design",
      "Prototyping",
      "User testing",
      "Metrics ",
    ],
    href: "#",
    icon: UxIcon,
  },

  {
    id: "VR",
    name: "Resources",
    description: [
      "VR applications",
      "AR applications",
      "Research & Design",
      "User testing ",
    ],
    href: "#",
    icon: XrIcon,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showMenu = () => {
    setIsShow(!isShow);
  };

  // const MenuRef = useRef();
  // window.addEventListener("click", (e) => {
  //   if (e.target !== MenuRef.current) {
  //     setIsOpen(false);
  //   }
  // });

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className={`navbar-menu ${isOpen ? "navbar-menu-open" : ""}`}>
        <li className="navbar-menu-item" onClick={toggleMenu}>
          {Products[0].name}
        </li>
        <li className="navbar-menu-item" onClick={toggleMenu}>
          {Products[1].name}
        </li>
        <li className="navbar-menu-item" onClick={toggleMenu}>
          {Products[2].name}
        </li>
      </ul>
      <button className="navbar-contact-btn">Contact</button>

      {/* Float Menu */}
      <div
        className={`navbar-flyout-menu ${
          isOpen ? "navbar-flyout-menu-open" : ""
        }`}
      >
        <ul>
          <li
            className="adjustment"
            
            // ref={MenuRef}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {Products.map((item) => (
              <div key={item.name} className="d-flex flex-row">
                <div className="">
                  <item.icon className="" aria-hidden="true" />
                </div>
                <div className="mx-auto">
                  <p className="d-flex flex-row justify-content-start">
                    {item.description[0]}
                  </p>
                  <p className="d-flex flex-row justify-content-start">
                    {item.description[1]}
                  </p>
                  <p className="d-flex flex-row justify-content-start">
                    {item.description[2]}
                  </p>
                  <p className="d-flex flex-row justify-content-start">
                    {item.description[3]}
                  </p>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <ul className={`hamburger-menu ${isShow ? "hamburger-menu-open" : ""}`}>
        <li className="hamburger-menu-item" onClick={showMenu}>
          <HamburgerIcon />
        </li>
      </ul>

      <div
        className={`navbar-show-menu ${isShow ? "navbar-show-menu-open" : ""}`}
      >
        <ul>
          <li
            onClick={() => {
              setIsShow(false);
            }}
          >
            Menu Item 1
          </li>
          <li
            onClick={() => {
              setIsShow(false);
            }}
          >
            Menu Item 2
          </li>
          <li
            onClick={() => {
              setIsShow(false);
            }}
          >
            Menu Item 3
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
