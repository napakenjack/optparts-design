import SearchBar from '@/components/search/SearchBar';
import ProductCard from '@/components/product/ProductCard';
import Pagination from '@/components/common/Pagination';
import { products } from '@/data/mockData';

const SearchPage = () => (
  <>
    <section className="stack-sm">
      <h1>Search Results</h1>
      <SearchBar defaultValue="Brake pads" />
      <div className="toolbar">
        <div className="chips">
          <button className="chip">In stock</button>
          <button className="chip">Delivery today</button>
          <button className="chip">Brand: Ferodo</button>
        </div>
        <select aria-label="Sort results">
          <option>Sort: Recommended</option>
          <option>Price: low to high</option>
          <option>Delivery: fastest first</option>
        </select>
      </div>
    </section>
    <section className="grid cards">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </section>
    <Pagination />
  </>
);

export default SearchPage;
