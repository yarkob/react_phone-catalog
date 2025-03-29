import React, { FC, useContext } from 'react';
import cn from 'classnames';

import { Icons, LocalStorage, Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { useLocalStorage } from '../../hooks';
import { Product } from '../../types';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';

import s from './FavoritesButton.module.scss';

interface Props {
  product: Product;
}

export const FavoritesButton: FC<Props> = ({ product }) => {
  const { setFavorites } = useContext(ProductsContext);
  const [favoritesData, setFavoritesData] = useLocalStorage<Product[]>(
    LocalStorage.Favorites,
  );

  const isFavorite = favoritesData
    .map(favorite => favorite.id)
    .includes(product.id);

  const favoriteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isFavorite) {
      setFavorites(prevState =>
        prevState.filter(favorite => favorite.id !== product.id),
      );
      setFavoritesData(
        JSON.stringify(
          favoritesData.filter(favorite => favorite.id !== product.id),
        ),
      );
    } else {
      setFavorites(prevState => [...prevState, product]);
      setFavoritesData(JSON.stringify([...favoritesData, product]));
    }
  };

  return (
    <Button
      className={s.favorite}
      variant={Variants.Favorites}
      onClick={favoriteHandler}
    >
      {isFavorite ? (
        <Icon
          iconId={Icons.FavoritesFilled}
          className={cn('', {
            [s.filled]: isFavorite,
          })}
        />
      ) : (
        <Icon iconId={Icons.Favorites} />
      )}
    </Button>
  );
};
