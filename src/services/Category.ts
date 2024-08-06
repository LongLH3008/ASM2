/* eslint-disable @typescript-eslint/no-explicit-any */

import { Instance } from "../config/Instance";

export const getAllCategory = async () => {
  const { data } = await Instance.get("/categorys");
  console.log("thong tin moi cua data", data);
  return data;
};

export const getOneCategory = async (id: number | string) => {
  const { data } = await Instance.get(`/categorys/${id}`);
  console.log("thong tin chứa id", data);
  return data;  
};