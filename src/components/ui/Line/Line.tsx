import { FC } from 'react';
import cn from 'classnames';

import s from './Line.module.scss';

interface Props {
  className?: string;
}

export const Line: FC<Props> = ({ className = '' }) => {
  return (
    <span
      className={cn(s.line, {
        [className]: className,
      })}
    />
  );
};
