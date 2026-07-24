import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
  FaXmark,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import "./Teammembermodal.css";

const CLOSE_ANIMATION_MS = 220;

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

const TeamMemberModal = ({ member, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const requestClose = () => {
    setIsVisible(false);
    setIsClosing(true);
    setTimeout(onClose, CLOSE_ANIMATION_MS);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        requestClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      requestClose();
    }
  };

  return (
    <div
      className={`modal-overlay${isVisible ? " is-visible" : ""}`}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className={`modal-content${isVisible ? " is-visible" : ""}${isClosing ? " is-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-member-name"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={requestClose}
          aria-label="Close"
        >
          <FaXmark />
        </button>

        <div className="modal-columns">
          <div className="modal-col-left">
            <div className="modal-photo">
              <img src={member.photoPath} alt={member.name} />
            </div>

            <h2 className="modal-name" id="modal-member-name">
              {member.name}
            </h2>
            <p className="modal-role">{member.role}</p>
            <p className="modal-short-desc">{member.shortDescription}</p>

            <div className="modal-social">
              {member.social.map((social) => (
                <a
                  key={social.type}
                  className="icon-link"
                  href={social.src}
                  target={social.type === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.type}
                >
                  {socialIcon(social.type)}
                </a>
              ))}
            </div>

            {member.resumePath && (
              <a
                className="modal-resume-link"
                href={member.resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            )}
          </div>

          <div className="modal-col-right">
            <p className="modal-long-desc">{member.longDescription}</p>

            {member.contributions?.length > 0 && (
              <div className="modal-section">
                <p className="modal-section-title">Contributions</p>
                <ul className="modal-contributions">
                  {member.contributions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {member.workLinks?.length > 0 && (
              <div className="modal-section">
                <p className="modal-section-title">Work</p>
                <div className="modal-worklinks">
                  {member.workLinks.map((link) => (
                    <a
                      key={link.label}
                      className="modal-worklink"
                      href={link.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{link.label}</span>
                      <FaArrowUpRightFromSquare className="modal-worklink-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
