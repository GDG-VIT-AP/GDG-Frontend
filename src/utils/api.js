/* Purpose : Common utility to send POST requests to backend
    Contributor: Daksh asati(23BEC7195)*/


import axios from "axios";
export const postData = async (route, body) => {
    const url = import.meta.env.VITE_BACKEND_URL + route;
    try{
      const response = await axios.post(url, body);
      return response.data;
    } catch(err){
      console.error(err);
      return {
        success: false,
        message: err.message || "Request failed"
      }
    }
};
  
export const getData = async (route) => {
  const url = import.meta.env.VITE_BACKEND_URL + route;
  try{
    const response = await axios.get(url);
    return response.data;
  } catch(err){
    console.error(err);
    return {
      success: false,
      message: err.message || "Request failed"
    }
  }
};
