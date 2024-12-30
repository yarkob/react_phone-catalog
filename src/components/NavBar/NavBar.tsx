import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import s from './NavBar.module.scss';

interface Props {
  isMobile?: boolean;
}

export const NavBar: FC<Props> = ({ isMobile = false }) => {
  return (
    <div
      className={cn(s.container, {
        [s.mobileOn]: isMobile,
      })}
    >
      <NavLink
        className={({ isActive }) =>
          cn(s.link, {
            [s.linkSelected]: isActive,
          })
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(s.link, {
            [s.linkSelected]: isActive,
          })
        }
        to="/phones"
      >
        Phones
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(s.link, {
            [s.linkSelected]: isActive,
          })
        }
        to="/tablets"
      >
        Tablets
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(s.link, {
            [s.linkSelected]: isActive,
          })
        }
        to="/accessories"
      >
        Accessories
      </NavLink>
    </div>
  );
};
