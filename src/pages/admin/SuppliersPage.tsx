import { Link } from 'react-router-dom';
import DataTable from '@/components/common/DataTable';
import StatusBadge from '@/components/common/StatusBadge';

const SuppliersPage = () => (
  <section className="stack-md">
    <div className="row-between">
      <h2>Suppliers</h2>
      <button className="btn">Add supplier</button>
    </div>
    <DataTable
      headers={['Supplier', 'Status', 'API URL', 'Actions']}
      rows={[
        ['AutoHub East', <StatusBadge label="Active" />, 'https://api.autohub.example', <Link to="/admin/suppliers/1">Edit</Link>],
        ['MotorStock Pro', <StatusBadge label="Inactive" />, 'https://api.motorstock.example', <Link to="/admin/suppliers/2">Edit</Link>]
      ]}
    />
  </section>
);

export default SuppliersPage;
