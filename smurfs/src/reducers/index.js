import {

  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  ADD_DATA_START,
  ADD_DATA_SUCCESS,
  ADD_DATA_FAIL
  
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

		case ADD_DATA_START:
			return {
				...state, 
				error: '',
				addingSmurf: true
			}
		
		case ADD_DATA_SUCCESS:
			return {
				...state, 
				smurfs: action.payload,
				error: '',
				addingSmurf: false
			}
      
    	default:
			return state;

  }
}