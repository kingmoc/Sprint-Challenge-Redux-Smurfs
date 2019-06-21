import {

  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  
} from "../actions"

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}


export default (state = initialState, action) => {

  switch (action.type) {

    case FETCH_DATA_START:
			return {
				...state,
				error: '',
				fetchingSmurfs: true
			}

		case FETCH_DATA_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				smurfs: action.payload

			}
	
		case FETCH_DATA_FAIL:
			return {
				...state,
				fetchingSmurfs: false,
				error: action.payload
      }
      
    default:
			return state;

  }
}