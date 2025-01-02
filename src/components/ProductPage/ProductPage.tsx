import { FC } from 'react';

import { Icons, Variants } from '../../constants';
import { Product } from '../../types';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';

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
      <Button variant={Variants.Back}>
        <Icon iconId={Icons.ArrowLeft} />
        Back
      </Button>
      <h2 className={s.name}>{name}</h2>
      <div className={s.content}></div>
    </div>
  );
};
