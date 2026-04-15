import { Outlet } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';

const AdminLayout = () => (
  <main className="admin-shell">
    <AdminSidebar />
    <section className="admin-content">
      <header className="admin-top"><h1>Operations Console</h1></header>
      <Outlet />
    </section>
  </main>
);

export default AdminLayout;
