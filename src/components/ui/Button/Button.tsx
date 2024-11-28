import React, { FC } from 'react';
import cn from 'classnames';

import { Constants } from '../../../constants';

import s from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  color?: string;
  variant: Constants;
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
        [s.primary]: variant === Constants.Primary,
        [s.primarySelected]: variant === Constants.Primary && isSelected,
        [s.pagination]: variant === Constants.Pagination,
        [s.slider]: variant === Constants.Slider,
        [s.color]: variant === Constants.Color,
        [s.favorites]: variant === Constants.Favorites,
      })}
    >
      {variant === Constants.Color ? (
        <div className={s.innerCircle} style={{ backgroundColor: color }} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
