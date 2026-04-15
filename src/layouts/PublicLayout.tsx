import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const PublicLayout = () => (
  <>
    <Header />
    <main className="container page"><Outlet /></main>
    <Footer />
  </>
);

export default PublicLayout;
