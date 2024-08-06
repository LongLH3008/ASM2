import { useQuery } from "@tanstack/react-query";
import { getAllProductAdmin, getFilterProduct, getOneProduct } from "../../services/products";

export const getProductAdmin = (): any => {
	const { data, ...rest } = useQuery({
		queryKey: ["PRODUCT-ADMIN"],
		queryFn: async () => {
			return getAllProductAdmin();
		},
	});
	return { data, ...rest };
};

export const UserFilterProductQuery = (keyword: number | string): any => {
	const { data, ...rest } = useQuery({
		queryKey: ["PRODUCT_KEY", keyword],
		queryFn: async () => {
			return getFilterProduct(keyword);
		},
	});
	return { data, ...rest };
};

export const UserOneProductQuery = (id?: number | string | undefined): any => {
	const { data, ...rest } = useQuery({
		queryKey: ["PRODUCT_KEY", id],
		queryFn: async () => {
			return getOneProduct(id);
		},
	});
	return { data, ...rest };
};
