import { fetchData } from "../services/httpService";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchData();
      dispatch({ type: "LOAD", payload: data });
    } catch (error) {
      console.log("Error!");
    }
  };
};
