import { Link } from "react-router-dom";

const Navdashbord = () => {
	return (
		<div className="px-48 py-5 mb-20 bg-black text-white h-24 flex justify-start items-center gap-5 *:px-3 *:py-2">
			<Link className="hover:bg-white hover:text-black transition-all duration-200 rounded-md" to={"/"}>
				Home
			</Link>
			<Link
				className="hover:bg-white hover:text-black transition-all duration-200 rounded-md"
				to={"/admin/product"}
			>
				Products
			</Link>
			<Link
				className="hover:bg-white hover:text-black transition-all duration-200 rounded-md"
				to={"/admin/category"}
			>
				Category
			</Link>
		</div>
	);
};

export default Navdashbord;
