import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineEvent from "./TimelineEvent";
import Lightbox from "./Lightbox";
import timelineData from "./timelineData";
import "./Timeline.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const [activeImage, setActiveImage] = useState(null);
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the neon green line drawing downwards
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
      <div className="timeline-events">
        {/* Neon progress line */}
        <div className="timeline-progress-line" ref={progressLineRef}></div>

        {timelineData.map((event, index) => {
          const side = event.side || (index % 2 === 0 ? "right" : "left");
          return (
            <TimelineEvent
              key={event.id}
              event={event}
              side={side}
              onImageClick={setActiveImage}
            />
          );
        })}
      </div>

      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
};

export default Timeline;
