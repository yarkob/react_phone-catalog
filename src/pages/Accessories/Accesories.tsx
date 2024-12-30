import { useContext } from 'react';

import { Catalog } from '../../components/Catalog';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const Accessories = () => {
  const { accessories } = useContext(ProductsContext);

  return (
    <div>
      <Catalog title="Accessories" products={accessories} />
    </div>
  );
};
