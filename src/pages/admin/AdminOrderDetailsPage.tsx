import { useParams } from 'react-router-dom';

const AdminOrderDetailsPage = () => {
  const { id } = useParams();

  return (
    <section className="stack-md">
      <h2>Order OP-2026-{id}</h2>
      <div className="panel">
        <p><strong>Customer:</strong> John Carter</p>
        <p><strong>Address:</strong> 1240 Market St, Dallas, TX</p>
        <p><strong>Status:</strong> Shipped</p>
      </div>
      <div className="panel">
        <h3>Manager comment</h3>
        <textarea placeholder="Add internal comment" />
        <div className="actions">
          <button className="btn btn--secondary">Mark as picked</button>
          <button className="btn">Mark as delivered</button>
        </div>
      </div>
    </section>
  );
};

export default AdminOrderDetailsPage;
