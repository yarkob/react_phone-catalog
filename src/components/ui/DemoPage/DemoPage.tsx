import { Constants, Icons } from '../../../constants';
import Button from '../Button';
import { Icon } from '../Icon';
import { ProductCard } from '../ProductCard';

import s from './DemoPage.module.scss';

const DemoPage = () => {
  return (
    <div className={s.page}>
      <Button variant={Constants.Primary}>Primary</Button>
      <Button variant={Constants.Primary} isSelected={true}>
        Primary
      </Button>
      <Button variant={Constants.Pagination}>1</Button>
      <Button variant={Constants.Slider}>
        <Icon iconId={Icons.ArrowRight} />
      </Button>
      <Button variant={Constants.Color} color="#FCDBC1" />
      <Button variant={Constants.Favorites}>
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
          id: 'apple-iphone-11-128gb-black',
          category: 'phones',
          namespaceId: 'apple-iphone-11',
          name: 'Apple iPhone 11 128GB Black',
          capacityAvailable: ['64GB', '128GB', '256GB'],
          capacity: '128GB',
          priceRegular: 1100,
          priceDiscount: 1050,
          colorsAvailable: [
            'black',
            'green',
            'yellow',
            'white',
            'purple',
            'red',
          ],
          color: 'black',
          images: [
            'img/phones/apple-iphone-11/black/00.webp',
            'img/phones/apple-iphone-11/black/01.webp',
            'img/phones/apple-iphone-11/black/02.webp',
            'img/phones/apple-iphone-11/black/03.webp',
            'img/phones/apple-iphone-11/black/04.webp',
          ],
          screen: "6.1' IPS",
          resolution: '1792x828',
          processor: 'Apple A13 Bionic',
          ram: '4GB',
          camera: '12 Mp + 12 Mp + 12MP',
          zoom: 'Digital, 5x',
          cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
        }}
      />
    </div>
  );
};

export default DemoPage;
