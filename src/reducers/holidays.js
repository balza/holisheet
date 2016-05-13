import {ADD_HOLIDAY} from '../actions/index' 

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function holidays(state = initialState, action) {
  switch (action.type) {
    case ADD_HOLIDAY:
      return [
        {
          id: state.reduce((maxId, holiday) => Math.max(holiday.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    default:
      return state
  }
}
