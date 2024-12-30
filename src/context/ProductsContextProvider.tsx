import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { Product } from '../types';
import { noop } from '../utils';

interface IProductsContext {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  phones: Product[];
  setPhones: Dispatch<SetStateAction<Product[]>>;
  tablets: Product[];
  setTablets: Dispatch<SetStateAction<Product[]>>;
  accessories: Product[];
  setAccessories: Dispatch<SetStateAction<Product[]>>;
}

interface Props {
  children: React.ReactNode;
}

export const ProductsContext = createContext<IProductsContext>({
  products: [],
  setProducts: noop,
  phones: [],
  setPhones: noop,
  tablets: [],
  setTablets: noop,
  accessories: [],
  setAccessories: noop,
});

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [phones, setPhones] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);

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

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        phones,
        setPhones,
        tablets,
        setTablets,
        accessories,
        setAccessories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
