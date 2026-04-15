import { Link } from 'react-router-dom';
import { Product } from '@/data/mockData';
import { formatCurrency } from '@/utils/currency';

const ProductCard = ({ product }: { product: Product }) => (
  <article className="product-card">
    <img src={product.image} alt={product.title} loading="lazy" />
    <div>
      <p className="muted">{product.brand} · {product.article}</p>
      <h3>{product.title}</h3>
      <p>From <strong>{formatCurrency(product.minPrice)}</strong> · Delivery {product.delivery}</p>
      <Link to={`/product/${product.article}`} className="btn btn--secondary">Compare offers</Link>
    </div>
  </article>
);

export default ProductCard;
