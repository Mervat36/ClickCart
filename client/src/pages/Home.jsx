import { Link } from "react-router-dom";
import "../css/common.css";

const Home = () => {
  return (
    <div
      className="hero-wrapper"
      style={{
        background: "url('/images/BG.jpg') center center / cover no-repeat",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Start Your Smart Shopping</h1>
        <p>Shop the latest gadgets & tech essentials today.</p>
        <Link to="/products">
          <button className="cta-button">Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
