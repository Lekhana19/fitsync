import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "./mainpageui.json"; // Update with your animation path
import "./App.css";
import FitsyncDescription from "./FitsyncDescription";
import FitnessAnimation from "./FitnessAnimation";
import AOS from "aos";
import "aos/dist/aos.css";
import AnalyticsAnimation from "./AnalyticsAnimation";
// import Contact from './Contact'; // Import the Contact component
import { useMediaQuery } from "react-responsive";

const Home = () => (
  <div className="center" style={{ backgroundColor: "white" }}>
    <FitsyncDescription />
    <Lottie options={defaultOptions} height={500} width={500} />
  </div>
);

const Signup = () => (
  <div className="center">
    <h2>Sign Up</h2>
    {/* Add your Sign Up components here */}
  </div>
);

const Products = () => (
  <div className="center">
    <h2>Our Products</h2>
    {/* Add your product information here */}
  </div>
);

const Contact = () => (
  <div
    className="contact-info"
    style={{ padding: "20px", backgroundColor: "#b3e0ff" }}
  >
    <h2>Contact Us</h2>
    <p>
      <strong>Email:</strong> contact@fitsync.com
    </p>
    <p>
      <strong>Phone:</strong> +1 (555) 123-4567
    </p>
    <p>
      <strong>Address:</strong> 123 Fit Street, Fitness City, FC 12345
    </p>
    {/* Add more contact information or details as needed */}
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1" />
        <div className="wave" id="wave2" />
        <div className="wave" id="wave3" />
        <div className="wave" id="wave4" />
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Team
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p className="footer-copyright">©TeamFitsync | All Rights Reserved</p>
    </footer>
  );
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet", // Adjusted preserveAspectRatio value
  },
};
// ... (previous code)

function App() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          {isSmallScreen ? (
            // Render hamburger menu for small screens
            <div className="mobile-menu">
              <button
                onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
              >
                ☰
              </button>
              {isMobileNavVisible && (
                <ul className="mobile-nav">
                  <li>
                    <Link to="/" onClick={() => setIsMobileNavVisible(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      onClick={() => setIsMobileNavVisible(false)}
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      onClick={() => setIsMobileNavVisible(false)}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileNavVisible(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            // Render regular navigation for larger screens
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <div className="right-links">
                <li style={{ marginRight: "30px" }}>
                  <Link to="/signup">Signup</Link>
                </li>
                <li style={{ marginRight: "30px" }}>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </div>
            </ul>
          )}
        </nav>

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>

        {/* Additional content sections with animations */}
        <div className="additional-section" data-aos="fade-up">
          {/* Content for the additional section */}
          <h2>Additional Section</h2>
          <p>
            This is additional content that appears with a fade-up animation.
          </p>
        </div>

        {/* Fitness Animation section */}
        <div className="fitness-animation-section" data-aos="fade-left">
          <FitnessAnimation />
        </div>

        {/* Another section with a different animation */}
        <div className="another-section" data-aos="fade-left">
          {/* Content for another section */}
          <h2>Analytics and CRM</h2>
          <p>
            This app is also about the analytics and also controlling the
            commiunity.
          </p>
        </div>
        {/* New Animation section */}
        <div className="new-animation-section" data-aos="fade-right">
          <AnalyticsAnimation />
        </div>
        <div data-aos="fade-up">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
