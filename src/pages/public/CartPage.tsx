import { Link } from 'react-router-dom';
import CartItem from '@/components/cart/CartItem';

const CartPage = () => (
  <section className="stack-md">
    <h1>Your Cart</h1>
    <CartItem title="Front Brake Pad Set Premium Ceramic" price={49.9} />
    <CartItem title="Oil Filter Spin-On High Flow" price={12.5} />
    <aside className="panel">
      <h3>Order Summary</h3>
      <p>Items: 2</p>
      <p><strong>Total: $112.30</strong></p>
      <Link to="/checkout" className="btn">Proceed to checkout</Link>
    </aside>
  </section>
);

export default CartPage;
