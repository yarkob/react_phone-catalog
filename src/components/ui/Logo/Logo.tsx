import { FC } from 'react';
import cn from 'classnames';

import s from './Logo.module.scss';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className = '' }) => {
  return (
    <img
      className={cn(s.container, {
        [className]: className,
      })}
      src="../../../public/img/logo.png"
      alt="logo"
    />
  );
};
