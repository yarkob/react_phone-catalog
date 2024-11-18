import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import s from './NavBar.module.scss';

interface Props {
  isMenu: boolean;
}

export const NavBar: FC<Props> = ({ isMenu }) => {
  return (
    <div
      className={cn(s.container, {
        hidden: isMenu,
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
