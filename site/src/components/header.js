import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Get the current URL

  return (
    <header>
      <div id="flex-header">
        <img id="header-logo" src="/images/logo.jpg" alt="Logo" />
        <h1 id="centered">Local Happiness Construction</h1>
      </div>
      <hr />
      <nav id="main-nav">
        <div id="toggle-nav">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav-items" className="hide-small">
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
