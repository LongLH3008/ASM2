import { useForm } from "react-hook-form";
import Joi, { ref } from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { Instance } from "../config/Instance";
import { useNavigate } from "react-router-dom";

type IRegister = {
	email: string;
	password: string;
	confirmpassword: string;
};

const schema = Joi.object({
	email: Joi.string().email({ tlds: false }).required(),
	password: Joi.string().required(),
	confirmpassword: Joi.any().valid(ref("password")).required(),
});

const Register = () => {
	const nav = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IRegister>({ resolver: joiResolver(schema) });

	const onSubmit = async (dt: any) => {
		try {
			const { data } = await Instance.post("/register", dt);
			alert("Register Successfuly");
			nav("/login");
			return data;
		} catch (error: any) {
			alert(error.response.data);
		}
	};

	return (
		<div className="h-screen grid place-items-center">
			<form onSubmit={handleSubmit(onSubmit)} className="w-1/3 border p-5 mx-auto">
				<h3 className="my-5 text-3xl">Register</h3>
				<div className="mb-5">
					<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
						Your email
					</label>
					<input
						type="text"
						{...register("email", { required: true })}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						placeholder="name@flowbite.com"
					/>
					{errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
				</div>
				<div className="mb-5">
					<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
						Your password
					</label>
					<input
						type="password"
						{...register("password", { required: true })}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					/>
					{errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
				</div>
				<div className="mb-5">
					<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
						Confirm password
					</label>
					<input
						type="password"
						{...register("confirmpassword", { required: true })}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					/>
					{errors.confirmpassword && (
						<p className="text-sm text-red-500">{errors.confirmpassword.message}</p>
					)}
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Register;
