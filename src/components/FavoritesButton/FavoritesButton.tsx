import React, { FC, useContext } from 'react';
import cn from 'classnames';

import { Icons, Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';

import s from './FavoritesButton.module.scss';

interface Props {
  productId: string;
}

export const FavoritesButton: FC<Props> = ({ productId }) => {
  const { favoritesData, setFavoritesData, products } =
    useContext(ProductsContext);

  const isFavorite = favoritesData.some(item => item.itemId === productId);

  const favoriteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isFavorite) {
      setFavoritesData(prevState =>
        prevState.filter(favorite => favorite.itemId !== productId),
      );
    } else {
      const product = products.find(p => p.itemId === productId);

      if (!product) {
        return;
      }

      setFavoritesData(prevState => [...prevState, product]);
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
