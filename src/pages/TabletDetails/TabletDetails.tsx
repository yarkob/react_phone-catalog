import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductPage } from '../../components/ProductPage';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const TabletDetails = () => {
  const { fullTablets } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = fullTablets.find(fullTablet => fullTablet.id === productId);

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};
