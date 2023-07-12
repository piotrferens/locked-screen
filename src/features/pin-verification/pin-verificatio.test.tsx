import { fireEvent, render, screen } from '@testing-library/react'

import { PinVerification } from '@/features/pin-verification/pin-verification'
import { numbers, pinDot } from '@/features/pin-verification/helpers'

describe('PinVerification', () => {
  it('displays default view', () => {
    render(<PinVerification />)

    expect(screen.getByText('Enter your PIN')).toBeInTheDocument()
    expect(screen.getByTestId('pin-input')).toHaveValue('')
    expect(screen.getByTestId('pin-panel-with-numbers')).toBeInTheDocument()
    numbers.forEach((number) =>
      expect(screen.getByTestId(`pin-button-${number}`)).toBeInTheDocument(),
    )
  })

  it('displays success view', () => {
    render(<PinVerification />)

    fireEvent.click(screen.getByTestId('pin-button-1'))
    expect(screen.getByTestId('pin-input')).toHaveValue('1')
    fireEvent.click(screen.getByTestId('pin-button-2'))
    expect(screen.getByTestId('pin-input')).toHaveValue(`${pinDot}2`)
    fireEvent.click(screen.getByTestId('pin-button-3'))
    expect(screen.getByTestId('pin-input')).toHaveValue(`${pinDot}${pinDot}3`)
    fireEvent.click(screen.getByTestId('pin-button-4'))

    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByTestId('checkmark-icon')).toBeInTheDocument()
    expect(screen.queryByText('Enter your PIN')).not.toBeInTheDocument()
    expect(screen.queryByText('pin-input')).not.toBeInTheDocument()
    expect(screen.queryByText('pin-panel-with-numbers')).not.toBeInTheDocument()
  })

  it('displays error view and allow to enter new pin', () => {
    render(<PinVerification />)

    fireEvent.click(screen.getByTestId('pin-button-0'))
    expect(screen.getByTestId('pin-input')).toHaveValue('0')
    fireEvent.click(screen.getByTestId('pin-button-9'))
    expect(screen.getByTestId('pin-input')).toHaveValue(`${pinDot}9`)
    fireEvent.click(screen.getByTestId('pin-button-8'))
    expect(screen.getByTestId('pin-input')).toHaveValue(`${pinDot}${pinDot}8`)
    fireEvent.click(screen.getByTestId('pin-button-2'))
    expect(screen.getByTestId('pin-input')).toHaveValue(
      `${pinDot}${pinDot}${pinDot}2`,
    )
    expect(screen.getByText('Invalid PIN')).toBeInTheDocument()
    expect(screen.getByText('Try again')).toBeInTheDocument()
    expect(screen.getByTestId('pin-input')).toHaveClass(
      'border-red bg-red-light',
    )

    fireEvent.click(screen.getByTestId('pin-button-1'))
    expect(screen.getByTestId('pin-input')).toHaveValue('1')
    expect(screen.getByText('Enter your PIN')).toBeInTheDocument()
    expect(screen.queryByText('Invalid PIN')).not.toBeInTheDocument()
    expect(screen.queryByText('Try again')).not.toBeInTheDocument()
    expect(screen.getByTestId('pin-input')).not.toHaveClass(
      'border-red bg-red-light',
    )
  })
})
