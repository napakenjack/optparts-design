import { Navigate, RouteObject } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';
import AccountLayout from '@/layouts/AccountLayout';
import AdminLayout from '@/layouts/AdminLayout';
import HomePage from '@/pages/public/HomePage';
import SearchPage from '@/pages/public/SearchPage';
import ProductPage from '@/pages/public/ProductPage';
import CartPage from '@/pages/public/CartPage';
import CheckoutPage from '@/pages/public/CheckoutPage';
import OrderSuccessPage from '@/pages/public/OrderSuccessPage';
import LoginPage from '@/pages/auth/LoginPage';
import AccountProfilePage from '@/pages/account/AccountProfilePage';
import AccountOrdersPage from '@/pages/account/AccountOrdersPage';
import AccountOrderDetailsPage from '@/pages/account/AccountOrderDetailsPage';
import AdminLoginPage from '@/pages/admin/AdminLoginPage';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import SuppliersPage from '@/pages/admin/SuppliersPage';
import EditSupplierPage from '@/pages/admin/EditSupplierPage';
import MarkupPage from '@/pages/admin/MarkupPage';
import OfferRulesPage from '@/pages/admin/OfferRulesPage';
import AdminOrdersPage from '@/pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from '@/pages/admin/AdminOrderDetailsPage';
import IntegrationMonitoringPage from '@/pages/admin/IntegrationMonitoringPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'product/:article', element: <ProductPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'order-success', element: <OrderSuccessPage /> },
      { path: 'auth', element: <LoginPage /> }
    ]
  },
  {
    path: '/account',
    element: <AccountLayout />,
    children: [
      { index: true, element: <Navigate to="profile" replace /> },
      { path: 'profile', element: <AccountProfilePage /> },
      { path: 'orders', element: <AccountOrdersPage /> },
      { path: 'orders/:id', element: <AccountOrderDetailsPage /> }
    ]
  },
  {
    path: '/admin/login',
    element: <AdminLoginPage />
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: 'suppliers', element: <SuppliersPage /> },
      { path: 'suppliers/:id', element: <EditSupplierPage /> },
      { path: 'markup', element: <MarkupPage /> },
      { path: 'offer-rules', element: <OfferRulesPage /> },
      { path: 'orders', element: <AdminOrdersPage /> },
      { path: 'orders/:id', element: <AdminOrderDetailsPage /> },
      { path: 'monitoring', element: <IntegrationMonitoringPage /> }
    ]
  },
  { path: '*', element: <Navigate to="/" replace /> }
];

export default routes;
