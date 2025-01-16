import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';

import { COLORS, Icons, Variants } from '../../constants';
import { Color } from '../../types/Color';
import { FullProduct } from '../../types/Phone';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Line } from '../ui/Line';

import s from './ProductVariants.module.scss';

interface Props {
  product: FullProduct;
}

export const ProductVariants: FC<Props> = ({ product }) => {
  const { productId } = useParams();
  const productIdArr = productId?.split('-') || [];
  const navigate = useNavigate();

  const changeProduct = (propToChange: string, excludeIdx: number) => {
    const changedProduct = productIdArr
      .toSpliced(excludeIdx, 1, propToChange.toLowerCase())
      .join('-');

    navigate(`/${product.category}/${changedProduct}`);
  };

  const handleColors = (color: string) => () =>
    changeProduct(color, productIdArr.length - 1);

  const handleCapacity = (capacity: string) => () =>
    changeProduct(capacity, productIdArr.length - 2);

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
      <div className={s.select}>
        {product.colorsAvailable.map((color: Color) => (
          <Button
            key={color}
            variant={Variants.Color}
            color={COLORS[color]}
            onClick={handleColors(color)}
          />
        ))}
      </div>
      <Line />
      <div>
        <p className={s.capacityTitle}>Select capacity</p>
        <div className={s.select}>
          {product.capacityAvailable.map(capacity => (
            <Button
              key={capacity}
              variant={Variants.Basic}
              onClick={handleCapacity(capacity)}
            >
              {capacity}
            </Button>
          ))}
        </div>
      </div>
      <Line />
      <div className={s.priceAndSpecs}>
        <div>
          <div className={s.price}>
            <span className={s.priceDiscount}>${product.priceDiscount}</span>
            <span className={s.priceRegular}>${product.priceRegular}</span>
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
        <div className={s.specs}>
          <div className={s.spec}>
            <span className={s.specName}>Screen</span>
            <span className={s.specValue}>{product.screen}</span>
          </div>
          <div className={s.spec}>
            <span className={s.specName}>Resolution</span>
            <span className={s.specValue}>{product.resolution}</span>
          </div>
          <div className={s.spec}>
            <span className={s.specName}>Processor</span>
            <span className={s.specValue}>{product.processor}</span>
          </div>
          <div className={s.spec}>
            <span className={s.specName}>RAM</span>
            <span className={s.specValue}>{product.ram}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
