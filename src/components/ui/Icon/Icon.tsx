import { FC } from 'react';
import cn from 'classnames';

import { Icons } from '../../../constants';

import s from './Icon.module.scss';

interface Props {
  iconId: Icons;
  className?: string;
}

export const Icon: FC<Props> = ({ iconId, className }) => {
  return (
    <svg className={cn(s.container, className)}>
      <use href={`img/icons/sprite.svg#${iconId}`} />
    </svg>
  );
};
