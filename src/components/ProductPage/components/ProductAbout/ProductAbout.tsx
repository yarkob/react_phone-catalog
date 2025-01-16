import { FC } from 'react';

import { Description } from '../../../../types';
import { Line } from '../../../ui/Line';

import s from './ProductAbout.module.scss';

interface Props {
  descriptions: Description[];
}

export const ProductAbout: FC<Props> = ({ descriptions }) => {
  return (
    <div>
      <h3 className={s.title}>About</h3>
      <Line className={s.line} />
      <div className={s.content}>
        {descriptions.map(description => (
          <div key={description.title}>
            <h4 className={s.subTitle}>{description.title}</h4>
            <p className={s.text}>{description.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
