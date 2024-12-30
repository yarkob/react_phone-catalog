import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Icons } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { capitalize } from '../../utils';
import { Icon } from '../ui/Icon';

import s from './Breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = () => {
  const { phones } = useContext(ProductsContext);
  const url = useLocation().pathname;
  const breadcrumbs = url.split('/').slice(1);

  return (
    <div className={s.container}>
      <Link to={`/`} className={s.homeIcon}>
        <Icon iconId={Icons.Home} />
      </Link>
      {breadcrumbs.map(breadcrumb => {
        const name = phones.find(phone => phone.itemId === breadcrumb)?.name;

        return (
          <div key={breadcrumb} className={s.breadcrumb}>
            <Icon iconId={Icons.ArrowRight} className={s.icon} />
            <Link to={`/${breadcrumb}`} className={s.link}>
              {breadcrumbs.length > 1 ? name : capitalize(breadcrumb)}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
