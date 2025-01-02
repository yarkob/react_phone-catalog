import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductPage } from '../../components/ProductPage';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const PhoneDetails = () => {
  const { phones } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = phones.find(phone => phone.itemId === productId);

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};
