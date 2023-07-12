import { Input } from '@/components/input/input';
import { InputContainerProps } from '@/features/pin-verification/input/input.types';

export const InputContainer = (props: InputContainerProps) => (
  <div className="flex justify-center">
    <Input
      value={props.value}
      data-testid="pin-input"
      isError={props.isError}
    />
  </div>
);
