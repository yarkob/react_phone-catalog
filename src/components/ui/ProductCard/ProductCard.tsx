import { FC, useState } from 'react';
import cn from 'classnames';

import { Constants, Icons, Product } from '../../../constants';
import Button from '../Button';
import { Icon } from '../Icon';

import s from './ProductCard.module.scss';

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToCartHandler = () => {
    setIsSelected(prevState => !prevState);
  };

  const favoriteHandler = () => {
    setIsFavorite(prevState => !prevState);
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.image} alt="phone" src={`./${product.images[0]}`} />
        <p className={s.name}>{product.name}</p>
        <div className={s.price}>
          <span className={s.priceDiscount}>${product.priceDiscount}</span>
          <span className={s.priceRegular}>${product.priceRegular}</span>
        </div>
        <span className={s.line} />
        <div className={s.specs}>
          <div className={s.spec}>
            <span className={s.specName}>Screen</span>
            <span className={s.specValue}>{product.screen}</span>
          </div>
          <div className={s.spec}>
            <span className={s.specName}>Capacity</span>
            <span className={s.specValue}>{product.capacity}</span>
          </div>
          <div className={s.spec}>
            <span className={s.specName}>RAM</span>
            <span className={s.specValue}>{product.ram}</span>
          </div>
        </div>
        <div className={s.buttons}>
          <Button
            onClick={addToCartHandler}
            isSelected={isSelected}
            variant={Constants.Primary}
            className={s.addToCart}
          >
            {isSelected ? 'Added' : 'Add to cart'}
          </Button>
          <Button className={s.favorite} variant={Constants.Favorites}>
            {isFavorite ? (
              <Icon
                onClick={favoriteHandler}
                iconId={Icons.FavoritesFilled}
                className={cn('', {
                  [s.filled]: isFavorite,
                })}
              />
            ) : (
              <Icon iconId={Icons.Favorites} onClick={favoriteHandler} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
