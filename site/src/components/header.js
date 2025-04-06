import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(prev => !prev);
    console.log("Toggle Button Clicked");
  };

  return (
    <header>
      <div id="flex-header">
        <img id="header-logo" src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" />
        <h1 id="centered">Local Happiness Construction</h1>
      </div>
      <hr />
      <nav id="main-nav">
        <div id="toggle-nav" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav-items" className={isNavVisible ? "" : "hide-small"}>
          {[ 
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/kitchens", label: "Kitchens" },
            { path: "/bathrooms", label: "Bathrooms" },
            { path: "/landscaping", label: "Landscaping" },
            { path: "/reviews", label: "Review Board" }
          ].map((item) => (
            <li key={item.path} className={location.pathname === item.path ? "highlight-nav" : ""}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
