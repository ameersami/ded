import * as React from 'react';

import DatePickerInput from '../DatePickerInput/DatePickerInput';
import InputField from '../InputField/InputField';
import Footer from '../Footer/Footer';
import './ConfigurationCard.css';

interface ConfigurationCardProps {
  dob: Date;
  deathAge: number;
  dispatch: any;
}

const ConfigurationCard: React.FunctionComponent<ConfigurationCardProps> = (props: ConfigurationCardProps) => {

  const handleDOBChange = (e: any) => {
    props.dispatch({ type: "CHANGE_DOB", payload: e });
  }

  const handleAgeChange = (e: any) => {
    props.dispatch({ type: "CHANGE_DEATH_AGE", payload: e.target.value });
    console.log(e.target.value);
  }

  return (
    <div className="configurationCard">
      <div className="configuration-input-group">
        <DatePickerInput 
          label="Date of Birth"
          value={props.dob}
          onDayChange={handleDOBChange}
        />
        <InputField 
          label="Death Age" 
          type="number" 
          max={100} 
          value={props.deathAge}
          onChange={handleAgeChange}
        />
      </div>
      <Footer/>
    </div>
  )

}

export default ConfigurationCard;