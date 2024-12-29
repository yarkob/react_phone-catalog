import { FC, useContext } from 'react';
import Select, { SingleValue } from 'react-select';

import { ProductsContext } from '../../../context/ProductsContextProvider';
import { Option } from '../../../types';

import './Dropdown.css';
import s from './Dropdown.module.scss';

interface Props {
  options: Option[];
  className?: string;
  name: string;
}

export const Dropdown: FC<Props> = ({ options, name }) => {
  const { option, setOption } = useContext(ProductsContext);

  const handleSelect = (currentOption: SingleValue<Option>) => {
    setOption(currentOption);
  };

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
