import { Categories } from '../../components/Categories';
import { MainSlider } from '../../components/MainSlider';

import s from './Home.module.scss';

export const Home = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <h1 className={s.title}>Welcome to Nice Gadgets store!</h1>
      <div className={s.content}>
        <MainSlider />
        <div>Brand new models</div>
        <Categories />
        <div>Hot prices</div>
      </div>
    </div>
  );
};
