import Timeline from "./Timeline";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="section-01">
      <div className="section-01-title">
        <div className="section-01-header">01 - What We Do</div>
        <div className="about-header">About Us.</div>
      </div>
      <Timeline />
    </div>
  );
};

export default About;
