import DataTable from '@/components/common/DataTable';

const IntegrationMonitoringPage = () => (
  <section className="stack-md">
    <h2>Integration monitoring</h2>
    <div className="grid stats-grid">
      <article className="stats-card"><p className="muted">API success rate</p><h3>98.7%</h3></article>
      <article className="stats-card"><p className="muted">Failed jobs</p><h3>6</h3></article>
      <article className="stats-card"><p className="muted">Retry queue</p><h3>14</h3></article>
    </div>
    <DataTable
      headers={['Supplier', 'Last error', 'Status', 'Action']}
      rows={[
        ['MotorStock Pro', 'Timeout after 5s', 'Degraded', <button className="btn btn--small">Retry now</button>],
        ['FastParts', 'Auth key expired', 'Error', <button className="btn btn--small">Recheck</button>]
      ]}
    />
  </section>
);

export default IntegrationMonitoringPage;
