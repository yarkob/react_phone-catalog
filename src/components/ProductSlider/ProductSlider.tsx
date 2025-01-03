import { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FullProduct } from '../../types/Phone';

interface Props {
  fullProducts: FullProduct[];
  title: string;
}

export const ProductSlider: FC<Props> = ({ fullProducts }) => {
  return (
    <div>
      <Swiper pagination={true} modules={[Navigation]}>
        {fullProducts.map(fullProduct => (
          <SwiperSlide key={fullProduct.id}></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
