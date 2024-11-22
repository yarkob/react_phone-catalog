import cn from 'classnames';

import { Icons } from '../../constants';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';

import s from './Footer.module.scss';

export const Footer = () => {
  const onToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cn(s.container)}>
      <div className={s.logoContainer}>
        <Logo className={s.logo} />
      </div>
      <div className={s.links}>
        <span className={s.link}>GitHub</span>
        <span className={s.link}>Contacts</span>
        <span className={s.link}>Rights</span>
      </div>
      <div className={s.toTop}>
        Back to the top{' '}
        <span onClick={onToTheTop}>
          <Icon className={s.icon} iconId={Icons.ArrowUp} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
