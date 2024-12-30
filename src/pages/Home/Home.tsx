import { useContext } from 'react';
import 'swiper/css';

import { Categories } from '../../components/Categories';
import { MainSlider } from '../../components/MainSlider';
import { ProductSlider } from '../../components/ProductSlider';
import { ProductsContext } from '../../context/ProductsContextProvider';

import 'swiper/swiper-bundle.css';
import s from './Home.module.scss';

export const Home = () => {
  const { phones } = useContext(ProductsContext);
  const uniquePhones = phones.filter(phone => phone.capacity === '128GB');
  const newPhones = [...uniquePhones]
    .sort((a, b) => b.year - a.year)
    .slice(0, 12);
  const bestPricesPhones = [...phones]
    .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
    .slice(0, 12);

  return (
    <div style={{ flexGrow: 1 }}>
      <h1 className={s.title}>Welcome to Nice Gadgets store!</h1>
      <div className={s.content}>
        <MainSlider />
        <div style={{ width: '100%' }}>
          <ProductSlider products={newPhones} title="Brand new models" />
        </div>
        <Categories />
        <div style={{ width: '100%' }}>
          <ProductSlider products={bestPricesPhones} title="Hot prices" />
        </div>
      </div>
    </div>
  );
};
