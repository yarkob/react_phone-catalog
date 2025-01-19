import { FC, useState } from 'react';
import Select, { components, SingleValue } from 'react-select';

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
  const [uniqueId] = useState(
    () => 'select_' + Math.random().toFixed(5).slice(2),
  );

  return (
    <div className={s.container}>
      <p className={s.name}>{name}</p>
      <Select
        id={uniqueId}
        className="select"
        classNamePrefix="select"
        defaultValue={options[0]}
        isSearchable={false}
        options={options}
        onChange={handleSelect}
        value={option}
        components={{
          Menu: props => <components.Menu {...props} className="menu" />,
        }}
        onMenuClose={() => {
          const menuEl = document.querySelector(`#${uniqueId} .menu`);
          const containerEl = menuEl?.parentElement;
          const clonedMenuEl = menuEl?.cloneNode(true) as HTMLElement;

          if (!clonedMenuEl) {
            return;
          } // safeguard

          clonedMenuEl.classList.add('menu--close');
          clonedMenuEl.addEventListener('animationend', () => {
            containerEl?.removeChild(clonedMenuEl);
          });

          containerEl?.appendChild(clonedMenuEl!);
        }}
      />
    </div>
  );
};
