import "./TeamMembers.css";
import TeamCard from "./TeamCard";
import teamDetail from "./teamDetail";
import teamNames from "./teamNames";
import TeamNav from "./TeamNav";

const TeamMembers = () => {
  return (
    <div id="team" className="section-02">
      <div className="section-02-header">
        <div className="section-02-title">02 - The Crew</div>
        <div className="team-header">Meet the Team.</div>
      </div>
      <TeamNav />
      <div className="card-grid member-grid">
        {teamDetail.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
