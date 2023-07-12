export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const maxLength = 4;

export const pinDot = '•';

export const replaceDigitsWithDots = (value: string) =>
  value
    .split('')
    .map(() => pinDot)
    .join('');

export const correctValue = '1234';

export const getView = (value: string) => {
  if (value === correctValue) {
    return 'success';
  }

  if (value.length === maxLength) {
    return 'error';
  }

  return 'default';
};

export const getMaskedValue = (value: string) => {
  const valueWithoutLastDigit = value.slice(0, -1);
  const replacedValueWithoutLastDigit = replaceDigitsWithDots(
    valueWithoutLastDigit,
  );

  const lastDigit = value.slice(-1);

  return `${replacedValueWithoutLastDigit}${lastDigit}`;
};
