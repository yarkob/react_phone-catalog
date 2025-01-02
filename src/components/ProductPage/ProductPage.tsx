import { FC } from 'react';

import { Variants } from '../../constants';
import { Product } from '../../types';
import Button from '../ui/Button';

import s from './ProductPage.module.scss';

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
      <Button variant={Variants.Back} />
      <h2 className={s.name}>{name}</h2>
      <div className={s.content}></div>
    </div>
  );
};
