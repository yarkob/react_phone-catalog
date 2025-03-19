import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductPage } from '../../components/ProductPage';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const AccessoryDetails = () => {
  const { fullAccessories } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = fullAccessories.find(
    fullAccessory => fullAccessory.id === productId,
  );

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};
