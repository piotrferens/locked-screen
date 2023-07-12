export interface PinVerificationViewProps {
  view: 'default' | 'error' | 'success';
  value: string;
  onNumberClick: (value: number) => void;
}
