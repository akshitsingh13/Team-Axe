import { useNavigate } from "react-router-dom";
import Timeline from "./Timeline";
import "./Journey.css";

const Journey = () => {
  const navigate = useNavigate();

  return (
    <div className="section-01 journey-page">
      <button className="back-button" onClick={() => navigate("/")}>
        <span className="back-arrow">←</span>
        <span>Back</span>
      </button>

      <div className="section-01-title">
        <div className="about-header">Our Journey</div>
      </div>
      <Timeline />
    </div>
  );
};

export default Journey;
