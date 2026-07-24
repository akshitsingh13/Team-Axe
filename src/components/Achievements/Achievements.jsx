import "./Achievements.css";
import AchievementCard from "./AchievementCard";
import achievementData from "./achievementData";

const Achievements = () => {
  return (
    <div id="achievements" className="section-04">
      <div className="section-04-header">
        <div className="section-04-title">03 - By The Numbers</div>
        <div className="achievements-header">Achievements</div>
      </div>
      <div className="achievements-section">
        {achievementData.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
