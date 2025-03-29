import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { COLORS, Variants } from '../../../../constants';
import { FullProduct } from '../../../../types';
import { Color } from '../../../../types/Color';
import { AddToCartButton } from '../../../AddToCartButton';
import { FavoritesButton } from '../../../FavoritesButton';
import { TechSpecs } from '../../../TechSpecs';
import Button from '../../../ui/Button';
import { Line } from '../../../ui/Line';

import s from './ProductVariants.module.scss';

interface Props {
  fullProduct: FullProduct;
}

export const ProductVariants: FC<Props> = ({ fullProduct }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleChange = (prevStat: string, newStat: string) => () => {
    if (!productId) {
      return;
    }

    navigate(
      `/${fullProduct.category}/${productId.replace(prevStat.toLowerCase().replace(' ', '-'), newStat.toLowerCase().replace(' ', '-'))}`,
    );
  };

  return (
    <div className={s.container}>
      <div>
        <p className={s.label}>Available colors</p>
        <div className={s.select}>
          {fullProduct.colorsAvailable.map((color: Color) => (
            <Button
              key={color}
              variant={Variants.Color}
              color={COLORS[color]}
              onClick={handleChange(fullProduct.color, color)}
              isSelected={productId?.includes(color)}
            />
          ))}
        </div>
      </div>
      <Line />
      <div>
        <p className={s.label}>Select capacity</p>
        <div className={s.select}>
          {fullProduct.capacityAvailable.map(capacity => (
            <Button
              key={capacity}
              variant={Variants.Basic}
              onClick={handleChange(fullProduct.capacity, capacity)}
              isSelected={productId?.includes(capacity.toLowerCase())}
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
            <span className={s.priceDiscount}>
              ${fullProduct.priceDiscount}
            </span>
            <span className={s.priceRegular}>${fullProduct.priceRegular}</span>
          </div>
          <div className={s.buttons}>
            <AddToCartButton productId={fullProduct.id} />
            <FavoritesButton productId={fullProduct.id} />
          </div>
        </div>
        <TechSpecs
          specs={{
            screen: fullProduct.screen,
            resolution: fullProduct.resolution,
            processor: fullProduct.processor,
            ram: fullProduct.ram,
          }}
          uppercaseSpecIdx={3}
        />
      </div>
    </div>
  );
};
