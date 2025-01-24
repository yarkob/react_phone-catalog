import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Icons, LocalStorage, Variants } from '../../../constants';
import { ProductsContext } from '../../../context/ProductsContextProvider';
import { useLocalStorage } from '../../../hooks';
import { Product } from '../../../types';
import { TechSpecs } from '../../TechSpecs';
import Button from '../Button';
import { Icon } from '../Icon';
import { Line } from '../Line';

import s from './ProductCard.module.scss';

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { setFavorites } = useContext(ProductsContext);
  const [favoritesData, setFavoritesData] = useLocalStorage<Product[]>(
    LocalStorage.Favorites,
  );

  const isFavorite = favoritesData
    .map(favorite => favorite.id)
    .includes(product.id);

  const addToCartHandler = () => {
    setIsSelected(prevState => !prevState);
  };

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
      setFavorites([...favoritesData, product]);
      setFavoritesData(JSON.stringify([...favoritesData, product]));
    }
  };

  return (
    <Link to={`/${product.category}/${product.itemId}`} className={s.link}>
      <div className={s.container}>
        <div className={s.content}>
          <img className={s.image} alt="phone" src={`./${product.image}`} />
          <p title={product.name} className={s.name}>
            {product.name}
          </p>
          <div className={s.price}>
            <span className={s.priceDiscount}>${product.price}</span>
            <span className={s.priceRegular}>${product.fullPrice}</span>
          </div>
          <Line />
          <TechSpecs
            specs={{
              screen: product.screen,
              capacity: product.capacity,
              ram: product.ram,
            }}
            uppercaseSpecIdx={2}
          />
          <div className={s.buttons}>
            <Button
              onClick={addToCartHandler}
              isSelected={isSelected}
              variant={Variants.Primary}
            >
              {isSelected ? 'Added' : 'Add to cart'}
            </Button>
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
          </div>
        </div>
      </div>
    </Link>
  );
};
