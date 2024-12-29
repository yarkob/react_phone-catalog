import { FC } from 'react';

import { OPTIONS } from '../../constants';
import { Dropdown } from '../ui/Dropdown';

import s from './Sorts.module.scss';

export const Sorts: FC = () => {
  return (
    <div>
      <Dropdown options={OPTIONS} className={s.dropdown} />
    </div>
  );
};
