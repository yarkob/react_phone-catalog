import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { Variants } from '../../../constants';
import { Product } from '../../../types';
import { FavoritesButton } from '../../FavoritesButton';
import { TechSpecs } from '../../TechSpecs';
import Button from '../Button';
import { Line } from '../Line';

import s from './ProductCard.module.scss';

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isSelected, setIsSelected] = useState(false);

  const addToCartHandler = () => {
    setIsSelected(!isSelected);
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
            <FavoritesButton product={product} />
          </div>
        </div>
      </div>
    </Link>
  );
};
