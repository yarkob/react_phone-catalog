import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { SingleValue } from 'react-select';

import { OPTIONS } from '../constants';
import { Option, Product } from '../types';
import { noop } from '../utils';

interface IProductsContext {
  phones: Product[];
  setPhones: Dispatch<SetStateAction<Product[]>>;
  tablets: Product[];
  setTablets: Dispatch<SetStateAction<Product[]>>;
  accessories: Product[];
  setAccessories: Dispatch<SetStateAction<Product[]>>;
  option: SingleValue<Option>;
  setOption: Dispatch<SetStateAction<SingleValue<Option>>>;
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
  option: OPTIONS[0],
  setOption: noop,
});

export const ProductsProvider: FC<Props> = ({ children }) => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [option, setOption] = useState<SingleValue<Option>>(OPTIONS[0]);

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
        option,
        setOption,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
