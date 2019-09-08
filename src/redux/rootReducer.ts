import initialState, {AppState} from './appState' 
// import { Action } from "redux-actions";
import { Action } from "redux";

const rootReducer = (state: AppState | undefined,action: Action<any>) : AppState  => {
  return state ? state: initialState;
};

export default rootReducer