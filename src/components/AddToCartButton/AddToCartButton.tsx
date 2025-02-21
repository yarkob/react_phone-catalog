import React, { FC, useContext } from 'react';

import { LocalStorage, Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { useLocalStorage } from '../../hooks';
import { CartProduct, Product } from '../../types';
import Button from '../ui/Button';

interface Props {
  propProduct: Product | undefined;
}

export const AddToCartButton: FC<Props> = ({ propProduct }) => {
  const { cart, setCart } = useContext(ProductsContext);
  const [cartData, setCartData] = useLocalStorage<CartProduct[]>(
    LocalStorage.Cart,
  );

  const isSelected = propProduct
    ? cartData.map(item => item.product.id).includes(propProduct.id)
    : false;

  if (!propProduct) {
    return <h2>Oops</h2>;
  }

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isSelected) {
      setCart(prevState =>
        prevState.filter(item => item.product.id !== propProduct.id),
      );
      setCartData(
        JSON.stringify(cart.filter(item => item.product.id !== propProduct.id)),
      );
    } else {
      setCart(prevState => [...prevState, { product: propProduct, amount: 1 }]);
      setCartData(
        JSON.stringify([...cartData, { product: propProduct, amount: 1 }]),
      );
    }
  };

  return (
    <Button
      onClick={addToCartHandler}
      isSelected={isSelected}
      variant={Variants.Primary}
    >
      {isSelected ? 'Added' : 'Add to cart'}
    </Button>
  );
};
