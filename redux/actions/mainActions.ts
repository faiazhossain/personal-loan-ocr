import { Dispatch } from "redux";
// import { setOcrData } from "../slices/ocrSlice";
import { API } from "../../app.config";
import axios from "axios";
import { setOcrData } from "../slices/ocrSlice";

export const getOcrData =
  (bank: string, type: string, pad: string) => async (dispatch: Dispatch) => {
    try {
      const requestBody = {
        bank: bank,
        type: type,
        pad: pad,
      };
      const res = await axios.post(API.OCR_API, requestBody);
      dispatch(setOcrData(res.data));
      return res.data;
    } catch (err) {
      // Handle errors
      throw err;
    }
  };
