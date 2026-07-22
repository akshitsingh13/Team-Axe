import "./TeamCard.css";

const TeamCard = ({ member }) => {
  return (
    <article className="member-card">
      <div className="member-photo">
        <img src={member.photoPath} />
      </div>
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p className="member-desc">{member.shortDescription}</p>
      <div className="member-links">
        {member.social.map((social) => (
          <a
            className="icon-link"
            key={social.type}
            href={social.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </article>
  );
};

export default TeamCard;
