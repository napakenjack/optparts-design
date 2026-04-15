import { Link } from 'react-router-dom';

const OrderSuccessPage = () => (
  <section className="state success">
    <h1>Order placed successfully</h1>
    <p>Order #OP-2026-10482 has been sent to processing.</p>
    <div className="actions">
      <Link to="/account/orders" className="btn">View my order</Link>
      <Link to="/search" className="btn btn--secondary">Continue shopping</Link>
    </div>
  </section>
);

export default OrderSuccessPage;
