import axios from "axios";

import { GET_CHART } from "./types";

//always do api/sync stuff here

//GET DATA

export const getChart = () => dispatch => {
  axios
    .get("/api/data/")
    .then(res => {
      dispatch({
        type: GET_CHART,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};