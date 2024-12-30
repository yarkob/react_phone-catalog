import { useContext } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { Icons } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { capitalize } from '../../utils';
import { Icon } from '../ui/Icon';

import s from './Breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = () => {
  const { products } = useContext(ProductsContext);
  const { pathname } = useLocation();
  const { productId } = useParams();
  const breadcrumbs = pathname.split('/').slice(1);

  return (
    <div className={s.container}>
      <Link to={`/`} className={s.homeIcon}>
        <Icon iconId={Icons.Home} />
      </Link>
      {breadcrumbs.map(breadcrumb => (
        <div key={breadcrumb} className={s.breadcrumb}>
          <Icon iconId={Icons.ArrowRight} className={s.icon} />
          <Link to={`/${breadcrumb}`} className={s.link}>
            {capitalize(breadcrumb)}
          </Link>
        </div>
      ))}
      {productId ? (
        <div className={s.breadcrumb}>
          <Icon iconId={Icons.ArrowRight} className={s.icon} />
          <Link to={`${pathname}/${productId}`} className={s.link}>
            {products.find(product => product.id === +productId)?.name}
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
