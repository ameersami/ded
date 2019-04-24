import * as React from 'react';

export interface InputFieldProps {
  className?: string;
  label?: string;
  onBlur?: (e: React.SyntheticEvent) => any | Function;
  onChange?: (e: React.SyntheticEvent) => any | Function;
  onFocus?: (e: React.SyntheticEvent) => any | Function;
  onKeyUp?: (e: React.SyntheticEvent) => any | Function;
  onClick?: (e: React.SyntheticEvent) => any | Function;
  placeholder?: string;
  type?: 'text' | 'number';
  value?: string | number | undefined;
  max?: number;
  min?: number;
}