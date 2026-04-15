import { Link } from 'react-router-dom';
import DataTable from '@/components/common/DataTable';
import StatusBadge from '@/components/common/StatusBadge';

const AccountOrdersPage = () => (
  <section className="stack-md">
    <h1>My orders</h1>
    <DataTable
      headers={['Order #', 'Date', 'Amount', 'Status', 'Details']}
      rows={[
        ['OP-2026-10482', 'Apr 10, 2026', '$112.30', <StatusBadge label="Shipped" />, <Link to="/account/orders/10482">Open</Link>],
        ['OP-2026-10390', 'Apr 05, 2026', '$46.25', <StatusBadge label="Delivered" />, <Link to="/account/orders/10390">Open</Link>]
      ]}
    />
  </section>
);

export default AccountOrdersPage;
