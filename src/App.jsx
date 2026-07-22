import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import HighlightsPanel from "./components/HighlightsPanel/HighlightsPanel";
import About from "./components/About/About";
import TeamMembers from "./components/Team-Section/TeamMembers";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import JoinTeam from "./components/JoinTeam/JoinTeam";
import ContactUs from "./components/Contact-Us/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      "section, [class*='Card'], .timeline-event, .project-card, .team-card, .achievement-card",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-in");
        });
      },
      { threshold: 0.12 },
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
      <Header />
      <NavBar />
      <HighlightsPanel />
      <About />
      <TeamMembers />
      <Projects />
      <Achievements />
      <JoinTeam />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
