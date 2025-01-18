import { FC } from 'react';

import { Icons, Variants } from '../../constants';
import { FullProduct } from '../../types/Phone';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { TechSpecs } from '../TechSpecs';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Line } from '../ui/Line';
import { ProductAbout } from './components/ProductAbout';
import { ProductPageSlider } from './components/ProductPageSlider';
import { ProductVariants } from './components/ProductVariants';

import s from './ProductPage.module.scss';

interface Props {
  product: FullProduct | undefined;
}

export const ProductPage: FC<Props> = ({ product }) => {
  if (!product) {
    return <h2>No product found :(</h2>;
  }

  const { name } = product;

  return (
    <div>
      <Breadcrumbs />
      <Button className={s.backButton} variant={Variants.Back}>
        <Icon iconId={Icons.ArrowLeft} />
        Back
      </Button>
      <h2 className={s.name}>{name}</h2>
      <div className={s.content}>
        <ProductPageSlider images={product.images} className={s.slider} />
        <div className={s.variants}>
          <ProductVariants product={product} />
        </div>
        <div className={s.about}>
          <ProductAbout descriptions={product.description} />
        </div>
        <div className={s.specs}>
          <h3 className={s.specsTitle}>Tech specs</h3>
          <Line className={s.line} />
          <TechSpecs
            specs={{
              screen: product.screen,
              resolution: product.resolution,
              processor: product.processor,
              ram: product.ram,
              'Built in memory': product.capacity,
              camera: product.camera,
              zoom: product.zoom,
              cell: product.cell,
            }}
          />
        </div>
      </div>
    </div>
  );
};
