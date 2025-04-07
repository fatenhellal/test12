import React, { useState, useRef, useEffect } from "react";
import "./App.css"; 
import Logo1 from "./public/logo.png";
import { MdViewList } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";

import { useTranslation } from 'react-i18next';
import './i18n'; // Importer la configuration
const App = () => {
  const { t, i18n } = useTranslation();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Sidebar is collapsed initially
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false); // New state for mobile navbar
  const [isMobileListOpen, setIsMobileListOpen] = useState(false); // New state for mobile navbar
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false); // Search popup state
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // Language dropdown visibility state
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [category, setCategory] = useState('');
  const [activity, setActivity] = useState('');
  const searchPopupRef = useRef(null);
  const languageDropdownRef = useRef(null);
  const navigate=useNavigate()
  const pages = ["/", "/about", "/contact", "/connect"];
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  
  // Close dropdowns and popup when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchPopupRef.current && searchPopupRef.current.contains(event.target)) {
        setIsSearchPopupOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    setIsSearchPopupOpen(false);
    console.log(`Searching for: ${country}, ${region}, ${category}, ${activity}`);
  };

  const goToPreviousPage = () => {
    const newIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    setCurrentPageIndex(newIndex);
    navigate(pages[newIndex]);  
  };
  
  const goToNextPage = () => {
    const newIndex = (currentPageIndex + 1) % pages.length;
    setCurrentPageIndex(newIndex);
    navigate(pages[newIndex]);  
  };
  const toggleMobileNavbar = () => {
    setIsMobileListOpen(!isMobileListOpen); 
  };

  const goToSection = (section) => {
    setActiveSection(section);
    setIsMobileListOpen(false);
    navigate("/", { state: { activeSection: section } });
  };

  const toggleSearchPopup = () => {
    setIsSearchPopupOpen(!isSearchPopupOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen); 
  };

  const handleLanguageChange = (language) => {
    console.log(`Selected Language: ${language}`);
    setIsLanguageDropdownOpen(false);
    if (language == 'French'){
    i18n.changeLanguage('fr')
    }
    if (language == 'Arabic'){
      i18n.changeLanguage('ar')
    }
    else {i18n.changeLanguage('en')}
  };

  return (
    <div className="myApp">

      {/* Navbar (Desktop Version) */}
      <div className={`navbar`}>
     
        <div className="logo-container" onClick={() => { navigate("/",  { state: { activeSection: "home" } }); }}
        >
          <img src={Logo1} alt="Logo" className="logo1" /></div>
        <div className="icons-container">
          <button
            className={`icon ${activeSection === "home" ? "active" : ""}`}
            onClick={() => {navigate("/"); 
              goToSection("home")}}
          >

           <span className="icon-text">Acceuil</span>
          </button>
          <button
            className={`icon ${activeSection === "about" ? "active" : ""}`}
            onClick={() => goToSection("about")}
          >

            <span className="icon-text">A Propos</span>
          </button>
          <button
            className={`icon ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => goToSection("contact")}
          >
             <span className="icon-text">Contacter Nous</span>
          </button>
         
       
          
        </div>
        <div>
             <div onClick={toggleLanguageDropdown}>
              <CiGlobe className="mobile-svg-lang" />
            </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`mobile-navbar ${isMobileNavbarOpen ? "open" : ""}`}>
        <div className="mobile-navbar-header">
          <img src={Logo1} alt="Logo" className="logo1"onClick={()=>{navigate("/", {activeSection:"home"} )}} />
          <div className="mobile-svgs">
          <div >
              <MdArrowBackIos onClick={goToPreviousPage}  className="" />
            </div>
            <div >
              <MdArrowForwardIos onClick={goToNextPage} className="" />
            </div>
            <div onClick={toggleSearchPopup} className="mobile-search" >
              <IoMdSearch className="mobile-svg-search" />
            </div>
            <div onClick={toggleLanguageDropdown}>
              <CiGlobe className="mobile-svg-lang" />
            </div>
            <div onClick={toggleMobileNavbar}>
              <MdViewList className="mobile-svg" />
            </div>
          </div>
        </div>
        <div className={isMobileListOpen ? "mobile-navbar-menu" : "display-none"}>
          <button
            className={`mobile-navbar-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => goToSection("home")}
          >
            Home
          </button>
          <button
            className={`mobile-navbar-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => goToSection("about")}
          >
            About
          </button>
          <button
            className={`mobile-navbar-item ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => goToSection("contact")}
          >
            Contact
          </button>
          <button
            className={`mobile-navbar-item ${activeSection === "connect" ? "active" : ""}`}
            onClick={() => navigate("/connect")}
          >
            Se Connecter
          </button>
        </div>
      </div>

      {/* Language Dropdown */}
      {isLanguageDropdownOpen && (
        <div ref={languageDropdownRef} className="language-dropdown">
          <ul>
            <li onClick={() => handleLanguageChange("English")}>English</li>
            <li onClick={() => handleLanguageChange("French")}>Français</li>
            <li onClick={() => handleLanguageChange("Arabic")}>العربية</li>
            <li onClick={() => handleLanguageChange("German")}>Deutsch</li>
            <li onClick={() => handleLanguageChange("Spanish")}>Español</li>
            <li onClick={() => handleLanguageChange("Italian")}>Italiano</li>
          </ul>
        </div>
      )}


    </div>
  );
};

export default App;