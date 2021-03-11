import { MONSTERS_REQUEST_PENDING, MONSTERS_REQUEST_SUCCESS, MONSTERS_REQUEST_FAILED } from '../../constants';

const INITIAL_STATE = {
  isPending: false,
  monsters: [],
  error: ' '
}

export const monstersRequest = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case MONSTERS_REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true})
    case MONSTERS_REQUEST_SUCCESS:
      return Object.assign({}, state, {monsters: action.payload, isPending: false })
    case MONSTERS_REQUEST_FAILED:
      return Object.assign({}, state, {error : action.payload, isPending: false  })
    default:
      return state;
  }
}
