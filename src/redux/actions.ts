import {Dispatch} from 'redux';
import dataJSON from '../data/leaderboard.json';
const data = Object.values(dataJSON);
const sortedUsers = [...data].sort((a, b) => b.bananas - a.bananas);

export const SEARCH_USER = 'SEARCH_USER';
export const SET_LEADERBOARD = 'SET_LEADERBOARD';
export const SET_ERROR = 'SET_ERROR';

export interface User {
  uid: string;
  name: string;
  rank: number;
  bananas: number;
}

export interface SetLeaderboardAction {
  type: typeof SET_LEADERBOARD;
  payload: User[];
}

export interface SetSearchUser {
  type: typeof SEARCH_USER;
  payload: User[];
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type LeaderboardActionTypes =
  | SetLeaderboardAction
  | SetErrorAction
  | SetSearchUser;

export const searchUser =
  (username: string) => (dispatch: Dispatch<LeaderboardActionTypes>) => {
    const user = data.find(
      u => u.name.toLowerCase() === username.toLowerCase(),
    );

    if (!user) {
      dispatch({
        type: SET_ERROR,
        payload:
          'This user name does not exist! Please specify an existing user name!',
      });
      return;
    }

    const topTen = sortedUsers.slice(0, 10);
    const userIndex = sortedUsers.findIndex(
      u => u.name.toLowerCase() === username.toLowerCase(),
    );

    dispatch({type: SEARCH_USER, payload: user});
    let temp = topTen;
    temp = temp.map(v => {
      let rank = sortedUsers.findIndex(d => d.uid === v.uid) + 1;
      return {...v, rank};
    });
    if (userIndex < 10) {
      dispatch({type: SET_LEADERBOARD, payload: temp});
    } else {
      let rank =
        sortedUsers.findIndex(d => d.uid === sortedUsers[userIndex].uid) + 1;
      temp[9] = {...sortedUsers[userIndex], rank};
      dispatch({type: SET_LEADERBOARD, payload: temp});
    }
  };
