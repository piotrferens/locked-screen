import { PinButtonProps } from './button.types';

export const PinButton = ({
  className,
  number,
  children,
  ...props
}: PinButtonProps) => (
  <button
    className={`w-full p-6 text-center border border-button-pin-border rounded transition-all ease-in-out duration-200 ${
      number === 0 && 'col-start-2 col-span-1'
    } hover:bg-button-pin-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-button-pin-ring ${
      className ?? ''
    }`}
    {...props}
  >
    {children}
  </button>
);
