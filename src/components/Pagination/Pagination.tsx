import { FC, useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Icons,
  ITEMS_ON_PAGE_OPTIONS,
  SearchFields,
  Variants,
} from '../../constants';
import { ProductsContext } from '../../context/ProductsContextProvider';
import { Product } from '../../types';
import { getNumbers } from '../../utils';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ProductCard } from '../ui/ProductCard';

import s from './Pagination.module.scss';

interface Props {
  products: Product[];
}

export const Pagination: FC<Props> = ({ products }) => {
  const { itemsPerPage } = useContext(ProductsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageStr = searchParams.get(SearchFields.Page);
  const page = pageStr ? +pageStr : 1;
  const itemsOnPage = itemsPerPage
    ? +itemsPerPage.value
    : +ITEMS_ON_PAGE_OPTIONS[1].value;

  const handlePageChange = (newPage: number) => () => {
    if (newPage === 1) {
      searchParams.delete(SearchFields.Page);
    } else {
      searchParams.set(SearchFields.Page, String(newPage));
    }

    setSearchParams(searchParams);
  };

  // const onChangePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setItemsPerPage(+event.target.value);
  //   setPage(1);
  // };

  const { begin, end } = useMemo((): { begin: number; end: number } => {
    return {
      begin: itemsOnPage * (page - 1),
      end: Math.min(itemsOnPage * page, products.length),
    };
  }, [page, products.length, itemsOnPage]);

  const pages = getNumbers(1, Math.ceil(products.length / itemsOnPage));
  const items = products.slice(begin, end);
  const isFirstPage = page === 1;
  const isLastPage = pages.length === page;

  return (
    <div>
      <div className={s.catalog}>
        {items.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className={s.buttons}>
        <Button
          variant={Variants.Slider}
          onClick={
            isFirstPage ? handlePageChange(1) : handlePageChange(page - 1)
          }
        >
          <Icon iconId={Icons.ArrowLeft} />
        </Button>
        <div className={s.numberButtons}>
          {pages.map(pageNum => (
            <Button
              isSelected={page === pageNum}
              key={pageNum}
              variant={Variants.Pagination}
              onClick={handlePageChange(pageNum)}
            >
              {pageNum}
            </Button>
          ))}
        </div>
        <Button
          variant={Variants.Slider}
          onClick={
            isLastPage
              ? handlePageChange(pages.length)
              : handlePageChange(page + 1)
          }
        >
          <Icon iconId={Icons.ArrowRight} />
        </Button>
      </div>
    </div>
  );
};
