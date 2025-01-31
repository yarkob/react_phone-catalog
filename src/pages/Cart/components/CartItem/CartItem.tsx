import { FC } from 'react';

import { Icon } from '../../../../components/ui/Icon';
import { Icons } from '../../../../constants';
import { Product } from '../../../../types';

import s from './CartItem.module.scss';

interface Props {
  product: Product;
}

export const CartItem: FC<Props> = ({ product }) => {
  return (
    <div className={s.container}>
      <Icon iconId={Icons.Close} className={s.icon} />
      <img alt={product.category} src={product.image} className={s.image} />
      <p>{product.name}</p>
      <div>Buttons</div>
      <h3 className={s.price}>${product.price}</h3>
    </div>
  );
};
