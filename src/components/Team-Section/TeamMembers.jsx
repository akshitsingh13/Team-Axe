import { useMemo, useState } from "react";
import "./TeamMembers.css";
import TeamCard from "./TeamCard";
import teamDetail from "./teamDetail";
import teamNames from "./teamNames";
import TeamNav from "./TeamNav";

const TeamMembers = () => {
  const [activeId, setActiveId] = useState(teamNames[0]?.id);

  const visibleMembers = useMemo(
    () => teamDetail.filter((member) => member.team.includes(activeId)),
    [activeId],
  );

  return (
    <div id="team" className="section-02">
      <div className="section-02-header">
        <div className="section-02-title">04 - The Crew</div>
        <div className="team-header">Meet the Team.</div>
      </div>
      <TeamNav activeId={activeId} onSelect={setActiveId} />
      <div className="card-grid member-grid">
        {visibleMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
