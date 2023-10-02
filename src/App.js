import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Logo from "./LOGO.png";
import { HamburgerIcon, AiIcon, DevIcon, UxIcon, XrIcon } from "./IconsHeader";

const NavList = {
  Solutions: [
    {
      id: "AI",
      name: "Solutions",
      description: ["Artificial Inteligence", "Sentiment Analysis", "Process Optimization", "Forecasting ",], href: "https://ux.prossima.art", icon: AiIcon,
    },
    {
      id: "Dev",
      name: "Industries",
      description: ["Planning", "Implementation", "Reviews & Testing", "Development ",], href: "https://ux.prossima.art", icon: DevIcon,
    },
    {
      id: "UX",
      name: "Resources",
      description: ["Research & Design", "Prototyping", "User testing", "Metrics ",], href: "https://ux.prossima.art", icon: UxIcon,
    },

    {
      id: "VR",
      name: "Resources",
      description: ["VR applications", "AR applications", "Research & Design", "User testing ",], href: "https://ux.prossima.art", icon: XrIcon,
    },
  ],
  Industries: [
    {
      name: "E-commerce and retail",
      href: "#",
    },
    {
      name: "Professional services",
      href: "#",
    },

    {
      name: "Technology and SaaS",
      href: "#",
    },
    {
      name: "Marketing",
      href: "#",
    },
    {
      name: "Food services",
      href: "#",
    },
    {
      name: "Healthcare",
      href: "#",
    },
    {
      name: "Education",
      href: "#",
    },
    {
      name: "Customer service",
      href: "#",
    },
    {
      name: "Finance and banking",
      href: "#",
    },
  ],
  Resources: [
    {
      name: "Research and Dissemination",
      description: "News and articles about products and services",
      href: "#",
    },
    {
      name: "Security",
      description: "Privacy Policy and Protection of your data",
      href: "#",
    },
    {
      name: "Customer support",

      href: "#",
    },
  ],
}

const DropDown = {
  Solutions: "Solutions",
  Industries: "Industries",
  Resources: "Resources",
};


const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [isOpenSolutions, setIsOpenSolutions] = useState(false);
  const [isOpenIndustries, setIsOpenIndustries] = useState(false);
  const [isOpenResourses, setIsOpenResourses] = useState(false);


  const toggleMenuSolutions = () => {
    setIsOpenSolutions(!isOpenSolutions);
    setIsOpenIndustries(false);
    setIsOpenResourses(false);
  };
  const toggleMenuIndustries = () => {
    setIsOpenIndustries(!isOpenIndustries);
    setIsOpenSolutions(false);
    setIsOpenResourses(false);
  };
  const toggleMenuResourses = () => {
    setIsOpenResourses(!isOpenResourses);
    setIsOpenSolutions(false);
    setIsOpenIndustries(false);
  };

  const showMenu = () => {
    setIsShow(!isShow);
  };

  const refSolutions = useRef();
  const refIndustries = useRef();
  const refResources = useRef();

  const refMobileMenu = useRef();
  const [tamanhoTela, setTamanhoTela] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setTamanhoTela(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = tamanhoTela <= 768;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !refSolutions.current?.contains(event.target) &&
        !refIndustries.current?.contains(event.target) &&
        !refResources.current?.contains(event.target) &&
        !refMobileMenu.current?.contains(event.target) &&
        !(isMobile && document.querySelector('.hamburger-menu').contains(event.target))
      ) {
        setIsOpenSolutions(false);
        setIsOpenIndustries(false);
        setIsOpenResourses(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refSolutions, refIndustries, refResources, refMobileMenu, isMobile]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      {!isMobile &&
        <ul className={`navbar-menu ${isOpenSolutions ? "navbar-menu-open" : ""}`}>
          <li className="navbar-menu-item" onClick={toggleMenuSolutions}>
            {NavList.Solutions[0].name}
          </li>
          <li className="navbar-menu-item" onClick={toggleMenuIndustries}>
            {NavList.Solutions[1].name}
          </li>
          <li className="navbar-menu-item" onClick={toggleMenuResourses}>
            {NavList.Solutions[2].name}
          </li>
        </ul>}
      <button className="navbar-contact-btn">Contact</button>

      <div
        ref={refSolutions}
        className={`navbar-flyout-menu ${isOpenSolutions ? "navbar-flyout-menu-open" : ""
          }`}
      >
        <ul>
          <li
            className="adjustment"
          >
            {NavList.Solutions.map((item) => (
              <a href={item.href} target="_blank" key={item.name} className="d-flex flex-row" style={{ textDecoration: "none", color: "#222" }}> <div> <item.icon aria-hidden="true" /> </div> <div className="mx-auto"> <p className="d-flex flex-row justify-content-start"> {item.description[0]} </p> <p className="d-flex flex-row justify-content-start"> {item.description[1]} </p> <p className="d-flex flex-row justify-content-start"> {item.description[2]} </p> <p className="d-flex flex-row justify-content-start"> {item.description[3]} </p> </div> </a>
            ))}
          </li>
        </ul>
      </div>
      <div
        ref={refIndustries}
        className={`navbar-flyout-menu ${isOpenIndustries ? "navbar-flyout-menu-open" : ""
          }`
        }
      >
        <a href="/industries" style={{ textDecoration: "none", fontSize: "1.2rem", color: "#222" }}>{DropDown.Industries}</a>
        <ul style={{ height: "auto", columns: "3", columnGap: "1rem", alignItems: "baseline", justifyContent: "baseline", textDecoration: "none" }}>
          <li
            onClick={() => {
              setIsOpenIndustries(false);
            }}
          >
            {NavList.Industries.map((item) => (
              <div key={item.name} style={{ paddingBottom: "1rem", color: "#222" }} >
                <a href={item.href} style={{ textDecoration: "none", color: "#222" }}>{item.name}</a>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div style={{ height: "auto", width: "auto", textDecoration: "none" }}
        ref={refResources}
        className={`navbar-flyout-menu ${isOpenResourses ? "navbar-flyout-menu-open" : ""
          }`
        }
      >
        <a href="/Resources" style={{ textDecoration: "none", fontSize: "1.2rem", paddingBottom: "1rem", color: "#222" }}>{DropDown.Resources}</a>
        <ul style={{
          columns: "3", columnGap: "1rem", alignItems: "baseline", justifyContent: "baseline"
          , textDecoration: "none"
        }}>
          <li

            onClick={() => {
              setIsOpenResourses(false);
            }}
          >
            {NavList.Resources.map((item) => (
              <div key={item.name} style={{ paddingBottom: "1rem" }} >
                <a href={item.href} style={{ textDecoration: "none", color: "#222" }}>{item.name}</a>
                <div style={{ textDecoration: "none", fontSize: "1rem", color: "#7F7B7B" }}>{item.description}</div>
              </div>
            ))}
          </li>
        </ul>
      </div>
      <ul className={`hamburger-menu ${isShow ? "hamburger-menu-open" : ""}`}>
        <li className="hamburger-menu-item" onClick={showMenu}>
          <HamburgerIcon />
        </li>
      </ul>
      <div
        ref={refMobileMenu}
        className={`navbar-show-menu ${isShow ? "navbar-show-menu-open" : ""}`}
      >
        {isMobile && (
          <ul>
            {NavList.Solutions.map((item) => (
              <li key={item.id}>
                <a href={item.href} style={{ textDecoration: "none", color: "#222" }}>
                  <p className="title-mobile">{item.id.toLocaleUpperCase()}</p>
                  <span>{item.description}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {isMobile && (
          <>
            <p className="title-mobile">{DropDown.Industries}</p>
            <ul>
              {NavList.Industries.map((item) => (
                <li key={item.name}>
                  <a href={item.href} style={{ textDecoration: "none", color: "#222" }}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {isMobile && (
          <>
            <p className="title-mobile">{DropDown.Resources}</p>

            <ul>
              {NavList.Resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} style={{ textDecoration: "none", color: "#222" }}>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
