'use client';
import { useState } from 'react';

import { getMaskedValue, getView, maxLength } from '@/helpers/pin';
import { PinVerificationView } from '@/features/pin-verification/view/view';

export const PinVerification = () => {
  const [inputValueState, setInputValueState] = useState({
    maskedValue: '',
    value: '',
  });

  const view = getView(inputValueState.value);

  const handleNumberClick = (value: number) => {
    if (view !== 'success') {
      setInputValueState((previousInputValueState) => {
        if (previousInputValueState.value.length === maxLength) {
          const valueToString = value.toString();

          return {
            maskedValue: getMaskedValue(valueToString),
            value: valueToString,
          };
        }

        const newValue = `${previousInputValueState.value}${value}`;

        return {
          maskedValue: getMaskedValue(newValue),
          value: newValue,
        };
      });
    }
  };

  return (
    <PinVerificationView
      view={view}
      value={inputValueState.maskedValue}
      onNumberClick={handleNumberClick}
    />
  );
};
