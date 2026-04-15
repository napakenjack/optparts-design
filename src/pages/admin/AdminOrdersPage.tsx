import { Link } from 'react-router-dom';
import DataTable from '@/components/common/DataTable';
import StatusBadge from '@/components/common/StatusBadge';

const AdminOrdersPage = () => (
  <section className="stack-md">
    <h2>Orders</h2>
    <div className="toolbar">
      <input placeholder="Search by order # or customer" />
      <select><option>Status: all</option></select>
      <input type="date" />
    </div>
    <DataTable
      headers={['Order #', 'Customer', 'Date', 'Amount', 'Status', 'Details']}
      rows={[
        ['OP-2026-10482', 'John Carter', '2026-04-10', '$112.30', <StatusBadge label="Shipped" />, <Link to="/admin/orders/10482">Open</Link>],
        ['OP-2026-10483', 'Sandra Lee', '2026-04-10', '$71.10', <StatusBadge label="Pending payment" />, <Link to="/admin/orders/10483">Open</Link>]
      ]}
    />
  </section>
);

export default AdminOrdersPage;
