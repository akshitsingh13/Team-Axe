import "./TeamNav.css";
import teamNames from "./teamNames";

const TeamNav = ({ activeId, onSelect }) => {
  return (
    <nav className="team-nav" aria-label="Team categories">
      {teamNames.map((team) => (
        <button
          key={team.id}
          type="button"
          className={`team-nav-item${activeId === team.id ? " is-active" : ""}`}
          onClick={() => onSelect(team.id)}
          aria-current={activeId === team.id ? "true" : undefined}
        >
          {team.name}
        </button>
      ))}
    </nav>
  );
};

export default TeamNav;
