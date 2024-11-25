import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './Logo.module.scss';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className = '' }) => {
  return (
    <Link to="/">
      <img
        className={cn(s.container, {
          [className]: className,
        })}
        src="../../../public/img/logo.png"
        alt="logo"
      />
    </Link>
  );
};
