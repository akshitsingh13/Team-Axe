import { useState } from "react";
import "./TeamNav.css";
import teamNames from "./teamNames";

const TeamNav = ({ activeId, onSelect }) => {
  const [internalActive, setInternalActive] = useState(teamNames[0]?.id);
  const current = activeId ?? internalActive;

  const handleClick = (id) => {
    if (onSelect) {
      onSelect(id);
    } else {
      setInternalActive(id);
    }
  };

  return (
    <nav className="team-nav" aria-label="Team categories">
      {teamNames.map((team) => (
        <button
          key={team.id}
          type="button"
          className={`team-nav-item${current === team.id ? " is-active" : ""}`}
          onClick={() => handleClick(team.id)}
          aria-current={current === team.id ? "true" : undefined}
        >
          {team.name}
        </button>
      ))}
    </nav>
  );
};

export default TeamNav;
