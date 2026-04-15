import { NavLink } from 'react-router-dom';

const AccountSidebar = () => (
  <aside className="sidebar">
    <h3>My Account</h3>
    <NavLink to="/account/profile">Profile</NavLink>
    <NavLink to="/account/orders">Orders</NavLink>
  </aside>
);

export default AccountSidebar;
