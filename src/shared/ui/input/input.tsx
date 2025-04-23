import clsx from 'clsx';
import { ComponentProps, useId } from 'react';
import { inputLabelStyleVariant, inputStyleVariant } from './const';
import { InputStyleVariantType } from './types';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  message?: string;
  invalid?: boolean;
  wrapperClassName?: string;
  styleVariant?: InputStyleVariantType;
}

export const Input = (props: InputProps) => {
  const {
    label,
    message,
    invalid,
    styleVariant = 'primary',
    wrapperClassName,
    ...remainder
  } = props;
  const inputId = useId();

  return (
    <div className={clsx('relative', wrapperClassName)}>
      <input
        type="text"
        id={inputId}
        className={clsx(
          'block group p-4 w-full mb-1 text-base font-inter peer',
          inputStyleVariant[styleVariant].default,
          inputStyleVariant[styleVariant].focus
        )}
        placeholder=" " //* Не убирать на нем держится анимация лейбла
        {...remainder}
      />
      <label
        htmlFor={inputId}
        className={clsx(
          'absolute font-roboto transform -translate-y-4 top-2 left-2 origin-[0] peer-placeholder-shown:-translate-y-10/12 peer-placeholder-shown:top-9 peer-focus:top-2 peer-focus:left-2 peer-focus:-translate-y-4 start-1',
          inputLabelStyleVariant[styleVariant].default,
          inputLabelStyleVariant[styleVariant].focus
        )}
      >
        {label}
      </label>
      <div
        hidden={Boolean(!message)}
        className={clsx(
          !invalid && 'text-emphasis-medium peer-focus:text-grape',
          invalid && 'text-red-500',
          'font-roboto text-xs pl-4'
        )}
      >
        <span>{message}</span>
      </div>
    </div>
  );
};

//  <input
//         type="text"
//         id="floating_outlined"
//         className="block group p-4 w-full rounded-base mb-1 text-base font-inter text-emphasis-high bg-transparent border-1 border-mist appearance-none focus:outline-none focus:ring-0 focus:border-grape focus:border-2 peer"
//         placeholder=" " //* Не убирать на нем держится анимация лейбла
//         {...remainder}
//       />
//       <label
//         htmlFor="floating_outlined"
//         className="absolute text-xs font-roboto text-emphasis-medium duration-300 transform -translate-y-4 top-2 left-2 origin-[0] bg-white px-2 peer-focus:text-grape peer-placeholder-shown:text-base peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:-translate-y-4 start-1"
//       >
//         Floating outlined
//       </label>
