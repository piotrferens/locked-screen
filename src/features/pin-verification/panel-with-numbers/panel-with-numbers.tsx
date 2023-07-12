import { PinPanel } from '@/features/pin-verification/panel/panel'
import { PinButton } from '@/features/pin-verification/button/button'
import { numbers } from '@/features/pin-verification/helpers'

import { PinPanelWithNumbersProps } from './panel-with-numbers.types'

export const PinPanelWithNumbers = (props: PinPanelWithNumbersProps) => (
  <PinPanel data-testid="pin-panel-with-numbers">
    {numbers.map((number, index) => (
      <PinButton
        key={index}
        number={number}
        onClick={() => props.onNumberClick(number)}
        data-testid={`pin-button-${number}`}
      >
        {number}
      </PinButton>
    ))}
  </PinPanel>
)
