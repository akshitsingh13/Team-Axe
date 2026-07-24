import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
  FaCircleInfo,
  FaFileLines,
} from "react-icons/fa6";
import "./TeamCard.css";
import TeamMemberModal from "./Teammembermodal";
import ResumeModal from "./ResumeModal";

const socialIcon = (type) => {
  switch (type) {
    case "github":
      return <FaGithub />;
    case "linkdin":
    case "linkedin":
      return <FaLinkedinIn />;
    case "email":
      return <FaEnvelope />;
    case "instagram":
      return <FaInstagram />;
    default:
      return null;
  }
};

const TeamCard = ({ member }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <article className="member-card">
        <div className="member-photo">
          <img src={member.photoPath} alt={member.name} />
        </div>
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-desc">{member.shortDescription}</p>

        <div className="member-footer">
          <div className="member-links">
            {member.social.map((social) => (
              <a
                className="icon-link"
                key={social.type}
                href={social.src}
                target={social.type === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.type}
              >
                {socialIcon(social.type)}
              </a>
            ))}
            {member.resumePath && (
              <button
                type="button"
                className="icon-link info-btn"
                onClick={() => setIsResumeOpen(true)}
                aria-label={`View ${member.name}'s resume`}
              >
                <FaFileLines />
              </button>
            )}
            <button
              type="button"
              className="icon-link info-btn"
              onClick={() => setIsModalOpen(true)}
              aria-label={`More about ${member.name}`}
            >
              <FaCircleInfo />
            </button>
          </div>
        </div>
      </article>

      {isModalOpen && (
        <TeamMemberModal
          member={member}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal member={member} onClose={() => setIsResumeOpen(false)} />
      )}
    </>
  );
};

export default TeamCard;
