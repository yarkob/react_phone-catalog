import { Icons, Variants } from '../../../constants';
import Button from '../Button';
import { Icon } from '../Icon';
import { ProductCard } from '../ProductCard';

import s from './DemoPage.module.scss';

const DemoPage = () => {
  return (
    <div className={s.page}>
      <Button variant={Variants.Primary}>Primary</Button>
      <Button variant={Variants.Primary} isSelected={true}>
        Primary
      </Button>
      <Button variant={Variants.Pagination}>1</Button>
      <Button variant={Variants.Slider}>
        <Icon iconId={Icons.ArrowRight} />
      </Button>
      <Button variant={Variants.Color} color="#FCDBC1" />
      <Button variant={Variants.Favorites}>
        <Icon iconId={Icons.Favorites} />
      </Button>
      <div>
        <h1 className={s.h1}>
          H1 - The quick brown fox jumps over the lazy dog
        </h1>
        <h2 className={s.h2}>
          H2 - The quick brown fox jumps over the lazy dog
        </h2>
        <h3 className={s.h3}>
          H3 - The quick brown fox jumps over the lazy dog
        </h3>
        <h4 className={s.h4}>
          H4 - The quick brown fox jumps over the lazy dog
        </h4>
        <p className={s.uppercase}>
          Uppercase - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.buttons}>
          Buttons - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.bodyText}>
          Body text - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.smallText}>
          Small text - The quick brown fox jumps over the lazy dog
        </p>
      </div>
      <ProductCard
        product={{
          id: 1,
          category: 'phones',
          itemId: 'apple-iphone-7-32gb-black',
          name: 'Apple iPhone 7 32GB Black',
          fullPrice: 400,
          price: 375,
          screen: "4.7' IPS",
          capacity: '32GB',
          color: 'black',
          ram: '2GB',
          year: 2016,
          image: 'img/phones/apple-iphone-7/black/00.webp',
        }}
      />
    </div>
  );
};

export default DemoPage;
