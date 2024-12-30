import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, type SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

import { Icons, IMAGES, IMAGES_MOBILE, Variants } from '../../constants';
import { useScreenDetector } from '../../hooks';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';

import './MainSlider.css';
import s from './MainSlider.module.scss';

export const MainSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );
  const { isMobile, isSmallest } = useScreenDetector();

  const onInit = (swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  };

  const handlePrev = () => swiperInstance?.slidePrev();
  const handleNext = () => swiperInstance?.slideNext();

  return (
    <div className={s.container}>
      <Button
        className={s.button}
        variant={Variants.Slider}
        onClick={handlePrev}
      >
        <Icon iconId={Icons.ArrowLeft} />
      </Button>
      <Swiper
        pagination={true}
        onInit={onInit}
        loop={true}
        modules={[Navigation, Pagination]}
        className={s.swiper}
      >
        {(isMobile || isSmallest ? IMAGES_MOBILE : IMAGES).map(
          ({ alt, src }) => (
            <SwiperSlide key={alt} className={s.swiperSlide}>
              <img className={s.image} alt={alt} src={src} />
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <Button
        className={s.button}
        variant={Variants.Slider}
        onClick={handleNext}
      >
        <Icon iconId={Icons.ArrowRight} />
      </Button>
    </div>
  );
};
