import "./JoinTeam.css";

const GOOGLE_FORM_URL = "https://forms.gle/your-form-id-here";

const JoinTeam = () => {
  return (
    <div id="join" className="section-05">
      <div className="join-team-content">
        <div className="section-05-title">05 - Get Involved</div>

        <h2 className="join-team-header">Join Team Axe</h2>

        <p className="join-team-subtext">
          We're always looking for students who'd rather build than wait for
          permission. No experience required — just curiosity and a willingness
          to ship.
        </p>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="apply-now-btn"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JoinTeam;
