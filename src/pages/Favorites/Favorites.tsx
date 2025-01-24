import { useContext, useEffect } from 'react';

import { Catalog } from '../../components/Catalog';
import { LocalStorage } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';

export const Favorites = () => {
  const { favorites, setFavorites } = useContext(ProductsContext);

  useEffect(() => {
    const data = localStorage.getItem(LocalStorage.Favorites);
    const parsedData = JSON.parse(data || '');

    setFavorites(parsedData);
  });

  return (
    <div>
      <Catalog title="Favorites" products={favorites} showSorts={false} />
    </div>
  );
};
