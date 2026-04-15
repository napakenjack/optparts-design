import SearchBar from '@/components/search/SearchBar';
import SearchSuggestions from '@/components/search/SearchSuggestions';
import { popularQueries } from '@/data/mockData';

const HomePage = () => (
  <>
    <section className="hero">
      <p className="kicker">Auto Parts Marketplace</p>
      <h1>Find the right spare part in under 30 seconds.</h1>
      <p>Search by article number, brand, or part name and compare trusted supplier offers instantly.</p>
      <SearchBar large />
      <SearchSuggestions items={popularQueries} />
    </section>
    <section className="benefits">
      <article><h3>Verified suppliers</h3><p>Only active suppliers with quality score tracking.</p></article>
      <article><h3>Best offer logic</h3><p>Price, delivery, and stock are ranked in one view.</p></article>
      <article><h3>Fast checkout</h3><p>Mobile-optimized checkout with clear delivery options.</p></article>
    </section>
  </>
);

export default HomePage;
