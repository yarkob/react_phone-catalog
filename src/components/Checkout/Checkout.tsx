import { FC } from 'react';
import cn from 'classnames';

import { Variants } from '../../constants';
import { CartProduct } from '../../types';
import Button from '../ui/Button';
import { Line } from '../ui/Line';

import s from './Checkout.module.scss';

interface Props {
  cart: CartProduct[];
  className?: string;
}

export const Checkout: FC<Props> = ({ cart, className = '' }) => {
  return (
    <div className={cn(s.container, { [className]: className })}>
      <h2 className={s.price}>
        ${cart.reduce((acc, item) => acc + item.product.price, 0)}
      </h2>
      <p className={s.totalFor}>
        Total for {cart.length} {cart.length === 1 ? 'item' : 'items'}
      </p>
      <Line className={s.line} />
      <Button variant={Variants.Primary}>Checkout</Button>
    </div>
  );
};
