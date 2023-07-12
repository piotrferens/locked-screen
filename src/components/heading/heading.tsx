import { HeadingProps } from './heading.types';

export const Heading = ({ className, ...props }: HeadingProps) => (
  <h1 className={`text-5xl ${className ?? ''}`} {...props}>
    {props.children}
  </h1>
);
