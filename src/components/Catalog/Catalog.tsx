import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchFields, SORT_OPTIONS, SortBy } from '../../constants';
import { Product } from '../../types';
import { Pagination } from '../Pagination';
import { Sorts } from '../Sorts';

interface Props {
  title: string;
  products: Product[];
}

export const Catalog: FC<Props> = ({ title, products }) => {
  const [searchParams] = useSearchParams();
  const sortParam = searchParams.get(SearchFields.Sort);
  const sortOption = SORT_OPTIONS.find(option => option.value === sortParam);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption?.value === SortBy.Newest) {
      return b.year - a.year;
    }

    if (sortOption?.value === SortBy.Oldest) {
      return a.year - b.year;
    }

    if (sortOption?.value === SortBy.ExpensiveFirst) {
      return b.price - a.price;
    }

    if (sortOption?.value === SortBy.CheapFirst) {
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
