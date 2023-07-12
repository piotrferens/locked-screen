import { PinVerificationViewProps } from '@/features/pin-verification/view/view.types';

export type PinPanelWithNumbersProps = Pick<
  PinVerificationViewProps,
  'onNumberClick'
>;
