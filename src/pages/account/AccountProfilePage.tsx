import StatusBadge from '@/components/common/StatusBadge';

const AccountProfilePage = () => (
  <section className="stack-md">
    <h1>Profile</h1>
    <div className="panel">
      <p><strong>Name:</strong> John Carter</p>
      <p><strong>Email:</strong> john@example.com</p>
      <p><strong>Default address:</strong> 1240 Market St, Dallas, TX</p>
      <p><strong>Latest order status:</strong> <StatusBadge label="Shipped" /></p>
    </div>
  </section>
);

export default AccountProfilePage;
