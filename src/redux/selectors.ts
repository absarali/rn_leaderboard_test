import {RootState} from './reducers';

export const selectLeaderboard = (state: RootState) =>
  state.leaderboard.leaderboard;
export const selectError = (state: RootState) => state.leaderboard.error;
