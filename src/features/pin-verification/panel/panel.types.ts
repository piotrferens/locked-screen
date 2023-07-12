import { HTMLAttributes, ReactElement } from 'react';

import { PinButton } from '@/features/pin-verification/button/button';

export interface PinPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<typeof PinButton>[];
}
