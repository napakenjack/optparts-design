const StatusBadge = ({ label }: { label: string }) => {
  const statusClass = label.toLowerCase().includes('delivered')
    ? 'badge--success'
    : label.toLowerCase().includes('cancel')
      ? 'badge--danger'
      : 'badge--warning';
  return <span className={`badge ${statusClass}`}>{label}</span>;
};

export default StatusBadge;
