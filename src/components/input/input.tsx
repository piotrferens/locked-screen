import { InputProps } from './input.types';

export const Input = ({ isError, className, ...props }: InputProps) => {
  const styles = isError
    ? 'border-red bg-red-light hover:border-red-dark focus:ring-red-dark'
    : 'border-input-border hover:border-input-hover focus:ring-input-ring';

  return (
    <input
      readOnly
      className={`border-2  rounded-input text-center focus:outline-none focus:ring-none focus:ring-2 focus:ring-offset-2 py-0.4 px-0.2 ${styles} ${
        className ?? ''
      }`}
      {...props}
    />
  );
};
