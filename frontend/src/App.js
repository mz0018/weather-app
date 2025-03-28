import React, { useContext } from "react";
import Header from "./sections/Header";
import Body from "./sections/Body";
import Footer from "./sections/Footer";
import ConnectionContext from "./context/ConnectionContext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const App = () => {

  const isOnline = useContext(ConnectionContext);

  return (
    <Router>
      {!isOnline ? (
        <div>No Internet Connection</div>
      ) : (
        <div>

          <div className="sticky top-0">
            <nav>
              <ScrollLink to="header" smooth={true} duration={500}>Header</ScrollLink>
              <ScrollLink to="body" smooth={true} duration={500}>Body</ScrollLink>
              <ScrollLink to="footer" smooth={true} duration={500}>Footer</ScrollLink>
            </nav>
          </div>

          <div className="header"><Header /></div>
          <div className="body"><Body /></div>
          <div className="footer"><Footer /></div>

        </div>
      )}
    </Router>
  );
}

export default App;
