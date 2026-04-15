import StatsCard from '@/components/admin/StatsCard';

const AdminDashboardPage = () => (
  <section className="stack-md">
    <h2>Dashboard</h2>
    <div className="grid stats-grid">
      <StatsCard label="Orders today" value="138" />
      <StatsCard label="Integration errors" value="3" />
      <StatsCard label="Active suppliers" value="24" />
      <StatsCard label="Queue backlog" value="17 jobs" />
    </div>
  </section>
);

export default AdminDashboardPage;
