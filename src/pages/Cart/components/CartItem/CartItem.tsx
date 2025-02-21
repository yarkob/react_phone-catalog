import { FC } from 'react';

import Button from '../../../../components/ui/Button';
import { Icon } from '../../../../components/ui/Icon';
import { Icons, Variants } from '../../../../constants';
import { CartProduct } from '../../../../types';

import s from './CartItem.module.scss';

interface Props {
  cartProduct: CartProduct;
}

export const CartItem: FC<Props> = ({ cartProduct }) => {
  if (!cartProduct) {
    return <div>Oopsie</div>;
  }

  const { product, amount } = cartProduct;

  return (
    <div className={s.container}>
      <Icon iconId={Icons.Close} className={s.icon} />
      <img alt={product.category} src={product.image} className={s.image} />
      <p>{product.name}</p>
      <div>
        <Button variant={Variants.Slider}>-</Button>
        <span>{amount}</span>
        <Button variant={Variants.Slider}>+</Button>
      </div>
      <h3 className={s.price}>${product.price}</h3>
    </div>
  );
};
