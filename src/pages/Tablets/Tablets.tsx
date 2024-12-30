import { useContext } from 'react';

import { Catalog } from '../../components/Catalog';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const Tablets = () => {
  const { tablets } = useContext(ProductsContext);

  return (
    <div>
      <Catalog title="Tablets" products={tablets} />
    </div>
  );
};
