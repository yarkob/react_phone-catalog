import { useContext } from 'react';

import { Catalog } from '../../components/Catalog';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const Favorites = () => {
  const { favoritesData } = useContext(ProductsContext);

  return (
    <div>
      <Catalog title="Favorites" products={favoritesData} showSorts={false} />
    </div>
  );
};
