import { useEffect, useState } from 'react';

import { Icons, MAX_MOBILE_WIDTH } from '../../constants';
import { NavBar } from '../NavBar';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';

import s from './Header.module.scss';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenu, setIsMenu] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (window.innerWidth > MAX_MOBILE_WIDTH) {
      setIsMenu(false);
    }

    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onMenu = () => {
    setIsMenu(!isMenu);
  };

  const onFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={s.container}>
      <Logo />
      {isMenu && windowWidth <= MAX_MOBILE_WIDTH && (
        <NavBar isMobile={isMenu} />
      )}
      {windowWidth > MAX_MOBILE_WIDTH && <NavBar isMobile={false} />}
      {windowWidth <= MAX_MOBILE_WIDTH ? (
        <div onClick={onMenu}>
          <Icon className={s.icon} iconId={Icons.Menu} />
        </div>
      ) : (
        <div className={s.menu}>
          <div onClick={onFavorite}>
            <Icon className={s.icon} iconId={Icons.Favorites} />
          </div>
          <div>
            <Icon className={s.icon} iconId={Icons.ShoppingBag} />
          </div>
        </div>
      )}
    </div>
  );
};
