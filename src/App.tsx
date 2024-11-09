import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Accessories from './pages/Accessories';
import AccessoryDetails from './pages/AccessoryDetails';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Header from './components/header';
import Footer from './components/footer';
import Phones from './pages/Phones';
import PhoneDetails from './pages/PhoneDetails';
import Tablets from './pages/Tablets';
import TabletDetails from './pages/TabletDetails';
import PageNotFound from './pages/PageNotFound';
import DemoPage from './components/ui/DemoPage';

export const App = () => (
  <div className="App">
    <Header />
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
    <Footer />
  </div>
);
