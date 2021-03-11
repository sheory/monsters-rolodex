import { CHANGE_SEARCH_FIELD } from '../../constants';

const INITIAL_STATE = {
  searchField: ''
}

export const searchMonsters = (state = INITIAL_STATE, action= {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }
    default:
      return state;
  }
}