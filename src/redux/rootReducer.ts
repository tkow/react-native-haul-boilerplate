import initialState, {AppState} from './appState' 
// import { Action } from "redux-actions";
import { Action } from "redux";
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from '@react-native-community/async-storage';

const rootReducer = (state: AppState | undefined,action: Action<any>) : AppState  => {
  return state ? state: initialState;
};


export const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  // whitelist: ['user'],
  // transforms: [UserTransform]
};
export default persistReducer<any, any>( persistConfig,rootReducer)