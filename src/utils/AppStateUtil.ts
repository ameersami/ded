type appActions = 'CHANGE_DOB' | 'CHANGE_DEATH_AGE';

const appInitialState: { dob: Date, deathAge: number } = {
  dob: new Date('1999-01-01'),
  deathAge: 80
};

const appStateReducer: any = (state, action: { type: appActions, payload: any }) => {
  const payload = action.payload;
  switch (action.type) {
    case 'CHANGE_DEATH_AGE':
      return {
        ...state,
        deathAge: payload
      }
    case 'CHANGE_DOB':
      return {
        ...state,
        dob: payload
      }
    default:
      return appInitialState;
  }
}

export {
  appInitialState,
  appStateReducer
}