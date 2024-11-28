import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CATEGORIES } from '../../constants';

import s from './Categories.module.scss';

export const Categories: FC = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Shop by Category</h2>

      <div className={s.categories}>
        {CATEGORIES.map(({ title, models, alt, src }) => (
          <Link to={`/${alt}`} key={alt} className={s.category}>
            <img alt={alt} src={src} className={s.image} />
            <div>
              <p className={s.categoryName}>{title}</p>
              <p className={s.models}>{`${models} models`}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
