import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICategory } from "../../interfaces/Icategory";
import { Instance } from "../../config/Instance";
import { Inputs } from "../../interfaces/Iproduct";

type useMutonCate = {
	actions: "CREATE" | "UPDATE" | "DELETE";
	onSuccess?: () => void;
};
const UsemutationCategory = ({ actions, onSuccess }: useMutonCate): any => {
	const { mutate, ...rest } = useMutation({
		mutationFn: async (category: ICategory) => {
			switch (actions) {
				case "CREATE":
					await Instance.post("categorys", category);
					break;
				case "UPDATE":
					await Instance.put(`/categorys/${category.id}`, category);
					break;
				case "DELETE":
					await Instance.delete(`/categorys/${category.id}`);
			}
		},
		onSuccess: () => {
			onSuccess && onSuccess();
		},
	});

	const form = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (product) => {
		mutate(product as ICategory);
	};

	return { form, onSubmit, mutate, ...rest };
};

export default UsemutationCategory;
