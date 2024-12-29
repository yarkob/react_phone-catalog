import { FC, useContext } from 'react';
import Select, { SingleValue } from 'react-select';

import { ProductsContext } from '../../../context/ProductsContextProvider';
import { Option } from '../../../types';

import './Dropdown.css';

interface Props {
  options: Option[];
  className?: string;
}

export const Dropdown: FC<Props> = ({ options }) => {
  const { option, setOption } = useContext(ProductsContext);

  const handleSelect = (currentOption: SingleValue<Option>) => {
    setOption(currentOption);
  };

  return (
    <Select
      className="select"
      classNamePrefix="select"
      defaultValue={options[0]}
      isSearchable={false}
      options={options}
      onChange={handleSelect}
      value={option}
    />
  );
};
