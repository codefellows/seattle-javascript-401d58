import axios from 'axios';

let url = "https://auth-server-2eag.onrender.com/api/v1/products";

// Will not work without middleware!
// export async function getStuff() {
//   const response = await axios.get(url);
//   return {
//     type: "GET",
//     payload: response.data
//   }
// }

export const getStuff = () => async (dispatch) => {
  const response = await axios.get(url);
  const actionObject = {
    type: "GET",
    payload: response.data
  }
  dispatch(actionObject);
}

// Long form of the above
// export function getStuff() {
//   return async function (dispatch) {
//     const response = await axios.get(url);
//     const actionObject = {
//       type: "GET",
//       payload: response.data
//     }
//     dispatch(actionObject);
//   }
// }
