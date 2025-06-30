import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/common.css";

const Home = () => {
  return (
    <div className="hero-modern">
      <div className="hero-overlay" />
      <div className="hero-glass">
        <h1>
          Explore <span className="brand">ClickCart</span>
        </h1>
        <p>Your smart tech hub — where innovation meets lifestyle.</p>
        <Link to="/products">
          <Button className="glow-button" size="lg">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
