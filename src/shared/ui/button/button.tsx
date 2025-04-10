//* Вариации размеров кнопок не реализованы в дизайне и везде на данный момент используется одинаковый размер из-за этого в коде ее тоже нет(вариация)
import { clsx } from 'clsx/lite';
import { ComponentProps } from 'react';
import { buttonStyleVariant } from './const';
import { ButtonStyleVariantTypes } from './types';

interface IButtonProps extends ComponentProps<'button'> {
  content: string;
  styleVariant?: ButtonStyleVariantTypes;
}

export const Button = (props: IButtonProps) => {
  const { content, styleVariant = 'primary', className, ...remainder } = props;

  return (
    <button
      className={clsx(
        'py-base px-8.5 rounded-3.5xl ri font-inter text-base font-semibold',
        buttonStyleVariant[styleVariant].default,
        buttonStyleVariant[styleVariant].hover,
        className
      )}
      {...remainder}
    >
      {content}
    </button>
  );
};
