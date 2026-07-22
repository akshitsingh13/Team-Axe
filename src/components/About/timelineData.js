// Add or edit timeline events here. Each event renders as one card.
// side is assigned automatically by index (even = right, odd = left)
// unless you pass an explicit `side` of "left" or "right".
//
// Each entry in `media` needs a `type` of "image", "pdf", or "youtube":
//
//   { type: "image",   src: "/assets/timeline/photo.jpg", alt: "Team photo" }
//   { type: "pdf",     src: "/assets/timeline/certificate.pdf", label: "Certificate" }
//   { type: "youtube", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", label: "Demo Video" }
//
// `label` is optional for images (alt text is used instead) but recommended
// for pdf/youtube so the thumbnail tag makes sense.

const timelineData = [
  {
    id: "evt-01",
    title: "SIH Level 1",
    month: "Sept",
    year: "2025",
    description:
      "College level round cleared. P.S.: AI-Powered Precise Train Traffic Control (Railways)",
    media: [
      {
        type: "image",
        src: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
        alt: "SIH Level 1 photo 1",
      },
      {
        type: "image",
        src: "src/assets/SIH-Level-1 Photo/sih-photo-2.jpeg",
        alt: "SIH Level 1 photo 2",
      },
      {
        type: "pdf",
        src: "src/assets/SIH-Level-1 Photo/SIH2025-IDEA-Presentation.final2nd.pdf",
        label: "Idea Presentation",
      },
    ],
  },
  {
    id: "evt-02",
    title: "SIH Level 2",
    month: "Oct",
    year: "2025",
    description: "Presented our demo for Level 2.",
    media: [
      {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=rSw_uJd-ySI",
        label: "Demo Video",
      },
    ],
  },
  {
    id: "evt-03",
    title: "KPIT Hackathon",
    month: "Oct",
    year: "2025",
    description:
      "Participated in the hackathon with P.S.: Maximizing Section Throughput using AI-Powered Precise Train Traffic Control (Railways).",
    media: [
      {
        type: "pdf",
        src: "src/assets/KPIT/KPIT SPARKLE.pdf",
        label: "KPIT Sparkle",
      },
    ],
  },
  {
    id: "evt-04",
    title: "Samved Hackathon",
    month: "Feb",
    year: "2026",
    description:
      "Participated in the hackathon with P.S.: Develop an AI-powered predictive safety system that forecasts hazardous sewer conditions and enables confidence-based entry decisions to protect sanitation workers before critical thresholds are breached.",
    media: [
      {
        type: "image",
        src: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
        alt: "Samved Hackathon photo 1",
      },
      {
        type: "image",
        src: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
        alt: "Samved Hackathon photo 2",
      },
    ],
  },
  {
    id: "evt-05",
    title: "MIT GDG Hackathon",
    month: "March",
    year: "2026",
    description:
      "Modern cities, businesses, and public spaces rely on CCTV for security. However, traditional systems act only as passive recording tools and cannot automatically understand activities in the scene. As surveillance networks grow, managing and analyzing large volumes of video becomes increasingly difficult.",
    media: [
      {
        type: "image",
        src: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
        alt: "MIT GDG Hackathon photo 1",
      },
      {
        type: "image",
        src: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
        alt: "MIT GDG Hackathon photo 2",
      },
      {
        type: "pdf",
        src: "src/assets/MIT-GDG/AXE.pdf",
        label: "AXE Presentation",
      },
    ],
  },
  {
    id: "evt-06",
    title: "MGM GDG Hackathon, Nanded",
    month: "April",
    year: "2026",
    description: "NETRA - AI Powered Smart Surveillance System",
    media: [
      {
        type: "image",
        src: "src/assets/SIH-Level-1 Photo/sih-photo-1.jpeg",
        alt: "MGM GDG Hackathon photo 1",
      },
      {
        type: "image",
        src: "src/assets/MGM-GDG/mgm-photo-1.png",
        alt: "MGM GDG Hackathon photo 2",
      },
      {
        type: "pdf",
        src: "src/assets/MIT-GDG/AXE.pdf",
        label: "AXE Presentation",
      },
    ],
  },
];

export default timelineData;
