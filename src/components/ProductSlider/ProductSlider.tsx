import { FC, useMemo, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperClass } from 'swiper/swiper-react';

import { Icons, Variants } from '../../constants';
import { Product } from '../../types';
import { useScreenDetector } from '../../utils';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ProductCard } from '../ui/ProductCard';

import s from './ProductSlider.module.scss';

interface Props {
  products: Product[];
  title: string;
}

export const ProductSlider: FC<Props> = ({ products, title }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const { isSmallest, isMobile, isTablet } = useScreenDetector();

  const slidesAmount = useMemo(() => {
    if (isSmallest) {
      return 1;
    }

    if (isMobile) {
      return 2;
    }

    if (isTablet) {
      return 3;
    }

    return 4;
  }, [isSmallest, isMobile, isTablet]);

  const onInit = (swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  };

  const handlePrev = () => swiperInstance?.slidePrev();
  const handleNext = () => swiperInstance?.slideNext();

  return (
    <div>
      <div className={s.navigation}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.buttons}>
          <Button onClick={handlePrev} variant={Variants.Slider}>
            <Icon iconId={Icons.ArrowLeft} />
          </Button>
          <Button onClick={handleNext} variant={Variants.Slider}>
            <Icon iconId={Icons.ArrowRight} />
          </Button>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={slidesAmount}
          spaceBetween={16}
          onInit={onInit}
          pagination={true}
          modules={[Navigation]}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
