import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { SingleValue } from 'react-select';

import { ITEMS_ON_PAGE_OPTIONS, SORT_OPTIONS } from '../constants';
import { Option, Product } from '../types';
import { noop } from '../utils';

interface IProductsContext {
  phones: Product[];
  setPhones: Dispatch<SetStateAction<Product[]>>;
  tablets: Product[];
  setTablets: Dispatch<SetStateAction<Product[]>>;
  accessories: Product[];
  setAccessories: Dispatch<SetStateAction<Product[]>>;
  sortOption: SingleValue<Option>;
  setSortOption: Dispatch<SetStateAction<SingleValue<Option>>>;
  itemsPerPage: SingleValue<Option>;
  setItemsPerPage: Dispatch<SetStateAction<SingleValue<Option>>>;
}

interface Props {
  children: React.ReactNode;
}

export const ProductsContext = createContext<IProductsContext>({
  phones: [],
  setPhones: noop,
  tablets: [],
  setTablets: noop,
  accessories: [],
  setAccessories: noop,
  sortOption: SORT_OPTIONS[0],
  setSortOption: noop,
  itemsPerPage: ITEMS_ON_PAGE_OPTIONS[1],
  setItemsPerPage: noop,
});

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<SingleValue<Option>>(
    SORT_OPTIONS[0],
  );
  const [itemsPerPage, setItemsPerPage] = useState<SingleValue<Option>>(
    ITEMS_ON_PAGE_OPTIONS[1],
  );

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
        phones,
        setPhones,
        tablets,
        setTablets,
        accessories,
        setAccessories,
        sortOption,
        setSortOption,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
