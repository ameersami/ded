import * as React from 'react';
import { default as styled } from 'styled-components';

import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import DatePickerInput from './components/DatePickerInput/DatePickerInput';
import InputField from './components/InputField/InputField';

const AppContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100%;
`;

class App extends React.Component<{}>{

  state = {
    dob: undefined,
    deathAge: 100
  }

  handleDeathAgeChange = (e: React.SyntheticEvent) => {
    this.setState({
      deathAge: e.target.value
    })
  }

  handleDOBChange = (day: Date, modifiers: Object) => {
    console.log(day);
  }

  render(){
    return(
      <AppContainer>
        <LeftColumn>
          <DatePickerInput 
            label="Date of Birth"
            onDayChange={this.handleDOBChange}
          />
          <InputField 
            label="Death Age" 
            type="number" 
            max={100} 
            value={this.state.deathAge}
            onChange={this.handleDeathAgeChange}
          />
        </LeftColumn>
        <RightColumn/>
      </AppContainer>
    )
  }

}

export default App;
