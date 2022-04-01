import axios from "axios";
import { GET_ACCESS } from "./types";
import { EMAIL, PASSWORD } from "../cred/cred";
export const getAccess = () => async (dispatch) => {
  const email = EMAIL;
  const password = PASSWORD;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      "https://stage.api.sloovi.com/login",
      body,
      config
    );
    dispatch({
      type: GET_ACCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const loadUser = () => async dispatch =>{
//     if(localStorage.token){
//         setAuthToken(localStorage.token);
//     }

//     try {
//         const res = await axios.get(`https://stage.api.sloovi.com/team?product=outreach&company_id=${}`);
//         dispatch({
//             type:USER_LOADED,
//             payload:res.data
//         });
//     } catch (err) {
//         dispatch({
//             type:AUTH_ERROR
//         })
//     }
// }
