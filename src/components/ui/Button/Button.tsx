import React, { FC } from 'react';
import cn from 'classnames';

import { Variants } from '../../../constants';

import s from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  color?: string;
  variant: Variants;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: FC<Props> = ({
  children,
  variant,
  color = '#ffffff',
  isSelected,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(s.button, className, {
        [s.primary]: variant === Variants.Primary,
        [s.primarySelected]: variant === Variants.Primary && isSelected,
        [s.pagination]: variant === Variants.Pagination,
        [s.paginationSelected]: variant === Variants.Pagination && isSelected,
        [s.slider]: variant === Variants.Slider,
        [s.color]: variant === Variants.Color,
        [s.favorites]: variant === Variants.Favorites,
      })}
    >
      {variant === Variants.Color ? (
        <div className={s.innerCircle} style={{ backgroundColor: color }} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
