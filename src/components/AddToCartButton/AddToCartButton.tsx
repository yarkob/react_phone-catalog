import React, { FC, useContext } from 'react';

import { Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import Button from '../ui/Button';

interface Props {
  productId: string;
}

export const AddToCartButton: FC<Props> = ({ productId }) => {
  const { cartData, setCartData, products } = useContext(ProductsContext);

  const isSelected = cartData.some(item => item.product.itemId === productId);

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isSelected) {
      setCartData(prevState =>
        prevState.filter(item => item.product.itemId !== productId),
      );
    } else {
      const product = products.find(p => p.itemId === productId);

      if (!product) {
        return;
      }

      setCartData(prevState => [...prevState, { product, amount: 1 }]);
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
