import { FC } from 'react';

import { Icons, Variants } from '../../constants';
import { FullProduct } from '../../types/Phone';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';

import s from './ProductPage.module.scss';

interface Props {
  product: FullProduct | undefined;
}

export const ProductPage: FC<Props> = ({ product }) => {
  if (!product) {
    return <h2>No product found :(</h2>;
  }

  const { name } = product;

  return (
    <div>
      <Breadcrumbs />
      <Button className={s.backButton} variant={Variants.Back}>
        <Icon iconId={Icons.ArrowLeft} />
        Back
      </Button>
      <h2 className={s.name}>{name}</h2>
      <div className={s.content}></div>
    </div>
  );
};
