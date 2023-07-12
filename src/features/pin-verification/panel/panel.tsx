import { PinPanelProps } from './panel.types';

export const PinPanel = ({ children, className, ...props }: PinPanelProps) => (
  <div
    className={`grid grid-cols-3 gap-4 w-full mx-auto ${className ?? ''}`}
    {...props}
  >
    {children}
  </div>
);
