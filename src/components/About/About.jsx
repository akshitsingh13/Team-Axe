import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div id="about" className="section-01">
      <div className="section-01-title">
        <div className="section-01-header">01 — WHO WE ARE</div>
        <div className="about-header">About Team Axe</div>
      </div>

      <div className="about-body">
        <div className="about-lead-col">
          <p className="about-lead">
            We exist to cut through the gap between theory and practice. Team
            Axe is a cross-disciplinary crew of undergrad engineers who'd rather
            ship a working prototype than memorize a slide deck.
          </p>

          <button className="about-cta" onClick={() => navigate("/journey")}>
            See Our Journey
          </button>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-label">Our Goal</div>
            <p className="about-card-text">
              Give every member hands-on experience building real, working
              systems before they graduate — no gatekeeping, no permission
              slips.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-label">What We Do</div>
            <p className="about-card-text">
              Workshops, hackathons, open-source contributions, and
              semester-long build projects that ship to real users, not just a
              grade sheet.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-label">How We Do It</div>
            <p className="about-card-text">
              Small pods, tight feedback loops, and a bias toward shipping — we
              pair every idea with a prototype in the first week, then iterate
              in public.
            </p>
          </div>
        </div>
      </div>

      <div className="about-motto">
        <p>"Build first. Ask permission never."</p>
      </div>
    </div>
  );
};

export default About;
