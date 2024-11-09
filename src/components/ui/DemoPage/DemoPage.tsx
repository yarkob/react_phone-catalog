import { Constants, Icons } from '../../../constants';
import Button from '../Button';
import { Icon } from '../Icon';

import s from './DemoPage.module.scss';

const DemoPage = () => {
  return (
    <div className={s.page}>
      <Button variant={Constants.Primary}>Primary</Button>
      <Button variant={Constants.Primary} isSelected={true}>
        Primary
      </Button>
      <Button variant={Constants.Pagination}>1</Button>
      <Button variant={Constants.Slider}>
        <Icon iconId={Icons.ArrowRight} />
      </Button>
      <Button variant={Constants.Color} color="#FCDBC1" />
      <Button variant={Constants.Favorites}>
        <Icon iconId={Icons.Favorites} />
      </Button>
      <div>
        <h1 className={s.h1}>
          H1 - The quick brown fox jumps over the lazy dog
        </h1>
        <h2 className={s.h2}>
          H2 - The quick brown fox jumps over the lazy dog
        </h2>
        <h3 className={s.h3}>
          H3 - The quick brown fox jumps over the lazy dog
        </h3>
        <h4 className={s.h4}>
          H4 - The quick brown fox jumps over the lazy dog
        </h4>
        <p className={s.uppercase}>
          Uppercase - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.buttons}>
          Buttons - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.bodyText}>
          Body text - The quick brown fox jumps over the lazy dog
        </p>
        <p className={s.smallText}>
          Small text - The quick brown fox jumps over the lazy dog
        </p>
      </div>
    </div>
  );
};

export default DemoPage;
