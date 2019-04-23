import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { DatePickerInputProps } from '../../declerations/DatePickerInput.d';
import InputField from '../InputField/InputField';

const CustomDatePickerInput: React.FunctionComponent<DatePickerInputProps> = ({ onDayChange, label="" }) => (
  <DayPickerInput
    onDayChange={onDayChange} 
    component={(props: any) => <InputField {...props} label={label} />}
  />
);

export default CustomDatePickerInput;
