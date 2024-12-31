import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductPage } from '../../components/ProductPage';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const AccessoryDetails = () => {
  const { accessories } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = accessories.find(accessory => accessory.itemId === productId);

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};
