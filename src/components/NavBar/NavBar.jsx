import "./NavBar.css";

const NavBar = () => {
  const navItems = [
    { label: "Home", href: "#home" }, //HighlightsPanel.jsx
    { label: "About", href: "#about" }, //About.jsx
    { label: "Projects", href: "#projects" }, //Projects.jsx
    { label: "Achievements", href: "#achievements" }, //Achievements.jsx
    { label: "Team", href: "#team" }, //TeamMembers.jsx
    { label: "Join Us", href: "#join", highlight: true }, //JoinTeam.jsx
  ];

  return (
    <nav className="nav-bar">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`nav-item${item.highlight ? " nav-item--highlight" : ""}`}
        >
          <span className="nav-label">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
