import * as React from 'react';
import { default as styled } from 'styled-components';

import { AppState } from './declerations/App.d';
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

class App extends React.Component<{}, AppState>{

  state = {
    dob: new Date('1997-03-14'),
    deathAge: 80,
  }

  handleDeathAgeChange = (e: any) => {
    this.setState({
      deathAge: e.target.value,
    })
  }

  handleDOBChange = (e: Date) => {
    this.setState({
      dob: e
    });
  }

  render(){
    return(
      <AppContainer>
        <LeftColumn>
          <DatePickerInput 
            label="Date of Birth"
            value={this.state.dob}
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
        <RightColumn dob={this.state.dob} deathAge={this.state.deathAge} />
      </AppContainer>
    )
  }

}

export default App;
