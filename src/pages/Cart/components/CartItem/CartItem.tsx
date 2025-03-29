import { FC } from 'react';

import Button from '../../../../components/ui/Button';
import { Icon } from '../../../../components/ui/Icon';
import { Icons, Variants } from '../../../../constants';
import { CartProduct } from '../../../../types';

import s from './CartItem.module.scss';

interface Props {
  cartProduct: CartProduct;
  removeItemHandler: () => void;
}

export const CartItem: FC<Props> = ({ cartProduct, removeItemHandler }) => {
  if (!cartProduct) {
    return <div>Oopsie</div>;
  }

  const { product, amount } = cartProduct;

  return (
    <div className={s.container}>
      <Icon
        iconId={Icons.Close}
        className={s.removeButton}
        onClick={removeItemHandler}
      />
      <img alt={product.category} src={product.image} className={s.image} />
      <p>{product.name}</p>
      <div className={s.amountContainer}>
        <Button variant={Variants.Slider}>-</Button>
        <span className={s.amountText}>{amount}</span>
        <Button variant={Variants.Slider}>+</Button>
      </div>
      <h3 className={s.price}>${product.price}</h3>
    </div>
  );
};
