import { Link } from "react-router-dom";
import "./../Styles/hero.css";
import cybertwin from "./../assets/cybertwinsx.png";

const Hero = () => {
  return (
    <div className="total-hero">
      <div className="hero">
        <div className="hero-text">
          <h3>
            Innovative Tech,
            <br />
            Simplified Living
          </h3>
          <p>
            Giving you the best there is your choice our decision let’s be your
            plug.
          </p>
          <Link to="/collection">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="hero img">
        <img src={cybertwin} alt="" />
      </div>
    </div>
  );
};

export default Hero;
