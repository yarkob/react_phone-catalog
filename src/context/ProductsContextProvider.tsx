import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { LocalStorage } from '../constants';
import { useLocalStorage } from '../hooks';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { Product } from '../types';
import { FullProduct } from '../types/Phone';
import { noop } from '../utils';

interface IProductsContext {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  phones: Product[];
  setPhones: Dispatch<SetStateAction<Product[]>>;
  fullPhones: FullProduct[];
  setFullPhones: Dispatch<SetStateAction<FullProduct[]>>;
  tablets: Product[];
  setTablets: Dispatch<SetStateAction<Product[]>>;
  fullTablets: FullProduct[];
  setFullTablets: Dispatch<SetStateAction<FullProduct[]>>;
  accessories: Product[];
  setAccessories: Dispatch<SetStateAction<Product[]>>;
  fullAccessories: FullProduct[];
  setFullAccessories: Dispatch<SetStateAction<FullProduct[]>>;
  favorites: Product[];
  setFavorites: Dispatch<SetStateAction<Product[]>>;
}

interface Props {
  children: React.ReactNode;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  setProducts: noop,
  phones: [],
  setPhones: noop,
  fullPhones: [],
  setFullPhones: noop,
  tablets: [],
  setTablets: noop,
  fullTablets: [],
  setFullTablets: noop,
  accessories: [],
  setAccessories: noop,
  fullAccessories: [],
  setFullAccessories: noop,
  favorites: [],
  setFavorites: noop,
});

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [favoritesData] = useLocalStorage<Product[]>(LocalStorage.Favorites);

  const [products, setProducts] = useState<Product[]>([]);
  const [phones, setPhones] = useState<Product[]>([]);
  const [fullPhones, setFullPhones] = useState<FullProduct[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [fullTablets, setFullTablets] = useState<FullProduct[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [fullAccessories, setFullAccessories] = useState<FullProduct[]>([]);
  const [favorites, setFavorites] = useState<Product[]>(() => favoritesData);

  useEffect(() => {
    fetch('api/products.json')
      .then(data => data.json())
      .then(data => {
        setPhones(
          data.filter((product: Product) => product.category === 'phones'),
        );
        setTablets(
          data.filter((product: Product) => product.category === 'tablets'),
        );
        setAccessories(
          data.filter((product: Product) => product.category === 'accessories'),
        );
      });
  }, []);

  useEffect(() => {
    setProducts([...phones, ...tablets, ...accessories]);
  }, [phones, tablets, accessories]);

  useFetchProducts('api/phones.json', setFullPhones);
  useFetchProducts('api/tablets.json', setFullTablets);
  useFetchProducts('api/accessories.json', setFullAccessories);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        phones,
        setPhones,
        fullPhones,
        setFullPhones,
        tablets,
        setTablets,
        fullTablets,
        setFullTablets,
        accessories,
        setAccessories,
        fullAccessories,
        setFullAccessories,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
