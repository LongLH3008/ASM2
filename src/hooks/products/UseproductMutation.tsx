import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs, IProduct } from "../../interfaces/Iproduct";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

type UseproductMutationProps = {
	actions: "CREATE" | "UPDATE" | "DELETE";
	onSuccess?: () => void;
};

const UseproductMutation = ({ actions, onSuccess }: UseproductMutationProps): any => {
	const { mutate, ...rest } = useMutation({
		mutationFn: async (product: IProduct) => {
			console.log("Performing action:", actions, "on product:", product);
			switch (actions) {
				case "CREATE":
					await axios.post(`http://localhost:3000/products`, product);
					break;
				case "UPDATE":
					console.log("ok");
					if (!product.id) {
						throw new Error("Product ID is required for UPDATE action");
					}
					await axios.put(`http://localhost:3000/products/${product.id}`, product);
					break;
				case "DELETE":
					if (!product.id) {
						throw new Error("Product ID is required for DELETE action");
					}
					console.log("Deleting product with ID:", product.id);
					await axios.delete(`http://localhost:3000/products/${product.id}`);
					break;
				default:
					throw new Error("Invalid action type");
			}
		},
		onSuccess: () => {
			onSuccess && onSuccess();
		},
		onError: (error) => {
			console.error("Mutation error:", error);
		},
	});

	const form = useForm<Inputs>();

	const onSubmit: SubmitHandler<IProduct> = async (product) => {
		mutate(product);
	};

	return { form, onSubmit, ...rest };
};

export default UseproductMutation;
