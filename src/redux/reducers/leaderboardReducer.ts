import {
  LeaderboardActionTypes,
  SET_LEADERBOARD,
  SET_ERROR,
  SEARCH_USER,
  User,
} from '../actions';

export interface LeaderboardState {
  leaderboard: User[];
  error: string | null;
  searchedUser: object | null;
}

const initialState: LeaderboardState = {
  leaderboard: [],
  error: null,
  searchedUser: null,
};

const leaderboardReducer = (
  state = initialState,
  action: LeaderboardActionTypes,
): LeaderboardState => {
  switch (action.type) {
    case SET_LEADERBOARD:
      return {
        ...state,
        leaderboard: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SEARCH_USER:
      return {
        ...state,
        searchedUser: action.payload,
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
