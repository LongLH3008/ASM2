import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ICategory } from "../../../interfaces/Icategory";
import { IProduct } from "../../../interfaces/Iproduct";
import UseproductMutation from "../../../hooks/products/UseproductMutation";
import { getProductAdmin } from "../../../hooks/products/UseProductQuery";
import UsequeryCategory from "../../../hooks/categorys/UsequeryCategory";

const Listproductsss: React.FC = () => {
	const { data: products } = getProductAdmin();
	const { data: categories } = UsequeryCategory();
	// console.log("thông tin id của product nhé", products)

	const categoryMap = categories?.reduce((acc: Record<string, string>, category: ICategory) => {
		acc[category.id as string] = category.name;
		return acc;
	}, {});

	const { onSubmit } = UseproductMutation({
		actions: "DELETE",
		onSuccess: () => {
			Swal.fire({
				icon: "success",
				title: "Xoá thành công!",
				position: "top-end",
				showConfirmButton: true,
				showCloseButton: true,
				timer: 1000,
				customClass: {
					popup: "my-toast",
				},
			}).then(() => {
				// Refresh the data
				window.location.reload();
			});
		},
	});

	const handleDelete = (id: any) => {
		console.log("Deleting product with ID:", id);
		if (window.confirm("Bạn có chắc muốn xoá không?")) {
			onSubmit({ id });
		}
	};

	return (
		<>
			<h2 className="my-5 text-3xl">List Products</h2>
			<div className="relative border overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3">
								#
							</th>
							<th scope="col" className="px-6 py-3">
								Product Name
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Image
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								<Link
									to="/admin/product/add"
									className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
								>
									add
								</Link>
							</th>
						</tr>
					</thead>
					<tbody>
						{products?.map((item: IProduct, index: number) => (
							<tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
								<th
									scope="row"
									key={index}
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
								>
									{index + 1}
								</th>
								<td className="px-6 py-4">{item.name}</td>
								<td className="px-6 py-4">{item.price}</td>
								<td className="px-6 py-4">
									<img
										src={item.image}
										className="w-[150px] h-[100px]"
										alt={item.name}
									/>
								</td>
								<td className="px-6 py-4">{categoryMap?.[item.category as string]}</td>
								<td className="px-6 py-4">
									<button
										type="button"
										onClick={() => handleDelete(item?.id)}
										className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
									>
										Delete
									</button>
									<Link
										to={`/admin/product/update/${item.id}`}
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
									>
										Edit
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Listproductsss;
