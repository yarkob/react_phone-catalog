import { useContext } from 'react';

import { Catalog } from '../../components/Catalog';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const Favorites = () => {
  const { favorites } = useContext(ProductsContext);

  return (
    <div>
      <Catalog title="Favorites" products={favorites} showSorts={false} />
    </div>
  );
};
