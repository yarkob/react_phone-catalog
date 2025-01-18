import { FC } from 'react';

import { capitalize } from '../../utils';

import s from './TechSpecs.module.scss';

interface Props {
  specs: { [key: string]: string | string[] };
  uppercaseSpecIdx?: number;
}

export const TechSpecs: FC<Props> = ({ specs, uppercaseSpecIdx }) => {
  const specsArr = Object.entries(specs);

  return (
    <div className={s.specs}>
      {specsArr.map((spec, idx) => {
        let name = spec[1];

        if (Array.isArray(name)) {
          name = name.join(', ');
        }

        return (
          <div key={name} className={s.spec}>
            <span className={s.specName}>
              {idx === uppercaseSpecIdx
                ? spec[0].toUpperCase()
                : capitalize(spec[0])}
            </span>
            <span className={s.specValue}>{name}</span>
          </div>
        );
      })}
    </div>
  );
};
