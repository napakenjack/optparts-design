import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import AccountSidebar from '@/components/account/AccountSidebar';

const AccountLayout = () => (
  <>
    <Header />
    <main className="container page split-layout">
      <AccountSidebar />
      <section><Outlet /></section>
    </main>
  </>
);

export default AccountLayout;
