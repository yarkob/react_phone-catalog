import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import s from './ProductPageSlider.module.scss';

interface Props {
  images: string[];
  className?: string;
}

export const ProductPageSlider: FC<Props> = ({ images, className = '' }) => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const swiperRef = useRef<SwiperClass>();

  const handleSlideTo = (idx: number) => () => {
    if (!swiperRef.current) {
      return;
    }

    swiperRef.current.slideTo(idx);
  };

  return (
    <div
      className={cn(s.container, {
        [className]: className,
      })}
    >
      <div className={s.controls}>
        {images.map((image, idx) => (
          <div
            key={image}
            className={cn(s.control, {
              [s.controlSelected]: image === currentImage,
            })}
            onClick={handleSlideTo(idx)}
          >
            <img alt="Product image" src={image} className={s.controlImg} />
          </div>
        ))}
      </div>
      <div className={s.slider}>
        <Swiper
          onSwiper={swiper => {
            swiperRef.current = swiper;
            setCurrentImage(images[swiper.realIndex]);
          }}
        >
          {images.map(image => (
            <SwiperSlide key={image}>
              <img
                alt="Current product image"
                src={image}
                className={s.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
