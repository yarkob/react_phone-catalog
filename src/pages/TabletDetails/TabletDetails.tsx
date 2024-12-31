import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductPage } from '../../components/ProductPage';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const TabletDetails = () => {
  const { tablets } = useContext(ProductsContext);
  const { productId } = useParams();
  const product = tablets.find(tablet => tablet.itemId === productId);

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};
