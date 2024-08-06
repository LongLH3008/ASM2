import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs, IProduct } from "../../interfaces/Iproduct";

type useAuthType = {
	actions: "LOGIN" | "REGISTER";
	onSuccess?: () => void;
};

const AuthMutation = ({ actions, onSuccess }: useAuthType): any => {
	const { mutate, ...rest } = useMutation({
		mutationFn: async (dt: any) => {
			switch (actions) {
				case "LOGIN":
					await axios.post(`http://localhost:3000/loign`, dt);
					break;
				case "REGISTER":
					await axios.post(`http://localhost:3000/register`, dt);
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

export default AuthMutation;
