import cn from 'classnames';

import { Icons } from '../../constants';
import { scrollToTop } from '../../utils';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';

import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={cn(s.container)}>
      <div className={s.content}>
        <div className={s.logoContainer}>
          <Logo className={s.logo} />
        </div>
        <div className={s.links}>
          <span className={s.link}>GitHub</span>
          <span className={s.link}>Contacts</span>
          <span className={s.link}>Rights</span>
        </div>
        <div className={s.toTop} onClick={scrollToTop}>
          <span>Back to the top</span>
          <Icon className={s.icon} iconId={Icons.ArrowUp} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
