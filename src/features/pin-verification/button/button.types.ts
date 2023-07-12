import { HTMLAttributes, ReactNode } from 'react';

export interface PinButtonProps extends HTMLAttributes<HTMLButtonElement> {
  number: number;
  children: ReactNode;
}
