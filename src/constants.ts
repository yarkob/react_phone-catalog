export enum Constants {
  Pagination = 'pagination',
  Slider = 'slider',
  Primary = 'primary',
  Color = 'color',
  Favorites = 'favorites',
  Back = 'back',
}

export enum Icons {
  Home = 'home',
  Search = 'search',
  ShoppingBag = 'shopping-bag',
  Favorites = 'favorites',
  FavoritesFilled = 'favorites-filled',
  Minus = 'minus',
  Plus = 'plus',
  Close = 'close',
  ArrowLeft = 'arrow-left',
  ArrowRight = 'arrow-right',
  ArrowDown = 'arrow-down',
  ArrowUp = 'arrow-up',
  Menu = 'menu',
}

interface Description {
  title: string;
  text: string[];
}

export interface Product {
  id: string;
  category: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export const MAX_MOBILE_WIDTH = 639;

export const IMAGES = [
  {
    alt: 'iphone 14 pro ad',
    // eslint-disable-next-line max-len
    src: '../../../public/img/slider-images/desktop/iphone14-pro-commercial.png',
  },
  {
    alt: 'ipad pro ad',
    src: '../../../public/img/slider-images/desktop/ipad-pro-commercial.jpg',
  },
  {
    alt: 'mac mini ad',
    src: '../../../public/img/slider-images/desktop/mac-mini-commercial.jpg',
  },
  {
    alt: 'macbook pro ad',
    src: '../../../public/img/slider-images/desktop/macbook-pro-commercial.jpg',
  },
  {
    alt: 'macintosh ad',
    src: '../../../public/img/slider-images/desktop/macintosh-commercial.jpg',
  },
  {
    alt: 'apple vision pro ad',
    // eslint-disable-next-line max-len
    src: '../../../public/img/slider-images/desktop/apple-vision-pro-commercial.jpg',
  },
  {
    alt: 'iphone 16 ad',
    src: '../../../public/img/slider-images/desktop/iphone16-commercial.jpg',
  },
  {
    alt: 'apple watch 10 ad',
    // eslint-disable-next-line max-len
    src: '../../../public/img/slider-images/desktop/apple-watch10-commercial.jpg',
  },
  {
    alt: 'ipod ad',
    src: '../../../public/img/slider-images/desktop/ipod-commercial.webp',
  },
];

export const IMAGES_MOBILE = [
  {
    alt: 'iphone 14 pro ad',
    // eslint-disable-next-line max-len
    src: '../../../public/img/slider-images/mobile/iphone14-pro-commercial.png',
  },
  {
    alt: 'ipad pro ad',
    src: '../../../public/img/slider-images/mobile/ipad-pro-commercial.jpeg',
  },
  {
    alt: 'mac mini ad',
    src: '../../../public/img/slider-images/mobile/mac-mini-commercial.jpeg',
  },
  {
    alt: 'macbook pro ad',
    src: '../../../public/img/slider-images/mobile/macbook-pro-commercial.jpeg',
  },
  {
    alt: 'macintosh ad',
    src: '../../../public/img/slider-images/mobile/macintosh-commercial.jpeg',
  },
  {
    alt: 'apple vision pro ad',
    // eslint-disable-next-line max-len
    src: '../../../public/img/slider-images/mobile/apple-vision-pro-commercial.jpeg',
  },
  {
    alt: 'iphone 16 ad',
    src: '../../../public/img/slider-images/mobile/iphone16-commercial.jpeg',
  },
  {
    alt: 'apple watch 10 ad',
    // eslint-disable-next-line max-len
    src: '../../../public/img/slider-images/mobile/apple-watch10-commercial.jpeg',
  },
  {
    alt: 'ipod ad',
    src: '../../../public/img/slider-images/mobile/ipod-commercial.webp',
  },
];

export const CATEGORIES = [
  {
    title: 'Mobile Phones',
    models: 95,
    alt: 'phones',
    src: '../../../public/img/categories/phones.png',
  },
  {
    title: 'Tablets',
    models: 24,
    alt: 'tablets',
    src: '../../../public/img/categories/tablets.png',
  },
  {
    title: 'Accessories',
    models: 100,
    alt: 'accessories',
    src: '../../../public/img/categories/accessories.png',
  },
];
