import { useState } from 'react';
import cn from 'classnames';

import { Icons } from '../../constants';
import { NavBar } from '../NavBar';
import { SubNavBar } from '../SubNavBar';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';

import s from './Header.module.scss';

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const onMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className={s.container}>
      <Logo className={s.logo} />
      <NavBar isMenu={isMenu} />
      <div
        onClick={onMenu}
        className={cn('', {
          [s.hidden]: isMenu,
        })}
      >
        <Icon className={s.icon} iconId={Icons.Menu} />
      </div>
      <SubNavBar />
    </div>
  );
};
