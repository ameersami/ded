import * as React from 'react';
import { default as styled } from 'styled-components';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

LogRocket.init('lmgdge/ded');
setupLogRocketReact(LogRocket);

import { AppState } from './declerations/App.d';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import DatePickerInput from './components/DatePickerInput/DatePickerInput';
import InputField from './components/InputField/InputField';
import Footer from './components/Footer/Footer';

const AppContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  flex-direction: row;

  @media only screen and (max-width: 1056px) {
    &{
      flex-direction: column;
      overflow-y: scroll;
    }
  }

`;

class App extends React.Component<{}, AppState>{

  state = {
    dob: new Date('1999-01-01'),
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
          <Footer/>
        </LeftColumn>
        <RightColumn dob={this.state.dob} deathAge={this.state.deathAge} />
      </AppContainer>
    )
  }

}

export default App;
