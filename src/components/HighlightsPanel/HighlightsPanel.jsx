import { useState, useEffect, useRef, useCallback } from "react";
import "./HighlightsPanel.css";

const PANELS = [
  {
    title: "Hackathon Win",
    img: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
  },
  {
    title: "Project Showcase",
    img: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
  },
  { title: "Workshop", img: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg" },
  {
    title: "Open Source",
    img: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
  },
  { title: "Innovation", img: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg" },
];

const CYCLE_MS = 4000; // time each slide stays active before auto-advancing

const HighlightsPanel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const rafRef = useRef(null);
  const startRef = useRef(null);
  const elapsedRef = useRef(0);

  const goTo = useCallback((index) => {
    setActiveIndex(((index % PANELS.length) + PANELS.length) % PANELS.length);
    elapsedRef.current = 0;
    startRef.current = null;
    setProgress(0);
  }, []);

  const advance = useCallback(() => {
    goTo(activeIndex + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = (timestamp) => {
      if (startRef.current === null) {
        startRef.current = timestamp - elapsedRef.current;
      }
      const elapsed = timestamp - startRef.current;
      elapsedRef.current = elapsed;
      setProgress(Math.min(elapsed / CYCLE_MS, 1));

      if (elapsed >= CYCLE_MS) {
        advance();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, activeIndex, advance]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, goTo]);

  const getOffset = (index) => {
    let diff = index - activeIndex;
    const half = PANELS.length / 2;
    if (diff > half) diff -= PANELS.length;
    if (diff < -half) diff += PANELS.length;
    return diff;
  };

  return (
    <div
      className="section-00"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="section-00-title">
        <div className="section-00-header">00 - Featured</div>
        <div className="highlights-header">Highlights.</div>
      </div>

      <div className="slideshow-stage">
        {PANELS.map((panel, index) => {
          const offset = getOffset(index);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 2;
          if (!isVisible) return null;

          return (
            <button
              key={`${panel.title}-${index}`}
              type="button"
              className={`slide ${isActive ? "is-active" : ""}`}
              style={{
                "--offset": offset,
              }}
              onClick={() => goTo(index)}
              aria-label={`Show slide ${index + 1}: ${panel.title}`}
            >
              <div className="slide-image">
                <img src={panel.img} alt={panel.title} />
              </div>

              <div className="slide-scrim" />

              {isActive && (
                <div className="slide-index">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(PANELS.length).padStart(2, "0")}
                </div>
              )}

              {isActive && (
                <div className="slide-caption">
                  <span className="slide-caption-prompt">&gt;</span>
                  <h3>{panel.title}</h3>
                  <span className="slide-caption-cursor" />
                </div>
              )}
            </button>
          );
        })}

        <button
          type="button"
          className="slide-arrow slide-arrow-left"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="slide-arrow slide-arrow-right"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>

      <div className="dot-indicators">
        {PANELS.map((panel, index) => (
          <button
            type="button"
            key={`${panel.title}-dot-${index}`}
            className="dot-button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`dot ${index === activeIndex ? "is-active" : ""}`}>
              {index === activeIndex && (
                <span
                  className="dot-progress"
                  style={{ width: `${progress * 100}%` }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HighlightsPanel;
