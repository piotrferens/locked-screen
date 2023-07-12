import { PinVerificationViewProps } from '@/features/pin-verification/view/view.types';
import { InputProps } from '@/components/input/input.types';

export type InputContainerProps = Pick<PinVerificationViewProps, 'value'> &
  Pick<InputProps, 'isError'>;
