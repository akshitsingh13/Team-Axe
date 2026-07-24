import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import HighlightsPanel from "./components/HighlightsPanel/HighlightsPanel";
import Journey from "./components/Journey/Journey";
import About from "./components/About/About";
import TeamMembers from "./components/Team-Section/TeamMembers";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import JoinTeam from "./components/JoinTeam/JoinTeam";
import ContactUs from "./components/Contact-Us/ContactUs";
import Footer from "./components/Footer/Footer";

function HomePage() {
  return (
    <>
      <HighlightsPanel />
      <About />
      <Projects />
      <Achievements />
      <TeamMembers />
      <JoinTeam />
      <ContactUs />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      "section, [class*='Card'], .timeline-event, .project-card, .team-card, .achievement-card",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    targets.forEach((el, i) => {
      el.classList.add("reveal-init");
      el.style.setProperty("--reveal-delay", `${(i % 6) * 80}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
