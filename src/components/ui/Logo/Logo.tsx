import { FC } from 'react';

import s from './Logo.module.scss';

interface Props {
  width?: number;
  height?: number;
}

export const Logo: FC<Props> = ({ width = 89, height = 32 }) => {
  return (
    <img
      className={s.container}
      style={{ width, height }}
      src="../../../public/img/logo.png"
      alt="logo"
    />
  );
};
