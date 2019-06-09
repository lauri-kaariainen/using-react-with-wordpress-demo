//import React from "react";
import { h, Component } from "preact";
import Link from "react-router-dom/Link";

const Header = () => (
  <nav className="navbar is-primary">
    <div className="container has-text-centered">
      <div className="navbar-brand">
        <p className="is-size-3">
          <Link to="/" className="has-text-white">
            Wordpress + React
          </Link>
        </p>
      </div>
    </div>
  </nav>
);

export default Header;
