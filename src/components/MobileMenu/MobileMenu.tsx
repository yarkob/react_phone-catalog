import { NavBar } from '../NavBar';
import { SubNavBar } from '../SubNavBar';

import s from './MobileMenu.module.scss';

export const MobileMenu = () => {
  return (
    <div className={s.container}>
      <NavBar isMobile={true} />
      <SubNavBar isMobile={true} />
    </div>
  );
};
