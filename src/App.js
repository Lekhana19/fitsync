import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './mainpageui.json'; // Update with your animation path
import './App.css';
import FitsyncDescription from './FitsyncDescription';
import FitnessAnimation from './FitnessAnimation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnalyticsAnimation from './AnalyticsAnimation';
// import { useMediaQuery } from 'react-responsive';


const Home = () => (
  <div className="center" style={{ backgroundColor: 'white' }}>
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

const About = () => (
  <div className="center">
    <h2>About Us</h2>
    <p>This is a simple Fitsync app.</p>
  </div>
);

const Contact = () => (
  <div className="contact-info" style={{ padding: '20px', backgroundColor: '#b3e0ff' }}>
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



const AdditionalInfo = () => (
  <div className="contact-info" style={{ padding: '20px', backgroundColor: '#b3e0ff' }}>
    <h2>Additional Information</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac justo nec justo interdum lobortis vel
      ac nisi. Sed euismod varius leo, ac volutpat felis sagittis in. Fusce vel justo non orci ultrices
      vehicula.
    </p>
    <p>
      Quisque id diam eget orci iaculis consectetur. Vivamus ultricies, risus sit amet posuere malesuada,
      justo dui malesuada mauris, vitae consectetur elit tortor nec neque.
    </p>
    {/* Add more random information or details as needed */}
  </div>
);
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet', // Adjusted preserveAspectRatio value
  },
};
// ... (previous code)

function App() {
  //const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  // useEffect(() => {
  //   const handleLinkClick = () => {
  //     setIsMobileNavVisible(false);
  //   };

  //   document.addEventListener('click', handleLinkClick);

  //   return () => {
  //     document.removeEventListener('click', handleLinkClick);
  //   };
  // }, []);

 // const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          
          <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="right-links">
              <li style={{ marginRight: '30px' }}>
                <Link to="/signup">Signup</Link>
              </li>
              <li style={{ marginRight: '30px' }}>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
          </ul>
        </nav>

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>

        {/* Additional content sections with animations */}
        <div className="additional-section" data-aos="fade-up">
          {/* Content for the additional section */}
          <h2>Additional Section</h2>
          <p>This is additional content that appears with a fade-up animation.</p>
        </div>

        {/* Fitness Animation section */}
        <div className="fitness-animation-section" data-aos="fade-left">
          <FitnessAnimation />
        </div>

        {/* Another section with a different animation */}
        <div className="another-section" data-aos="fade-left">
          {/* Content for another section */}
          <h2>Analytics and CRM</h2>
          <p>This app is also about the analytics and also controlling the commiunity.</p>
        </div>
        {/* New Animation section */}
        <div className="new-animation-section" data-aos="fade-right">
          <AnalyticsAnimation />
          </div>
        {/* Contact section */}
        <div className="contact-section" data-aos="fade-up">
          <Contact />
        </div>

        {/* Additional information section */}
        <div className="additional-info-section" data-aos="fade-up">
          <AdditionalInfo />
        </div>
      </div>
    </Router>
  );
}

export default App;

