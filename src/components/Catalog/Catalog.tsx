import { FC } from 'react';

import { Product } from '../../types';
import { Pagination } from '../Pagination';
import { Sorts } from '../Sorts';

interface Props {
  title: string;
  products: Product[];
}

export const Catalog: FC<Props> = ({ title, products }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{products.length}</p>
      </div>
      <Sorts />
      <Pagination products={products} />
    </div>
  );
};
