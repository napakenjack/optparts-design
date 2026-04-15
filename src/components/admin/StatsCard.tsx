const StatsCard = ({ label, value }: { label: string; value: string }) => (
  <div className="stats-card">
    <p className="muted">{label}</p>
    <h3>{value}</h3>
  </div>
);

export default StatsCard;
