import { useParams } from 'react-router-dom';
import StatusBadge from '@/components/common/StatusBadge';

const AccountOrderDetailsPage = () => {
  const { id } = useParams();

  return (
    <section className="stack-md">
      <h1>Order OP-2026-{id}</h1>
      <div className="panel">
        <p>Status: <StatusBadge label="Shipped" /></p>
        <p>Contact: John Carter · +1 555 0123</p>
        <p>Address: 1240 Market St, Dallas, TX</p>
        <p>Comment: Leave at reception desk.</p>
      </div>
      <div className="panel">
        <h3>Status history</h3>
        <ul>
          <li>Apr 10, 10:04 — Confirmed</li>
          <li>Apr 10, 12:40 — Picking</li>
          <li>Apr 11, 08:30 — Shipped</li>
        </ul>
      </div>
    </section>
  );
};

export default AccountOrderDetailsPage;
