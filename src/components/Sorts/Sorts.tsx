import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SingleValue } from 'react-select';

import {
  ITEMS_ON_PAGE_OPTIONS,
  SearchFields,
  SORT_OPTIONS,
  SortBy,
} from '../../constants';
import { Option } from '../../types';
import { Dropdown } from '../ui/Dropdown';

import s from './Sorts.module.scss';

export const Sorts: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get(SearchFields.Sort);
  const itemsPerPageParam = searchParams.get(SearchFields.ItemsPerPage);
  const sortOption = SORT_OPTIONS.find(option => option?.value === sortParam);
  const itemsPerPage = ITEMS_ON_PAGE_OPTIONS.find(
    option => String(option?.value) === itemsPerPageParam,
  );

  const handleSort = (currentOption: SingleValue<Option>) => {
    if (!currentOption) {
      return;
    }

    if (currentOption.value === SortBy.Newest) {
      searchParams.delete(SearchFields.Sort);
    } else {
      searchParams.set(SearchFields.Sort, String(currentOption.value));
    }

    setSearchParams(searchParams);
  };

  const handleItemsPerPage = (currentOption: SingleValue<Option>) => {
    if (!currentOption) {
      return;
    }

    if (currentOption.value === 16) {
      searchParams.delete(SearchFields.ItemsPerPage);
    } else {
      searchParams.set(SearchFields.ItemsPerPage, String(currentOption.value));
    }

    setSearchParams(searchParams);
  };

  return (
    <div className={s.container}>
      <Dropdown
        option={sortOption ? sortOption : SORT_OPTIONS[0]}
        handleSelect={handleSort}
        name="Sort by"
        options={SORT_OPTIONS}
      />
      <Dropdown
        option={itemsPerPage ? itemsPerPage : ITEMS_ON_PAGE_OPTIONS[1]}
        handleSelect={handleItemsPerPage}
        options={ITEMS_ON_PAGE_OPTIONS}
        name="Items on page"
      />
    </div>
  );
};
