import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import s from './ProductPageSlider.module.scss';

interface Props {
  images: string[];
  className?: string;
}

export const ProductPageSlider: FC<Props> = ({ images, className = '' }) => {
  const [, setCurrentImage] = useState<string>('');
  const swiperRef = useRef<SwiperClass>();

  return (
    <div
      className={cn('', {
        [className]: className,
      })}
    >
      <Swiper
        className={s.swiper}
        wrapperClass={s.wrapper}
        onSwiper={swiper => {
          swiperRef.current = swiper;
          setCurrentImage(images[swiper.activeIndex]);
        }}
        loop={true}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (idx, bulletClassName) => {
            const image = `/${images[idx]}`;

            return `
                <div
                  class=${bulletClassName}
                >
                  <img alt="Product image" src=${image} class=${s.controlImg} />
                </div>
              `;
          },
          bulletClass: s.control,
          bulletActiveClass: s.controlSelected,
          horizontalClass: s.controls,
        }}
      >
        {images.map(image => (
          <SwiperSlide key={image} className={s.swiperSlide}>
            <img alt="Current product image" src={image} className={s.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
