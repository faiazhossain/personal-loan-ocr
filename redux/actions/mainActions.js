import axios from "axios";
import { setRupantorData, setSearch } from "../reducers/mainReducer";
import { API } from "../../app.config";

export const getRupantorData = (inputAddress) => async (dispatch) => {
  try {
    const res = await axios.post(API.RUPANTOR_API, { q: inputAddress });

    // Dispatch the response data to the reducer
    dispatch(setRupantorData(res.data));
    return res.data;
  } catch (err) {
    // Handle errors
    throw err;
  }
};
