import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { default as styled } from 'styled-components';

import { DatePickerInputProps } from '../../declerations/DatePickerInput.d';
import InputField from '../InputField/InputField';

const DatePickerWrapper = styled.div`
  & .react-datepicker__input-container {
    display: block;
  }

  & .react-datepicker-wrapper {
    width: 100%;
    margin-bottom: 20px;
  }
`;

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
