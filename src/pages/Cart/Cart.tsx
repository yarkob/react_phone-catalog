import { useContext } from 'react';

import { Checkout } from '../../components/Checkout';
import Button from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { Icons, Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { CartProduct } from '../../types';
import { CartItem } from './components/CartItem';

import s from './Cart.module.scss';

export const Cart = () => {
  const { cartData, setCartData } = useContext(ProductsContext);

  const removeItemHandler = (item: CartProduct) => () => {
    setCartData(
      cartData.filter(
        cartItem => cartItem.product.itemId !== item.product.itemId,
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
          {cartData.map(item => (
            <CartItem
              key={item.product.itemId}
              cartProduct={item}
              removeItemHandler={removeItemHandler(item)}
            />
          ))}
        </div>
        {!!cartData.length && (
          <Checkout className={s.checkout} cart={cartData} />
        )}
      </div>
    </div>
  );
};
