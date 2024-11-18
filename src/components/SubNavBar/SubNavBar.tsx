import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Icons } from '../../constants';
import { Icon } from '../ui/Icon';

import s from './SubNavBar.module.scss';

export const SubNavBar = () => {
  return (
    <div className={s.menu}>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          cn('', {
            [s.iconSelected]: isActive,
          })
        }
      >
        <Icon className={s.icon} iconId={Icons.Favorites} />
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          cn('', {
            [s.iconSelected]: isActive,
          })
        }
      >
        <Icon className={s.icon} iconId={Icons.ShoppingBag} />
      </NavLink>
    </div>
  );
};
