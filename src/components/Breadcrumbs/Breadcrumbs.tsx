import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { Icons } from '../../constants';
import { capitalize } from '../../utils';
import { Icon } from '../ui/Icon';

import s from './Breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const breadcrumbs = pathname.split('/').slice(1);

  return (
    <div className={s.container}>
      <Link to={`/`} className={s.homeIcon}>
        <Icon iconId={Icons.Home} />
      </Link>
      {breadcrumbs.map(breadcrumb => (
        <div key={breadcrumb} className={s.breadcrumb}>
          <Icon iconId={Icons.ArrowRight} className={s.icon} />
          <Link
            to={`/${breadcrumb}`}
            className={cn(s.link, {
              [s.currentLink]:
                breadcrumbs[breadcrumbs.length - 1] === breadcrumb,
            })}
          >
            {capitalize(breadcrumb)}
          </Link>
        </div>
      ))}
    </div>
  );
};
