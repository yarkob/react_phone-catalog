import { FC, useContext } from 'react';

import { SortBy } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { Product } from '../../types';
import { Pagination } from '../Pagination';
import { Sorts } from '../Sorts';

interface Props {
  title: string;
  products: Product[];
}

export const Catalog: FC<Props> = ({ title, products }) => {
  const { option } = useContext(ProductsContext);

  const sortedProducts = [...products].sort((a, b) => {
    if (option?.value === SortBy.Newest) {
      return b.year - a.year;
    }

    if (option?.value === SortBy.Oldest) {
      return a.year - b.year;
    }

    if (option?.value === SortBy.ExpensiveFirst) {
      return b.price - a.price;
    }

    if (option?.value === SortBy.CheapFirst) {
      return a.price - b.price;
    }

    return 0;
  });

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{products.length}</p>
      </div>
      <Sorts />
      <Pagination products={sortedProducts} />
    </div>
  );
};
