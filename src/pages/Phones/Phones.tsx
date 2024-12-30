import { useContext } from 'react';

import { Catalog } from '../../components/Catalog';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const Phones = () => {
  const { phones } = useContext(ProductsContext);

  return (
    <div>
      <Catalog title="Mobile Phones" products={phones} />
    </div>
  );
};
