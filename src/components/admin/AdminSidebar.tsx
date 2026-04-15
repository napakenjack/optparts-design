import { NavLink } from 'react-router-dom';

const AdminSidebar = () => (
  <aside className="sidebar">
    <h3>Admin</h3>
    <NavLink to="/admin">Dashboard</NavLink>
    <NavLink to="/admin/suppliers">Suppliers</NavLink>
    <NavLink to="/admin/markup">Markup</NavLink>
    <NavLink to="/admin/offer-rules">Offer rules</NavLink>
    <NavLink to="/admin/orders">Orders</NavLink>
    <NavLink to="/admin/monitoring">Monitoring</NavLink>
  </aside>
);

export default AdminSidebar;
