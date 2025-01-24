import { FC, useContext } from 'react';
import { motion } from 'motion/react';

import { Icons, Variants } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { FullProduct } from '../../types/Phone';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ProductSlider } from '../ProductSlider';
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
  const { products } = useContext(ProductsContext);

  if (!product) {
    return <h2>No product found :(</h2>;
  }

  const { name } = product;

  return (
    <div>
      <motion.div
        animate={{
          x: [-100, 10, 0],
          transition: { duration: 1, delay: 0.1 },
        }}
      >
        <Breadcrumbs />
      </motion.div>
      <motion.div
        animate={{
          x: [-100, 10, 0],
          transition: { duration: 1, delay: 0.2 },
        }}
      >
        {' '}
        <Button className={s.backButton} variant={Variants.Back}>
          <Icon iconId={Icons.ArrowLeft} />
          Back
        </Button>
        <h2 className={s.name}>{name}</h2>
      </motion.div>
      <motion.div
        className={s.content}
        animate={{
          y: [100, -10, 0],
          transition: { duration: 1, delay: 0.3 },
        }}
      >
        <ProductPageSlider images={product.images} className={s.slider} />
        <div className={s.variants}>
          <ProductVariants fullProduct={product} />
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
        <div className={s.productSlider}>
          <ProductSlider
            products={products.slice(0, 8)}
            title="You may also like"
          />
        </div>
      </motion.div>
    </div>
  );
};
