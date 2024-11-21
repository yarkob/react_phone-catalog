import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Icons } from '../../constants';
import { Icon } from '../ui/Icon';

import s from './SubNavBar.module.scss';

interface Props {
  isMobile?: boolean;
}

export const SubNavBar: FC<Props> = ({ isMobile = false }) => {
  return (
    <div
      className={cn(s.container, {
        [s.onMobile]: isMobile,
      })}
    >
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          cn(s.link, {
            [s.iconSelected]: isActive,
          })
        }
      >
        <Icon className={s.icon} iconId={Icons.Favorites} />
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          cn(s.link, {
            [s.iconSelected]: isActive,
          })
        }
      >
        <Icon className={s.icon} iconId={Icons.ShoppingBag} />
      </NavLink>
    </div>
  );
};
