import { FC } from 'react';
import Select, { SingleValue } from 'react-select';

import { Option } from '../../../types';

import './Dropdown.css';
import s from './Dropdown.module.scss';

interface Props {
  options: Option[];
  className?: string;
  name: string;
  option: SingleValue<Option>;
  handleSelect: (currentOption: SingleValue<Option>) => void;
}

export const Dropdown: FC<Props> = ({
  options,
  name,
  option,
  handleSelect,
}) => {
  return (
    <div className={s.container}>
      <p className={s.name}>{name}</p>
      <Select
        className="select"
        classNamePrefix="select"
        defaultValue={options[0]}
        isSearchable={false}
        options={options}
        onChange={handleSelect}
        value={option}
      />
    </div>
  );
};
