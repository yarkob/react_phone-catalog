import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Icons, Variants } from '../../../constants';
import { Product } from '../../../types';
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
              variant={Variants.Primary}
            >
              {isSelected ? 'Added' : 'Add to cart'}
            </Button>
            <Button className={s.favorite} variant={Variants.Favorites}>
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
    </Link>
  );
};
