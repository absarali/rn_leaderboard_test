import {combineReducers} from 'redux';
import leaderboardReducer from './leaderboardReducer';

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
