import { FC } from 'react';

import { Product } from '../../types';

interface Props {
  product: Product | undefined;
}

export const ProductPage: FC<Props> = ({ product }) => {
  if (!product) {
    return <h2>No product found :(</h2>;
  }

  const { name } = product;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};
