import { useState } from 'react';
import QuantitySelector from './QuantitySelector';
import { formatCurrency } from '@/utils/currency';

const CartItem = ({ title, price }: { title: string; price: number }) => {
  const [qty, setQty] = useState(1);
  return (
    <article className="cart-item">
      <div>
        <h3>{title}</h3>
        <p className="muted">Unit price: {formatCurrency(price)}</p>
      </div>
      <QuantitySelector value={qty} onChange={setQty} />
      <p><strong>{formatCurrency(price * qty)}</strong></p>
      <button className="btn btn--ghost">Remove</button>
    </article>
  );
};

export default CartItem;
