import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import DemoPage from './components/ui/DemoPage';
import { Accessories } from './pages/Accessories';
import { AccessoryDetails } from './pages/AccessoryDetails';
import { Cart } from './pages/Cart';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { PhoneDetails } from './pages/PhoneDetails';
import { Phones } from './pages/Phones';
import { TabletDetails } from './pages/TabletDetails';
import { Tablets } from './pages/Tablets';

import s from './App.module.scss';

export const App = () => (
  <div className={s.container}>
    <Header />
    <div className={s.page}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accesories/:productId" element={<AccessoryDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:productId" element={<PhoneDetails />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/tablets/:productId" element={<TabletDetails />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </div>
    <Footer />
  </div>
);
