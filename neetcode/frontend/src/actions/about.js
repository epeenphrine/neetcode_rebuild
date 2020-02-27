import axios from "axios";

import { GET_ABOUT } from "./types";

//always do api/sync stuff here

//GET DATA

export const getAbout = () => dispatch => {
  axios
    .get("/api/about/")
    .then(res => {
      dispatch({
        type: GET_ABOUT,
        payload: res.data[0]
      });
    })
    .catch(err => console.log(err));
};
