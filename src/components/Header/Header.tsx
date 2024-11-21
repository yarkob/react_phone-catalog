import { Link, useSearchParams } from 'react-router-dom';

import { Icons } from '../../constants';
import { MobileMenu } from '../MobileMenu';
import { NavBar } from '../NavBar';
import { SearchLink } from '../SearchLink/SearchLink';
import { SubNavBar } from '../SubNavBar';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';

import s from './Header.module.scss';

export const Header = () => {
  const [searchParams] = useSearchParams();
  const modal = searchParams.get('modal');
  const isMenu = modal === 'menu';

  return (
    <div className={s.container}>
      <Link to="/">
        <Logo className={s.logo} />
      </Link>
      <NavBar />
      <SearchLink
        params={{ modal: isMenu ? null : 'menu' }}
        className={s.burger}
      >
        <Icon className={s.icon} iconId={Icons.Menu} />
      </SearchLink>
      <SubNavBar />
      {isMenu && <MobileMenu />}
    </div>
  );
};
