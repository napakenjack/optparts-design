import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container header__inner">
      <Link to="/" className="logo">OptParts</Link>
      <nav className="nav">
        <NavLink to="/search?q=brake+pads">Search</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/account/profile">Account</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
