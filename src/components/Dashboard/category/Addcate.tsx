import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UsemutationCategory from "../../../hooks/categorys/UsemutationCategory";

export default function Addcate() {
	const navigate = useNavigate();
	const { form, onSubmit } = UsemutationCategory({
		actions: "CREATE",
		onSuccess: () => {
			Swal.fire({
				icon: "success",
				title: "Thêm sản phẩm thành công!",
				position: "top-end",
				showConfirmButton: true,
				showCloseButton: true,
				timer: 1000,
				customClass: {
					popup: "my-toast",
				},
			}).then(() => {
				navigate("/admin/category");
			});
		},
	});

	return (
		<form className="w-full flex justify-center items-center" onSubmit={form.handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-5 w-1/3 border p-5">
				<p className="text-3xl">Add Category</p>
				<input type="text" placeholder="Category Name" {...form.register("name")} />
				{form.formState.errors.name && (
					<p className="text-red-500">{form.formState.errors.name?.message}</p>
				)}
				<input type="text" placeholder="Category Name" {...form.register("image")} />
				{form.formState.errors.image && (
					<p className="text-red-500">{form.formState.errors.image?.message}</p>
				)}
				<button typeof="submit" className="bg-zinc-700 px-3 py-2 ml-3 text-white" type="submit">
					Add
				</button>
			</div>
		</form>
	);
}
