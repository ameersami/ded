import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerInputProps } from '../../declerations/DatePickerInput.d';
import InputField from '../InputField/InputField';
import './DatePickerInput.css';

const CustomDatePickerInput: React.FunctionComponent<DatePickerInputProps> = ({ onDayChange, label="", value }) => (
  <div className="DatePickerWrapper">
    <DatePicker
      showYearDropdown
      showMonthDropdown
      openToDate={value}
      selected={value}
      customInput={<InputField label={label}/>}
      value={value}
      dateFormat="MMMM d, yyyy"
      onChange={onDayChange}
    />
  </div>
);

export default CustomDatePickerInput;
