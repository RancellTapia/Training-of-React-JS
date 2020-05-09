import axios from "axios";
import {baseUrl}  from "../config/config";

 const request = axios.create({
  baseURL: baseUrl,
});

export const call = async (method = "post", url, payload = null) => {
  try {
    const res = await request({
      method: method,
      url: url,
      data: payload,
    });

    return res;
  } catch (err) {
    console.log(err.response);
    throw new Error(err.response);
  }
};