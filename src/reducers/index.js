import { combineReducers } from 'redux'

function modal(state={isOpen: false}, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {isOpen: !state.isOpen}
    default:
      return state
  }
}

const reducers = combineReducers({
  modal
})

export default reducers
