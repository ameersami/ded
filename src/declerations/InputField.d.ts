import * as React from 'react';

export interface InputFieldProps {
  className?: string;
  label?: string;
  onBlur?: (e: React.SyntheticEvent) => any | Function;
  onChange?: (e: React.SyntheticEvent) => any | Function;
  placeholder?: string;
  type?: 'text' | 'number';
}