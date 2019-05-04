import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerInputProps } from '../../declerations/DatePickerInput.d';
import InputField from '../InputField/InputField';
import { DatePickerWrapper } from './DatePickerInput.styled';

const CustomDatePickerInput: React.FunctionComponent<DatePickerInputProps> = ({ onDayChange, label="", value }) => (
  <DatePickerWrapper>
    <DatePicker
      showYearDropdown
      showMonthDropdown
      openToDate={value}
      selected={value}
      customInput={<InputField/>}
      value={value}
      dateFormat="MMMM d, yyyy"
      onChange={onDayChange}
    />
  </DatePickerWrapper>
);

export default CustomDatePickerInput;
