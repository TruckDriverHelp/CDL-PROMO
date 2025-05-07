import ArrowDown from '@/shared/assets/icons/expand-more-24.svg';
import { ComponentProps, useId } from 'react';

//! Селект сделан на быструю руку

interface SelectProps extends ComponentProps<'select'> {
  optionsData: {
    label: string;
    value: string;
  }[];
  placeholder: string;
}
export function Select(props: SelectProps) {
  const { optionsData, placeholder, ...remainder } = props;
  const selectId = useId();

  return (
    <label className="relative" htmlFor={selectId}>
      <select
        defaultValue={''}
        className="peer p-4 w-full appearance-none text-base font-inter rounded-base bg-white border-1 border-mist user-valid:text-emphasis-high text-emphasis-medium focus:outline-none focus:ring-0 focus:border-grape focus:border-1"
        id={selectId}
        {...remainder}
      >
        <option hidden disabled aria-readonly value={''}>
          {placeholder}
        </option>
        {optionsData.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <ArrowDown className="absolute top-1/4 right-2" />
    </label>
  );
}
