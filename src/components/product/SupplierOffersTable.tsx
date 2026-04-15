import { formatCurrency } from '@/utils/currency';

type Offer = {
  supplier: string;
  price: number;
  stock: number;
  delivery: string;
  city: string;
  recommended: boolean;
};

const SupplierOffersTable = ({ offers }: { offers: Offer[] }) => (
  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>
          <th>Supplier</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Delivery</th>
          <th>Warehouse</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr key={offer.supplier} className={offer.recommended ? 'is-recommended' : ''}>
            <td>{offer.supplier}{offer.recommended && <span className="badge badge--success">Recommended</span>}</td>
            <td>{formatCurrency(offer.price)}</td>
            <td>{offer.stock > 0 ? `${offer.stock} pcs` : 'Out of stock'}</td>
            <td>{offer.delivery}</td>
            <td>{offer.city}</td>
            <td><button className="btn btn--small">Add to cart</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SupplierOffersTable;
