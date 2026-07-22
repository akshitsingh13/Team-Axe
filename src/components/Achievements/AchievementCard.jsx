import "./AchievementCard.css";

const AchievementCard = ({ achievement }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-accent"></div>

      <h2>{achievement.value}</h2>

      <span>{achievement.label}</span>
    </div>
  );
};

export default AchievementCard;
