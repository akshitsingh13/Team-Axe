import { useEffect } from "react";
import { getYoutubeEmbedUrl } from "./youtube";
import "./Lightbox.css";

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!image) return null;

  const renderContent = () => {
    if (image.type === "youtube") {
      const embedUrl = getYoutubeEmbedUrl(image.url);
      return (
        <div
          className="lightbox-video-wrap"
          onClick={(e) => e.stopPropagation()}
        >
          {embedUrl ? (
            <iframe
              className="lightbox-video"
              src={embedUrl}
              title={image.label || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="lightbox-error">Couldn't load this video.</div>
          )}
        </div>
      );
    }

    if (image.type === "pdf") {
      return (
        <div className="lightbox-pdf-wrap" onClick={(e) => e.stopPropagation()}>
          <iframe
            className="lightbox-pdf"
            src={image.src}
            title={image.label || "Document"}
          />
        </div>
      );
    }

    // default: image
    return (
      <img
        className="lightbox-image"
        src={image.src}
        alt={image.alt || ""}
        onClick={(e) => e.stopPropagation()}
      />
    );
  };

  const caption = image.label || image.alt;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close viewer"
      >
        &times;
      </button>
      {renderContent()}
      {caption && (
        <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
          {caption}
        </div>
      )}
    </div>
  );
};

export default Lightbox;
