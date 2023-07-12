import Image from 'next/image';

import { Heading } from '@/components/heading/heading';
import { PinPanelWithNumbers } from '@/features/pin-verification/panel-with-numbers/panel-with-numbers';
import { InputContainer } from '@/features/pin-verification/input/input';

import { PinVerificationViewProps } from './view.types';

export const PinVerificationView = (props: PinVerificationViewProps) => {
  switch (props.view) {
    case 'success':
      return (
        <>
          <Heading className="text-center">Welcome</Heading>
          <div className="flex justify-center">
            <Image
              src="/checkmark.svg"
              alt="checkmark"
              width={250}
              height={250}
              data-testid="checkmark-icon"
            />
          </div>
        </>
      );
    case 'error':
      return (
        <>
          <Heading className="text-center">
            <span className="block">Invalid PIN</span>
            <span className="block">Try again</span>
          </Heading>
          <InputContainer value={props.value} isError />
          <PinPanelWithNumbers onNumberClick={props.onNumberClick} />
        </>
      );
    case 'default':
    default:
      return (
        <>
          <Heading className="text-center">Enter your PIN</Heading>
          <InputContainer value={props.value} />
          <PinPanelWithNumbers onNumberClick={props.onNumberClick} />
        </>
      );
  }
};
