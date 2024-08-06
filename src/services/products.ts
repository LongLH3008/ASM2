/* eslint-disable @typescript-eslint/no-explicit-any */

import { Instance } from "../config/Instance";

export const getAllProductAdmin = async () => {
	const { data } = await Instance.get("/products");
	console.log("thong tin moi cua data", data);
	return data;
};

export const getOneProduct = async (id: number | string | undefined) => {
	const { data } = await Instance.get(`/products/${id}`);
	return data;
};

export const getFilterProduct = async (keyword: any) => {
	const { data } = await Instance.get(`/products?name_like=${keyword}`);
	return data;
};
