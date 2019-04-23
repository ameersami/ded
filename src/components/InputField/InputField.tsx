import * as React from 'react';

import { InputFieldProps } from '../../declerations/InputField';
import { InputFieldWrapper, InputFieldInput, InputFieldLabel } from './InputField.styled';

const InputField: React.FunctionComponent<InputFieldProps> = (props: InputFieldProps) => {
  return (
    <InputFieldWrapper className={props.className}>
      <InputFieldInput 
        type={props.type}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onKeyUp={props.onKeyUp}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value} 
        min={props.min}
        max={props.max}
      />
      <InputFieldLabel>{props.label}</InputFieldLabel>
    </InputFieldWrapper>
  )
};

InputField.defaultProps = {
  className: '',
  type: 'text',
  onBlur: (e) => {},
  onChange: (e) => {},
  placeholder: ' ',
  label: 'InputField',
}

export default InputField;
