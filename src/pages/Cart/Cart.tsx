import { useContext } from 'react';

import { Checkout } from '../../components/Checkout';
import Button from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Icons, LocalStorage, Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { useLocalStorage } from '../../hooks';
import { CartProduct } from '../../types';
import { CartItem } from './components/CartItem';

import s from './Cart.module.scss';

export const Cart = () => {
  const { cart, setCart } = useContext(ProductsContext);
  const [, setCartData] = useLocalStorage<CartProduct[]>(LocalStorage.Cart);

  const removeItemHandler = (item: CartProduct) => () => {
    setCart(
      cart.filter(cartItem => cartItem.product.itemId !== item.product.itemId),
    );
    setCartData(
      JSON.stringify(
        cart.filter(cartItem => cartItem.product.id !== item.product.id),
      ),
    );
  };

  return (
    <div>
      <Button variant={Variants.Back} className={s.backButton}>
        <Icon iconId={Icons.ArrowLeft} />
        Back
      </Button>
      <h1 className={s.title}>Cart</h1>
      <div className={s.content}>
        <div className={s.items}>
          {cart.map(item => (
            <CartItem
              key={item.product.itemId}
              cartProduct={item}
              removeItemHandler={removeItemHandler(item)}
            />
          ))}
        </div>
        {!!cart.length && <Checkout className={s.checkout} cart={cart} />}
      </div>
    </div>
  );
};
