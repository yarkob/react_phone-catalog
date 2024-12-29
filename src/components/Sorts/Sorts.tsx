import { FC } from 'react';

import { OPTIONS } from '../../constants';
import { Dropdown } from '../ui/Dropdown';

import s from './Sorts.module.scss';

export const Sorts: FC = () => {
  return (
    <div className={s.container}>
      <Dropdown name="Sort by" options={OPTIONS} />
    </div>
  );
};
