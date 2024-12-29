import { FC, useContext } from 'react';
import { SingleValue } from 'react-select';

import { ITEMS_ON_PAGE_OPTIONS, SORT_OPTIONS } from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { Option } from '../../types';
import { Dropdown } from '../ui/Dropdown';

import s from './Sorts.module.scss';

export const Sorts: FC = () => {
  const { sortOption, setSortOption, itemsPerPage, setItemsPerPage } =
    useContext(ProductsContext);

  const handleSort = (currentOption: SingleValue<Option>) => {
    setSortOption(currentOption);
  };

  const handleItemsOnPage = (currentOption: SingleValue<Option>) => {
    setItemsPerPage(currentOption);
  };

  return (
    <div className={s.container}>
      <Dropdown
        option={sortOption}
        handleSelect={handleSort}
        name="Sort by"
        options={SORT_OPTIONS}
      />
      <Dropdown
        option={itemsPerPage}
        handleSelect={handleItemsOnPage}
        options={ITEMS_ON_PAGE_OPTIONS}
        name="Items on page"
      />
    </div>
  );
};
