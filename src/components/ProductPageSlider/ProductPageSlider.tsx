import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import s from './ProductPageSlider.module.scss';

interface Props {
  images: string[];
}

export const ProductPageSlider: FC<Props> = ({ images }) => {
  return (
    <div className={s.container}>
      <Swiper>
        {images.map(image => (
          <SwiperSlide key={image} className={s.slide}>
            <img alt="Product image" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
