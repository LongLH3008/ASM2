import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ICategory } from "../../../interfaces/Icategory";
import UseproductMutation from "../../../hooks/products/UseproductMutation";
import UsequeryCategory from "../../../hooks/categorys/UsequeryCategory";

const AddProducts = () => {
	const navigate = useNavigate();
	const { form, onSubmit } = UseproductMutation({
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
				navigate("/admin/product");
			});
		},
	});

	const { data: categories } = UsequeryCategory();

	return (
		<form className="w-full flex justify-center items-center" onSubmit={form.handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-5 w-1/3 border p-5">
				<p className="text-3xl">Add Product</p>
				<input type="text" placeholder="Product Name" {...form.register("name", { required: true })} />
				{form.formState.errors.name && <p className="text-red-500">Required !</p>}
				<input
					type="text"
					placeholder="Product price"
					{...form.register("price", { required: true })}
				/>
				{form.formState.errors.price && <p className="text-red-500">Required !</p>}
				<input
					type="text"
					placeholder="Product image"
					{...form.register("image", { required: true })}
				/>
				{form.formState.errors.image && <p className="text-red-500">Required !</p>}
				<select className="p-2" {...form.register("category", { required: true })}>
					<option value="">Select a category</option>
					{categories?.map((cate: ICategory) => (
						<option key={cate.id} value={cate.id}>
							{cate.name}
						</option>
					))}
				</select>
				{form.formState.errors.category && <p className="text-red-500">Required !</p>}
				<button typeof="submit" className="bg-zinc-700 px-3 py-2 ml-3 text-white" type="submit">
					Add
				</button>
			</div>
		</form>
	);
};

export default AddProducts;
