import axios from 'axios'


//  Exports for get Smurf Data Dispatches 
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
// **************************************** 
export const getSmurfs = () => dispatch => {

  dispatch({  type: FETCH_DATA_START })

  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    // console.log(res.data)
    dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err.response)
    // dispatch({ type: FETCH_DATA_FAIL, payload: `${err.response.status}`})
  })
}

//  Exports for get Smurf Data Dispatches 
export const ADD_DATA_START = 'ADD_DATA_START';
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';
export const ADD_DATA_FAIL = 'ADD_DATA_FAIL';
// ****************************************
export const addSmurfAPI = (newSmurf) => dispatch => {
	dispatch({ type: ADD_DATA_START})

	axios.post('http://localhost:3333/smurfs', newSmurf)
  .then(res => {
    console.log(res.data)
    dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err.response)
    // dispatch({ type: FETCH_DATA_FAIL, payload: `${err.response.status}`})
  })

}