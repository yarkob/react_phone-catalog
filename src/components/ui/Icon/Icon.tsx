import { FC } from 'react';
import cn from 'classnames';

import { Icons } from '../../../constants';

import s from './Icon.module.scss';

interface Props {
  iconId: Icons;
  className?: string;
  onClick?: () => void;
}

export const Icon: FC<Props> = ({ iconId, className, onClick }) => {
  return (
    <svg onClick={onClick} className={cn(s.container, className)}>
      <use href={`img/icons/sprite.svg#${iconId}`} />
    </svg>
  );
};
