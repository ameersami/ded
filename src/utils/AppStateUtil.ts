type appActions = 'CHANGE_DOB' | 'CHANGE_DEATH_AGE';

const appInitialState: { dob: Date, deathAge: number } = {
  dob: localStorage.getItem('ded_app_dob') ? new Date(localStorage.getItem('ded_app_dob')) : new Date('1999-01-01'),
  deathAge: localStorage.getItem('ded_app_deathAge') ? Number(localStorage.getItem('ded_app_deathAge')) : 80
};

const appStateReducer: any = (state, action: { type: appActions, payload: any }) => {
  const payload = action.payload;
  switch (action.type) {
    case 'CHANGE_DEATH_AGE':
      localStorage.setItem('ded_app_deathAge', payload);
      return {
        ...state,
        deathAge: payload
      }
      case 'CHANGE_DOB':
      localStorage.setItem('ded_app_dob', payload);
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