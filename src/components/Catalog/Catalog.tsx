import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchFields, SORT_OPTIONS, SortBy } from '../../constants';
import { Product } from '../../types';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Pagination } from '../Pagination';
import { Sorts } from '../Sorts';

import s from './Catalog.module.scss';

interface Props {
  title: string;
  products: Product[];
}

export const Catalog: FC<Props> = ({ title, products }) => {
  const [searchParams] = useSearchParams();
  const sortParam = searchParams.get(SearchFields.Sort) || SortBy.Newest;
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
      <Breadcrumbs />
      <div className={s.titleContainer}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.numberOfModels}>{products.length} models</p>
      </div>
      <Sorts />
      <Pagination products={sortedProducts} />
    </div>
  );
};
