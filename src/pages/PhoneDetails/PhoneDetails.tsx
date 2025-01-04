import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductPage } from '../../components/ProductPage';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const PhoneDetails = () => {
  const { fullPhones } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = fullPhones.find(fullPhone => fullPhone.id === productId);

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};
