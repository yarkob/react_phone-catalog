import React, { FC, useContext } from 'react';

import { LocalStorage, Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { useLocalStorage } from '../../hooks';
import { CartProduct, Product } from '../../types';
import Button from '../ui/Button';

interface Props {
  product: Product | undefined;
}

export const AddToCartButton: FC<Props> = ({ product }) => {
  const { cart, setCart } = useContext(ProductsContext);
  const [cartData, setCartData] = useLocalStorage<CartProduct[]>(
    LocalStorage.Cart,
  );

  const isSelected = product
    ? cartData.map(item => item.product.id).includes(product.id)
    : false;

  if (!product) {
    return <h2>Oops</h2>;
  }

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isSelected) {
      setCart(prevState =>
        prevState.filter(item => item.product.id !== product.id),
      );
      setCartData(
        JSON.stringify(cart.filter(item => item.product.id !== product.id)),
      );
    } else {
      setCart(prevState => [...prevState, { product: product, amount: 1 }]);
      setCartData(
        JSON.stringify([...cartData, { product: product, amount: 1 }]),
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
