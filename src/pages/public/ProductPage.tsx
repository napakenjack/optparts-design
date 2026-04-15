import { useParams } from 'react-router-dom';
import SupplierOffersTable from '@/components/product/SupplierOffersTable';
import { products, supplierOffers } from '@/data/mockData';

const ProductPage = () => {
  const { article } = useParams();
  const product = products.find((item) => item.article === article) ?? products[0];

  return (
    <article className="stack-md">
      <header>
        <p className="muted">{product.brand} · Article {product.article}</p>
        <h1>{product.title}</h1>
      </header>
      <section className="product-top">
        <img src={product.image} alt={product.title} />
        <div className="panel">
          <h2>Specifications</h2>
          <ul>
            <li>Position: Front axle</li>
            <li>Material: Ceramic blend</li>
            <li>Warranty: 12 months</li>
            <li>Compatibility: Toyota Camry 2018-2022</li>
          </ul>
          <button className="btn">Add best offer to cart</button>
        </div>
      </section>
      <section>
        <h2>Supplier Offers</h2>
        <SupplierOffersTable offers={supplierOffers} />
      </section>
    </article>
  );
};

export default ProductPage;
