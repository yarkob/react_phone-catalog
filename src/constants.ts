import { Option } from './types';

export enum Variants {
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

// interface Description {
//   title: string;
//   text: string[];
// }

export const MAX_MOBILE_WIDTH = 639;

export const IMAGES = [
  {
    alt: 'iphone 14 pro ad',
    // eslint-disable-next-line max-len
    src: './img/slider-images/desktop/iphone14-pro-commercial.png',
  },
  {
    alt: 'ipad pro ad',
    src: './img/slider-images/desktop/ipad-pro-commercial.jpg',
  },
  {
    alt: 'mac mini ad',
    src: './img/slider-images/desktop/mac-mini-commercial.jpg',
  },
  {
    alt: 'macbook pro ad',
    src: './img/slider-images/desktop/macbook-pro-commercial.jpg',
  },
  {
    alt: 'macintosh ad',
    src: './img/slider-images/desktop/macintosh-commercial.jpg',
  },
  {
    alt: 'apple vision pro ad',
    // eslint-disable-next-line max-len
    src: './img/slider-images/desktop/apple-vision-pro-commercial.jpg',
  },
  {
    alt: 'iphone 16 ad',
    src: './img/slider-images/desktop/iphone16-commercial.jpg',
  },
  {
    alt: 'apple watch 10 ad',
    // eslint-disable-next-line max-len
    src: './img/slider-images/desktop/apple-watch10-commercial.jpg',
  },
  {
    alt: 'ipod ad',
    src: './img/slider-images/desktop/ipod-commercial.webp',
  },
];

export const IMAGES_MOBILE = [
  {
    alt: 'iphone 14 pro ad',
    // eslint-disable-next-line max-len
    src: './img/slider-images/mobile/iphone14-pro-commercial.png',
  },
  {
    alt: 'ipad pro ad',
    src: './img/slider-images/mobile/ipad-pro-commercial.jpeg',
  },
  {
    alt: 'mac mini ad',
    src: './img/slider-images/mobile/mac-mini-commercial.jpeg',
  },
  {
    alt: 'macbook pro ad',
    src: '../../../public/img/slider-images/mobile/macbook-pro-commercial.jpeg',
  },
  {
    alt: 'macintosh ad',
    src: './img/slider-images/mobile/macintosh-commercial.jpeg',
  },
  {
    alt: 'apple vision pro ad',
    // eslint-disable-next-line max-len
    src: './img/slider-images/mobile/apple-vision-pro-commercial.jpeg',
  },
  {
    alt: 'iphone 16 ad',
    src: './img/slider-images/mobile/iphone16-commercial.jpeg',
  },
  {
    alt: 'apple watch 10 ad',
    // eslint-disable-next-line max-len
    src: './img/slider-images/mobile/apple-watch10-commercial.jpeg',
  },
  {
    alt: 'ipod ad',
    src: './img/slider-images/mobile/ipod-commercial.webp',
  },
];

export const CATEGORIES = [
  {
    title: 'Mobile Phones',
    models: 95,
    alt: 'phones',
    src: './img/categories/phones.png',
  },
  {
    title: 'Tablets',
    models: 24,
    alt: 'tablets',
    src: './img/categories/tablets.png',
  },
  {
    title: 'Accessories',
    models: 100,
    alt: 'accessories',
    src: './img/categories/accessories.png',
  },
];

export enum SearchFields {
  Page = 'page',
  Sort = 'sort',
  ItemsPerPage = 'itemsPerPage',
}

export const SORT_OPTIONS: Option[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'expensiveFirst', label: 'Expensive first' },
  { value: 'cheapFirst', label: 'Cheap first' },
];

export const enum SortBy {
  Newest = 'newest',
  Oldest = 'oldest',
  ExpensiveFirst = 'expensiveFirst',
  CheapFirst = 'cheapFirst',
}

export const ITEMS_ON_PAGE_OPTIONS: Option[] = [
  { value: 8, label: '8' },
  { value: 16, label: '16' },
  { value: 32, label: '32' },
  { value: 64, label: '64' },
];
