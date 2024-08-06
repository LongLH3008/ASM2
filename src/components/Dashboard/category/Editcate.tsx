import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UsequeryCategory from "../../../hooks/categorys/UsequeryCategory";
import UsemutationCategory from "../../../hooks/categorys/UsemutationCategory";
const Editcate = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	// console.log(id);
	const { data, isLoading } = UsequeryCategory(id);
	const { form, onSubmit } = UsemutationCategory({
		actions: "UPDATE",
		onSuccess: () => {
			Swal.fire({
				icon: "success",
				title: "cập nhập phẩm thành công!",
				position: "top-end",
				showConfirmButton: true,
				showCloseButton: true,
				timer: 5000,
				customClass: {
					popup: "my-toast",
				},
			}).then(() => {
				navigate("/admin/category");
			});
		},
	});
	useEffect(() => {
		if (data) {
			form.reset(data);
		}
	}, [id, form, data]);

	return (
		<form className="w-full flex justify-center items-center" onSubmit={form.handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-5 w-1/3 border p-5">
				<p className="text-3xl">Edit Category</p>
				<input type="text" placeholder="Category Name" {...form.register("name")} />
				{form.formState.errors.name && (
					<p className="text-red-500">{form.formState.errors.name?.message}</p>
				)}
				<input type="text" placeholder="Category Name" {...form.register("image")} />
				{form.formState.errors.image && (
					<p className="text-red-500">{form.formState.errors.image?.message}</p>
				)}
				<button typeof="submit" className="bg-zinc-700 px-3 py-2 ml-3 text-white" type="submit">
					Edit
				</button>
			</div>
		</form>
	);
};

export default Editcate;
