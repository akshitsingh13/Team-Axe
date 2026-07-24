import { useEffect, useState } from "react";
import { FaXmark, FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./ResumeModal.css";

const CLOSE_ANIMATION_MS = 220;

const ResumeModal = ({ member, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

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
      className={`resume-overlay${isVisible ? " is-visible" : ""}`}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className={`resume-content${isVisible ? " is-visible" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        <div className="resume-header">
          <p className="resume-title" id="resume-modal-title">
            {member.name} <span>/ Resume</span>
          </p>
          <div className="resume-header-actions">
            <a
              className="resume-open-tab"
              href={member.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in new tab"
            >
              <FaArrowUpRightFromSquare />
            </a>
            <button
              type="button"
              className="resume-close-btn"
              onClick={requestClose}
              aria-label="Close"
            >
              <FaXmark />
            </button>
          </div>
        </div>

        <div className="resume-body">
          {member.resumePath ? (
            <iframe src={member.resumePath} title={`${member.name} resume`} />
          ) : (
            <div className="resume-fallback">Resume not available yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
