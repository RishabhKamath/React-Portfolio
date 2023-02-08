import React, { useState } from "react";
// import { Route, NavLink, Switch } from "react-router-dom";
import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/"

function App() {
  const [selectedNav, setSelectedNav] = useState("About Me");

  const handleNavClick = (nav) => {
    setSelectedNav(nav);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rishabh Kamath</h1>
        <nav className="App-nav">
          <NavLink
            to="/about-me"
            className="App-nav-item"
            activeClassName="selected"
            onClick={() => handleNavClick("About Me")}
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className="App-nav-item"
            activeClassName="selected"
            onClick={() => handleNavClick("Portfolio")}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className="App-nav-item"
            activeClassName="selected"
            onClick={() => handleNavClick("Contact")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            className="App-nav-item"
            activeClassName="selected"
            onClick={() => handleNavClick("Resume")}
          >
            Resume
          </NavLink>
        </nav>
      </header>
      <main className="App-content">
        <Switch>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </main>
      <footer className="App-footer">
        <p>
          <a href="https://github.com/developer-name">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/developer-name">LinkedIn</a> |{" "}
          <a href="https://stackoverflow.com/users/developer-name">
            Stack Overflow
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;