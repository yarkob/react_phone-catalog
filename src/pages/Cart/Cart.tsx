import { useContext } from 'react';

import Button from '../../components/ui/Button';
import { Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { CartItem } from './components/CartItem';

import s from './Cart.module.scss';

export const Cart = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <Button variant={Variants.Back} />
      <h1 className={s.title}>Cart</h1>
      <CartItem product={products[0]} />
    </div>
  );
};
