import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getYoutubeThumbnail } from "./youtube";
import "./TimelineEvent.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const MediaThumb = ({ item, onClick }) => {
  if (item.type === "youtube") {
    const thumb = getYoutubeThumbnail(item.url);
    return (
      <button
        className="timeline-gallery-thumb timeline-gallery-thumb--youtube"
        onClick={onClick}
        aria-label={`Play ${item.label || "video"}`}
      >
        {thumb && <img src={thumb} alt={item.label || "Video thumbnail"} />}
        <span className="timeline-play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
        <span className="timeline-gallery-tag timeline-gallery-tag--youtube">
          {item.label || "Video"}
        </span>
      </button>
    );
  }

  if (item.type === "pdf") {
    return (
      <button
        className="timeline-gallery-thumb timeline-gallery-thumb--pdf"
        onClick={onClick}
        aria-label={`Open ${item.label || "document"}`}
      >
        <svg
          className="timeline-pdf-icon"
          viewBox="0 0 24 24"
          width="36"
          height="36"
          aria-hidden="true"
        >
          <path
            d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M15 2v5h5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <span className="timeline-gallery-tag">{item.label || "PDF"}</span>
      </button>
    );
  }

  // default: image
  return (
    <button
      className="timeline-gallery-thumb"
      onClick={onClick}
      aria-label={`Expand ${item.alt || "photo"}`}
    >
      <img src={item.src} alt={item.alt || ""} />
      {item.label && <span className="timeline-gallery-tag">{item.label}</span>}
    </button>
  );
};

const TimelineEvent = ({ event, side, onImageClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const media = event.media || [];

  useEffect(() => {
    // gsap.context handles safe cleanup for React StrictMode
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        // Opens when the top of the card hits 60% down the viewport
        start: "top 60%",
        // Closes when the bottom of the card scrolls past 40% of the viewport
        end: "bottom 40%",
        onEnter: () => setIsOpen(true),
        onLeaveBack: () => setIsOpen(false),
        onEnterBack: () => setIsOpen(true),
        onLeave: () => setIsOpen(false),
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup ScrollTrigger on unmount
  }, []);

  return (
    <div className={`timeline-row timeline-row--${side}`} ref={containerRef}>
      <div className="timeline-node" />

      <div className="timeline-event-wrap">
        <div className="timeline-hover-zone">
          {/* Added dynamic class for active border styling */}
          <div
            className={`timeline-card ${isOpen ? "timeline-card--active" : ""}`}
          >
            <div className="timeline-card-meta">
              <span className="timeline-card-month">{event.month}</span>
              <span className="timeline-card-year">{event.year}</span>
            </div>
            <h3 className="timeline-card-title">{event.title}</h3>
            <p className="timeline-card-desc">{event.description}</p>
          </div>

          {media.length > 0 && (
            <div
              className={`timeline-gallery ${isOpen ? "timeline-gallery--open" : ""}`}
            >
              <div className="timeline-gallery-inner">
                {media.map((item, i) => (
                  <MediaThumb
                    key={i}
                    item={item}
                    onClick={() => onImageClick(item)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
