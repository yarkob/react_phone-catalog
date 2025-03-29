import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { LocalStorage } from '../constants';
import { useFetchProducts, useLocalStorage } from '../hooks';
import { CartProduct, FullProduct, Product } from '../types';
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
  favoritesData: Product[];
  setFavoritesData: Dispatch<SetStateAction<Product[]>>;
  cartData: CartProduct[];
  setCartData: Dispatch<SetStateAction<CartProduct[]>>;
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
  favoritesData: [],
  setFavoritesData: noop,
  cartData: [],
  setCartData: noop,
});

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [favoritesData, setFavoritesData] = useLocalStorage<Product[]>(
    LocalStorage.Favorites,
    [],
  );
  const [cartData, setCartData] = useLocalStorage<CartProduct[]>(
    LocalStorage.Cart,
    [],
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [phones, setPhones] = useState<Product[]>([]);
  const [fullPhones, setFullPhones] = useState<FullProduct[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [fullTablets, setFullTablets] = useState<FullProduct[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [fullAccessories, setFullAccessories] = useState<FullProduct[]>([]);

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
        favoritesData,
        setFavoritesData,
        cartData,
        setCartData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
