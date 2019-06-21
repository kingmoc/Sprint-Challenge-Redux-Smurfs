import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';


export const getSmurfs = () => dispathc => {

  dispatch({  type: FETCH_DATA_START })

  axios.get('https://swapi.co/api/people')
  .then(res => {
    console.log(res)
    // dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.results })
  })
  .catch(err => {
    console.log(res.response)
    // dispatch({ type: FETCH_DATA_FAIL, payload: `${err.response.status}`})
  })



}
