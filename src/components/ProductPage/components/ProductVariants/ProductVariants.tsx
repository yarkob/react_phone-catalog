import { FC, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { COLORS, Variants } from '../../../../constants';
import { ProductsContext } from '../../../../context/ProductsContextProvider';
import { Color } from '../../../../types/Color';
import { FullProduct } from '../../../../types/Phone';
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
  const productIdArr = productId?.split('-') || [];
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);

  const changeProduct = (propToChange: string, excludeIdx: number) => {
    const changedProduct = productIdArr
      .toSpliced(excludeIdx, 1, propToChange.toLowerCase())
      .join('-');

    navigate(`/${fullProduct.category}/${changedProduct}`);
  };

  const handleColors = (color: string) => () =>
    changeProduct(color, productIdArr.length - 1);

  const handleCapacity = (capacity: string) => () =>
    changeProduct(capacity, productIdArr.length - 2);

  const [isSelected, setIsSelected] = useState(false);

  const addToCartHandler = () => {
    setIsSelected(prevState => !prevState);
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
              onClick={handleColors(color)}
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
            <span className={s.priceDiscount}>
              ${fullProduct.priceDiscount}
            </span>
            <span className={s.priceRegular}>${fullProduct.priceRegular}</span>
          </div>
          <div className={s.buttons}>
            <Button
              onClick={addToCartHandler}
              isSelected={isSelected}
              variant={Variants.Primary}
            >
              {isSelected ? 'Added' : 'Add to cart'}
            </Button>
            <FavoritesButton
              product={products.find(
                product => product.itemId === fullProduct.id,
              )}
            />
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
