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
          'block peer p-4 w-full mb-1 text-base font-inter peer focus:invalid:border-red-500',
          inputStyleVariant[styleVariant].default,
          inputStyleVariant[styleVariant].focus
        )}
        placeholder=" " //* Не убирать на нем держится анимация лейбла
        {...remainder}
      />
      <label
        htmlFor={inputId}
        className={clsx(
          'absolute peer-focus:peer-invalid:text-red-500 font-roboto transform -translate-y-4 top-2 left-2 origin-[0] peer-placeholder-shown:-translate-y-10/12 peer-placeholder-shown:top-9 peer-focus:top-2 peer-focus:left-2 peer-focus:-translate-y-4 start-1',
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
