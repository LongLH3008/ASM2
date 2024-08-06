import { UserFilterProductQuery } from "../hooks/products/UseProductQuery";
import { IProduct } from "../interfaces/Iproduct";

type Props = {};

const Filter = ({ keyword }: { keyword: string | boolean }) => {
	const { data: products } = UserFilterProductQuery((keyword ? keyword : "") as string);

	return (
		<>
			{keyword && products?.length ? (
				products?.map((item: IProduct) => (
					<li>
						<a href={`/product/${item.id}`} className="block px-4 py-2 hover:bg-gray-100">
							{item.name}
						</a>
					</li>
				))
			) : (
				<li className="block px-4 py-2">No product found</li>
			)}
		</>
	);
};

export default Filter;
